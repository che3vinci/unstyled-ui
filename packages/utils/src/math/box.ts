// import Distance from '../distance';
// import Point from '../point/point';

// export default class Box implements IValuable {
//   private _left: number;
//   private _top: number;
//   private _width: number;
//   private _height: number;
//   constructor(left: number, _top: number, width: number, height: number) {
//     if (width < 0 || height < 0) {
//       console.error(
//         '[Box.constructor]',
//         `width=${width},height=${height} cant be negative`
//       );
//     }

//     this._left = left;
//     this._top = _top;
//     this._width = width;
//     this._height = height;
//   }

//   public static makeFromSVGRect(box: SVGRect): Box {
//     return new Box(box.x, box.y, box.width, box.height);
//   }

//   public static makeFromClientRect(box: ClientRect): Box {
//     return new Box(box.left, box.top, box.width, box.height);
//   }

//   public static makeFromSnapBox(box: BBox): Box {
//     return new Box(box.x, box.y, box.width, box.height);
//   }

//   public static make(center: Point, width: number, height: number) {
//     const x: number = center.x - width / 2;
//     const y: number = center.y - height / 2;
//     return new Box(x, y, width, height);
//   }

//   public static makeFromCornerPoint(
//     left: number,
//     top: number,
//     right: number,
//     bottom: number
//   ) {
//     // let width = Math.abs(right - left);
//     // let height = Math.abs(bottom - top);
//     const width = right - left;
//     const height = bottom - top;

//     return new Box(left, top, width, height);
//   }

//   public static staticBigger(box: Box, leftTop = 10, widthHeight = 20) {
//     box._left -= leftTop;
//     box._top -= leftTop;
//     box._height += widthHeight;
//     box._width += widthHeight;
//     return box;
//   }

//   public static makeEmptyBox(): Box {
//     return new Box(0, 0, 0, 0);
//   }

//   // public toSVGRect(rootElement: SVGSVGElement = getSvgElement()): SVGRect {
//   //   const svgRect: SVGRect = rootElement.createSVGRect();
//   //   svgRect.x = this._left;
//   //   svgRect.y = this._top;
//   //   svgRect.height = this._height;
//   //   svgRect.width = this._width;

//   //   return svgRect;
//   // }

//   /**
//    * 2个box之间是否有交集。一般用来比较2个svg元素是否相交
//    */
//   public hasIntersection(box: Box): boolean {
//     const dis = this.distance_(box);
//     return dis.x < 0 && dis.y < 0;
//   }

//   /**
//    *  2个矩形在x和y轴之间构成的gap距离
//    *  stDistance_.x < 0: 说明在x方向相交
//    *  stDistance_.y < 0 :说明在y方向相交
//    *
//    *  要distance.x <0 和distance.y <0同时满足时，2个元素才真正相交。
//    */
//   public distance_(box: Box): Distance {
//     const width: number = (this.width + box.width) / 2;
//     const height: number = (this.height + box.height) / 2;
//     const xCenterDistance: number = Math.abs(box.center_N.x - this.center_N.x);
//     const yCenterDistance: number = Math.abs(box.center_N.y - this.center_N.y);
//     return new Distance(xCenterDistance - width, yCenterDistance - height);
//   }

//   // box在我的哪个方向.
//   /**
//    *  Right: 整个右边
//    * @param {Box} box
//    * @returns {Direction}
//    */
//   public whereIs(box: Box): Direction {
//     if (this.hasIntersection(box)) {
//       return Direction.Intersection;
//     }
//     // 在右侧情况,
//     if (box.left > this.right) {
//       if (box.bottom < this.top) {
//         return Direction.RightUp;
//       }
//       if (box.top > this.bottom) {
//         return Direction.RightDown;
//       }
//       return Direction.Right;
//     }

//     // 在下侧的情况
//     if (box.top > this.bottom) {
//       if (box.left > this.right) {
//         return Direction.RightDown;
//       }
//       if (box.right < this.left) {
//         return Direction.LeftDown;
//       }
//       return Direction.Down;
//     }

//     // 在左侧
//     if (box.right < this.left) {
//       if (box.top > this.bottom) {
//         return Direction.LeftDown;
//       }
//       if (box.bottom < this.top) {
//         return Direction.LeftUp;
//       }
//       return Direction.Left;
//     }

//     // 在上测
//     if (box.bottom < this.top) {
//       if (box.right < this.left) {
//         return Direction.LeftUp;
//       }
//       if (box.left > this.right) {
//         return Direction.RightUp;
//       }
//       return Direction.Up;
//     }

//     return Direction.Unkown;
//   }

//   /**
//    * 2个矩形中心点之间的距离
//    */
//   public centerDistance_(box: Box): Distance {
//     return this.center_N.distance_(box.center_N);
//   }

//   public centerStDistance(box: Box) {
//     return this.center_N.stDistance_(box.center_N);
//   }

//   /**
//    *
//    * @param {Box} containedBox 被包含的box
//    * @return {boolean}
//    */
//   public contain(containedBox: Box): boolean {
//     return (
//       this._left <= containedBox.left &&
//       this._top <= containedBox.top &&
//       this.right >= containedBox.right &&
//       this.bottom > containedBox.bottom
//     );
//   }

