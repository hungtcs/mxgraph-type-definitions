
declare class mxConnector extends mxPolyline {

  constructor(points: mxPoint[], stroke: string, strokewidth?: number);

  /**
   * Function: updateBoundingBox
   *
   * Updates the <boundingBox> for this shape using <createBoundingBox> and
   * <augmentBoundingBox> and stores the result in <boundingBox>.
   */
  updateBoundingBox(): void;

  /**
   * Function: paintEdgeShape
   *
   * Paints the line shape.
   */
  paintEdgeShape(c: mxAbstractCanvas2D, pts: mxPoint[]): void;

  /**
   * Function: createMarker
   *
   * Prepares the marker by adding offsets in pts and returning a function to
   * paint the marker.
   */
  createMarker(c: mxAbstractCanvas2D, pts: mxPoint[], source: boolean): mxMarker;

  /**
   * Function: augmentBoundingBox
   *
   * Augments the bounding box with the strokewidth and shadow offsets.
   */
  augmentBoundingBox(bbox: mxRectangle): void;
}
