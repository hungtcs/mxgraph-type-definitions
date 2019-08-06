
declare class mxPolyline extends mxShape {
  constructor(points: mxPoint[], stroke: string, strokewidth?: number);

  /**
   * Function: getRotation
   *
   * Returns 0.
   */
  getRotation(): number;

  /**
   * Function: getShapeRotation
   *
   * Returns 0.
   */
  getShapeRotation(): number;

  /**
   * Function: isPaintBoundsInverted
   *
   * Returns false.
   */
  isPaintBoundsInverted(): boolean;

  /**
   * Function: paintEdgeShape
   *
   * Paints the line shape.
   */
  paintEdgeShape(c: mxAbstractCanvas2D, pts: mxPoint[]): void;

  /**
   * Function: paintLine
   *
   * Paints the line shape.
   */
  paintLine(c: mxAbstractCanvas2D, pts: mxPoint[], rounded?: boolean): void;

  /**
   * Function: paintLine
   *
   * Paints the line shape.
   */
  paintCurvedLine(c: mxAbstractCanvas2D, pts: mxPoint[]): void;
}