//   /**
//    * 在x和y方向移动距离
//    * @param dx:x方向移动的距离，可能是负数
//    * @param dy:y方向移动的距离，可能是负数
//    */
//   public translate(dx: number, dy: number): Box;
//   public translate(dist: Distance): Box;
//   public translate(): Box {
//     if (arguments.length === 1) {
//       this._left += arguments[0].x;
//       this._top += arguments[0].y;
//     } else {
//       this._left += arguments[0]; // dx
//       this._top += arguments[1]; // dy
//     }
//     return this;
//   }
//   public getLength() {
//     return this.width * 2 + this.height * 2;
//   }

//   public isPointInFill_(point: Point): boolean {
//     return (
//       point.x > this._left &&
//       point.x < this.right &&
//       point.y > this._top &&
//       point.y < this.bottom
//     );
//   }

//   /**
//    *
//    * @param point
//    * @param round
//    * @returns {boolean}
//    */
//   public isPointRoundInStroke_(point: Point, round = 3) {
//     return (
//       (inRange(point.x, this._left - round, this.right + round) &&
//         roundEqual(point.y, this.top)) || // top
//       (inRange(point.x, this._left - round, this.right + round) &&
//         roundEqual(point.y, this.bottom)) || // bottom
//       (inRange(point.y, this._top - round, this.bottom + round) &&
//         roundEqual(point.x, this.left)) || // left
//       (inRange(point.y, this._top - round, this.bottom + round) &&
//         roundEqual(point.x, this.right))
//     ); // right
//   }

//   /**
//    * point在4个角上
//    * @param point
//    * @returns {boolean}
//    */
//   public isPointAtCorner_(point: Point): boolean {
//     return (
//       this.leftTop_N.touchMe_(point) ||
//       this.leftBottom_N.touchMe_(point) ||
//       this.rightTop_N.touchMe_(point) ||
//       this.rightBottom_N.touchMe_(point)
//     );
//   }

//   /**
//    * 是否位于BCBox的正中心.
//    * 默认距离中心2个像素都认为已经位于中心。
//    * @param point
//    */
//   public isPointAtCenter_(point: Point): boolean {
//     return this.center_N.touchMe_(point);
//   }

//   public round_N(): Box {
//     return new Box(
//       round(this._left),
//       round(this._top),
//       roundEven(this._width),
//       roundEven(this._height)
//     );
//   }

//   // @implement IJsonable interface
//   public value() {
//     return {
//       left: this._left,
//       top: this._top,
//       width: this._width,
//       height: this._height,
//     };
//   }

//   public fromValue(data: any): Box {
//     this._left = data.left;
//     this._top = data.top;
//     this._width = data.width;
//     this._height = data.height;
//     return this;
//   }

//   public bigger(step: number) {
//     this._left -= step;
//     this._top -= step;
//     this._height += 2 * step;
//     this._width += 2 * step;
//     return this;
//   }

//   // public transform_N(transform: Transform): Box {
//   //   const leftTop = this.leftTop_N.transform_N(transform);
//   //   const rightBottom = this.rightBottom_N.transform_N(transform);
//   //   return Box.makeFromCornerPoint(
//   //     leftTop.x,
//   //     leftTop.y,
//   //     rightBottom.x,
//   //     rightBottom.y
//   //   );
//   // }

//   public assign(box: Box): Box {
//     this.left = box.left;
//     this.top = box.top;
//     this.width = box.width;
//     this.height = box.height;
//     return this;
//   }

//   public clone(): Box {
//     return new Box(this._left, this._top, this._width, this._height);
//   }

//   public isEqual(box: Box): boolean {
//     return (
//       this._left === box.left &&
//       this._top === box.top &&
//       this._width === box.width &&
//       this._height === box.height
//     );
//   }

//   public isEmpty() {
//     return this._height === 0 && this._width === 0;
//   }

//   public assignLeftTop(point: Point): void {
//     this._left = point.x;
//     this._top = point.y;
//   }

//   get corners() {
//     return [
//       this.leftBottom_N,
//       this.leftTop_N,
//       this.rightBottom_N,
//       this.rightTop_N,
//     ];
//   }

//   public toString() {
//     return `left:${this.left},top:${this.top},width=${this.width},height=${this.height}`;
//   }

//   get left(): number {
//     return this._left;
//   }

//   set left(value: number) {
//     this._left = value;
//   }

//   get top(): number {
//     return this._top;
//   }

//   set top(value: number) {
//     this._top = value;
//   }

//   get width(): number {
//     return this._width;
//   }

//   set width(value: number) {
//     this._width = value;
//   }

//   get height(): number {
//     return this._height;
//   }

//   set height(value: number) {
//     this._height = value;
//   }

//   get right(): number {
//     return this._left + this._width;
//   }

//   get bottom(): number {
//     return this._top + this._height;
//   }

//   get center_N(): Point {
//     return new Point(
//       this._left + this._width / 2,
//       this._top + this._height / 2
//     );
//   }

//   get leftTop_N(): Point {
//     return new Point(this._left, this._top);
//   }

//   get leftBottom_N(): Point {
//     return new Point(this.left, this.bottom);
//   }

//   get rightTop_N(): Point {
//     return new Point(this.right, this.top);
//   }

//   get rightBottom_N(): Point {
//     return new Point(this.right, this.bottom);
//   }

//   // get middlePointOfLeftEdge_N(): Point {
//   //   return getMiddlePoint(this.leftTop_N, this.leftBottom_N);
//   // }

//   // get middlePointOfRightEdge_N(): Point {
//   //   return getMiddlePoint(this.rightTop_N, this.rightBottom_N);
//   // }
// }


