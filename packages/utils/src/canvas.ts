export function convertCanvasToImage(selector: string) {
  const canvas = document.querySelector(selector) as HTMLCanvasElement;
  if (!canvas) {
    throw new Error('element does not exist');
  }
  const image = new Image();
  image.src = canvas.toDataURL('image/png');
  return image;
}

export function downloadCanvasAsImage(selector: string, name = 'name.png') {
  const canvas: HTMLCanvasElement | null = document.querySelector(selector);
  if (!canvas) {
    throw new Error('element does not exist');
  }
  const link = document.createElement('a');
  link.setAttribute('download', name);
  const url = canvas
    .toDataURL('image/png')
    .replace('image/png', 'image/octet-stream');

  link.setAttribute('href', url);
  link.click();
}

export interface IHTMLExportInfo {
  html: string;
  width: number;
  height: number;
}
export function convertHtml2Canvas(
  svgInfo: IHTMLExportInfo
): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const dpr = window.devicePixelRatio;

    // 把图形放大了2倍
    canvas.setAttribute('width', `${svgInfo.width * dpr * 2}px`);
    canvas.setAttribute('height', `${svgInfo.height * dpr * 2}px`);
    canvas.style.visibility = 'hidden';

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    // 设置白色背景。防止转换为jpg格式是背景为黑色（alpha通道丢失）
    ctx.fillStyle = 'rgb(255,255,255)';

    // 为了防止高清屏模糊，需要将图像放大2倍
    ctx.scale(dpr * 2, dpr * 2);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.src = 'data:image/svg+xml,' + encodeURIComponent(svgInfo.html);
    img.onload = function () {
      // 把img绘制到canvas中
      ctx.drawImage(img, 0, 0);
      resolve(canvas);
    };
    img.onabort = function (error) {
      reject({ name: 'convertHtml2Canvas', message: 'onabort', error });
    };
    img.onerror = function (error) {
      reject({ name: 'convertHtml2Canvas', message: 'onerror', error });
    };
  });
}
