import { random } from 'lodash';

export type IRGBA = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

export type IHSLA = {
  h: number; // 0-360
  s: number; // 0-1
  l: number; // 0-1
  a: number; // 0-1
};

export class XColor {
  private hue = Math.random() * 359; // 0-359 //色相
  private saturation = 0.77; // 0-100% ,饱和度
  private lightness = 0.8; // 0-100%,亮度
  private alpha = 1; // 0-1:透明度。0：全透明，1：不透明

  constructor(
    hue: number,
    saturation: number,
    lightness: number,
    alpha: number
  ) {
    if (
      hue > 360 ||
      hue < 0 ||
      saturation > 1 ||
      saturation < 0 ||
      lightness > 1 ||
      lightness < 0 ||
      alpha < 0 ||
      alpha > 1
    ) {
      throw new Error(
        `XColor error hue:${hue},sat:${saturation},lig:${lightness},al:${alpha}`
      );
    }
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.alpha = alpha;
  }

  //
  public static makeFromString(color: string): XColor {
    if (/rgb/i.test(color)) {
      const res = color.match(
        /rgba?\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*([01](\.\d+)?)?/i
      );
      if (!res) {
        throw new Error(`color format error:${color}`);
      }
      return XColor.makeFromRGBA(+res[1], +res[2], +res[3], +res[4]); // +res[4]可能为空
    }
    if (/hsl/.test(color)) {
      // @todo:h不能处理有小数的情况
      const res = color.match(
        /hsla?\((\d{1,3})\s*,\s*(\d+\.?\d*)%\s*,\s*(\d+\.?\d*)%\s*,\s*([01](\.\d+)?)/
      );
      if (!res) {
        throw new Error(`color format error:${color}`);
      }
      return XColor.makeFromHSLA({
        h: Number(res[1]),
        s: Number(res[2]) / 100,
        l: Number(res[3]) / 100,
        a: Number(res[4]),
      });
    }
    if (/^#/.test(color)) {
      const red = +`0x${color[1]}${color[2]}`;
      const green = +`0x${color[3]}${color[4]}`;
      const blue = +`0x${color[5]}${color[6]}`;
      return XColor.makeFromRGBA(red, green, blue, 1);
    }

    throw new Error(`format ${color}`);
  }

  public static makeFromHSLA(color: IHSLA) {
    if (
      color.h < 0 ||
      color.h > 360 ||
      color.s < 0 ||
      color.s > 1 ||
      color.l < 0 ||
      color.l > 1 ||
      color.a < 0 ||
      color.a > 1
    ) {
      throw new Error('color is wrong');
    }
    return new XColor(color.h, color.s, color.l, color.a);
  }

  public static makeFromRGBA(...args: number[]): XColor {
    if (args.length !== 3 && args.length !== 4) {
      throw new Error('invalid arguments');
    }

    const rgba: IRGBA = {
      red: args[0],
      green: args[1],
      blue: args[2],
      alpha: args[3] || 1,
    };
    if (
      rgba.red < 0 ||
      rgba.red > 255 ||
      rgba.blue < 0 ||
      rgba.blue > 255 ||
      rgba.green < 0 ||
      rgba.green > 255 ||
      rgba.alpha < 0 ||
      rgba.alpha > 1
    ) {
      throw new Error('color is wrong');
    }

    // define h,s,l
    let h;
    let s;

    // get options
    let rgb = [rgba.red, rgba.green, rgba.blue];

    rgb = rgb.map(function (v: number) {
      return v / 255.0;
    });

    const max = Math.max.apply(null, rgb);
    const min = Math.min.apply(null, rgb);

    const delta = max - min;

    // l
    const l = (max + min) / 2.0;

    // h
    if (max === min) {
      h = 0;
    } else if (max === rgb[0] && rgb[1] >= rgb[2]) {
      h = 60 * ((rgb[1] - rgb[2]) / delta);
    } else if (max === rgb[0] && rgb[1] < rgb[2]) {
      h = 60 * ((rgb[1] - rgb[2]) / delta) + 360;
    } else if (max === rgb[1]) {
      h = 60 * ((rgb[2] - rgb[0]) / delta) + 120;
    } else if (max === rgb[2]) {
      h = 60 * ((rgb[0] - rgb[1]) / delta) + 240;
    }

    // s
    if (l === 0 || max === min) {
      s = 0;
    } else if (l > 0 && l <= 0.5) {
      s = delta / (2 * l);
    } else {
      s = delta / (2 - 2 * l);
    }

    return new XColor(h as any, s, l, rgba.alpha);
  }

  public static black() {
    return new XColor(0, 0, 0, 1);
  }

  public static white() {
    return new XColor(0, 1, 1, 1);
  }

  public static randColor(sat = 0.5, l = 0.5): XColor {
    return new XColor(random(0, 360), sat, l, 1);
  }

  public static randLightColor(sat = 0.7, l = 0.8): XColor {
    return new XColor(random(0, 360), sat, l, 0.9);
  }

  public isWhite() {
    return this.lightness === 1;
  }

  public lighten(step = 0): XColor {
    if (step > 1 || step < 0) {
      throw new Error('arguments error. step should be  in 0-1');
    }
    const color = this.clone();
    const lightness = this.lightness + step;
    color.lightness = lightness >= 0 ? (lightness < 1 ? lightness : 1) : 0;
    return color;
  }

  public darken(step: number) {
    if (step > 1 || step < 0) {
      throw new Error('arguments error. step should be  in 0-1');
    }
    const color = this.clone();
    const lightness = this.lightness - step;
    color.lightness = lightness >= 0 ? (lightness < 1 ? lightness : 1) : 0;
    return color;
  }

  public setHue(hue: number) {
    if (!this.checkHue()) {
      throw new Error('invalid arguments');
    }
    this.hue = hue;
    return this;
  }

  public setSaturation(s: number): XColor {
    if (!this.checkSaturation()) {
      throw new Error('invalid arguments');
    }
    this.saturation = s;
    return this;
  }

  public setLightness(l: number): XColor {
    if (!this.checkLightness()) {
      throw new Error('invalid arguments');
    }
    this.lightness = l;
    return this;
  }

  public setAlpha(alpha: number): XColor {
    if (!this.checkAlpha()) {
      throw new Error('invalid arguments');
    }
    this.alpha = alpha;
    return this;
  }

  public saturate(step: number) {
    if (step > 1 || step < 0) {
      throw new Error('arguments error. step should be  in 0-1');
    }
    const color = this.clone();
    const saturation = this.saturation + step;
    color.saturation = saturation >= 0 ? (saturation < 1 ? saturation : 1) : 0;
    return color;
  }

  public desaturate(step: number): XColor {
    if (step > 1 || step < 0) {
      throw new Error('arguments error. step should be  in 0-1');
    }
    const color = this.clone();
    const saturation = this.saturation - step;
    color.saturation = saturation >= 0 ? (saturation < 1 ? saturation : 1) : 0;
    return color;
  }

  // 变淡（透明度)
  public fade(step: number) {
    if (step > 1 || step < 0) {
      throw new Error('arguments error. step should be  in 0-1');
    }
    const color = this.clone();
    const alpha = this.alpha - step;
    color.alpha = alpha >= 0 ? (alpha < 1 ? alpha : 1) : 0;
    return color;
  }

  // 变不透明
  public opaque(step: number) {
    if (step > 1 || step < 0) {
      throw new Error('arguments error. step should be  in 0-1');
    }
    const color = this.clone();
    const alpha = this.alpha + step;
    color.alpha = alpha >= 0 ? (alpha < 1 ? alpha : 1) : 0;
    return color;
  }

  public toString() {
    return `hsla(${this.hue},${this.saturation * 100}%,${
      this.lightness * 100
    }%,${this.alpha})`;
  }

  public toRGB(): IRGBA {
    let red;
    let green;
    let blue;

    if (this.saturation === 0) {
      red = green = blue = this.lightness;
    } else {
      const q =
        this.lightness < 0.5
          ? this.lightness * (1 + this.saturation)
          : this.lightness + this.saturation - this.lightness * this.saturation;
      const p = 2 * this.lightness - q;

      const hue = this.hue / 360;
      red = this._hue2rgb(p, q, hue + 1 / 3);
      green = this._hue2rgb(p, q, hue);
      blue = this._hue2rgb(p, q, hue - 1 / 3);
    }

    return {
      red: Math.round(red * 255),
      green: Math.round(green * 255),
      blue: Math.round(blue * 255),
      alpha: this.alpha,
    };
  }

  public toRGBAString(): string {
    const rgba = this.toRGB();
    return `rgba(${rgba.red},${rgba.green},${rgba.blue},${rgba.alpha})`;
  }

  public clone() {
    return new XColor(this.hue, this.saturation, this.lightness, this.alpha);
  }

  private checkHue() {
    return this.hue >= 0 && this.hue <= 360;
  }

  private checkSaturation() {
    return this.saturation >= 0 && this.saturation <= 1;
  }

  private checkLightness() {
    return this.lightness >= 0 && this.lightness <= 1;
  }

  private checkAlpha() {
    return this.alpha >= 0 && this.alpha <= 1;
  }

  private _hue2rgb(p: number, q: number, t: number) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }

  get isValidValue(): boolean {
    return (
      this.checkHue() &&
      this.checkSaturation() &&
      this.checkLightness() &&
      this.checkAlpha()
    );
  }

  /**
   * 获得颜色的灰度值.[0-255]
   * http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
   *
   * 1. 灰度值和透明度没有关系。
   * 2. 灰度值和色相也有关系
   * 3. 灰度值越小则越暗.(白色的灰度值为255，黑色的灰度值为0)
   */
  get grayscale() {
    const rgb = this.toRGB();
    return rgb.red * 0.299 + rgb.green * 0.587 + rgb.blue * 0.114;
  }

  /**
   * 根据背景色灰度值来决定最佳的文本颜色.
   * 如果接近透明或者灰度值大于170
   */
  get textColor(): XColor {
    return this.alpha < 0.1 || this.grayscale > 170
      ? XColor.black()
      : XColor.white();
  }

  get isTransparent() {
    return this.alpha === 0;
  }
}
