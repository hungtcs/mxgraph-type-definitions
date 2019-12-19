
declare class mxRectangleShape extends mxShape {

  fill: string;
  stroke: string;
  isDashed: boolean;
  fillOpacity: number;

  constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number);

  /**
   * Function: isHtmlAllowed
   *
   * Returns true for non-rounded, non-rotated shapes with no glass gradient.
   */
  isHtmlAllowed(): boolean;

  /**
   * Function: paintBackground
   *
   * Generic background painting implementation.
   */
  paintBackground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number);

  /**
   * Function: isRoundable
   *
   * Adds roundable support.
   */
  isRoundable(c?: mxAbstractCanvas2D, x?: number, y?: number, w?: number, h?: number);

  /**
   * Function: paintForeground
   *
   * Generic background painting implementation.
   */
  paintForeground(c: mxAbstractCanvas2D, x: number, y: number, w: number, h: number);
}
