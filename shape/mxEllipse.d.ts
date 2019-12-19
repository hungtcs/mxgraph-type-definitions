/**
 * Extends mxShape to implement an ellipse shape.
 * This shape is registered under mxConstants.SHAPE_ELLIPSE in mxCellRenderer.
 */
declare class mxEllipse extends mxShape {
  /**
   *
   * @param bounds         mxRectangle that defines the bounds.  This is stored in mxShape.bounds.
   * @param fill           String that defines the fill color.  This is stored in <fill>.
   * @param stroke         String that defines the stroke color.  This is stored in <stroke>.
   * @param strokewidth    Optional integer that defines the stroke width.  Default is 1.  This is stored in <strokewidth>.
   */
  constructor(bounds: mxRectangle, fill: string, stroke: string, strokewidth?: number);

}
