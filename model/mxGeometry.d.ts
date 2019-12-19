declare class mxGeometry extends mxRectangle {

  constructor(x?: number, y?: number, width?: number, height?: number);

  /**
   * Variable: TRANSLATE_CONTROL_POINTS
   *
   * Global switch to translate the points in translate. Default is true.
   */
  readonly TRANSLATE_CONTROL_POINTS: boolean;

  /**
   * Variable: alternateBounds
   *
   * Stores alternate values for x, y, width and height in a rectangle. See
   * <swap> to exchange the values. Default is null.
   */
  alternateBounds: mxRectangle;

  /**
   * Variable: sourcePoint
   *
   * Defines the source <mxPoint> of the edge. This is used if the
   * corresponding edge does not have a source vertex. Otherwise it is
   * ignored. Default is  null.
   */
  sourcePoint: mxPoint;

  /**
   * Variable: targetPoint
   *
   * Defines the target <mxPoint> of the edge. This is used if the
   * corresponding edge does not have a target vertex. Otherwise it is
   * ignored. Default is null.
   */
  targetPoint: mxPoint;

  /**
   * Variable: points
   *
   * Array of <mxPoints> which specifies the control points along the edge.
   * These points are the intermediate points on the edge, for the endpoints
   * use <targetPoint> and <sourcePoint> or set the terminals of the edge to
   * a non-null value. Default is null.
   */
  points: mxPoint[];

  /**
   * Variable: offset
   *
   * For edges, this holds the offset (in pixels) from the position defined
   * by <x> and <y> on the edge. For relative geometries (for vertices), this
   * defines the absolute offset from the point defined by the relative
   * coordinates. For absolute geometries (for vertices), this defines the
   * offset for the label. Default is null.
   */
  offset: mxPoint;

  /**
   * Variable: relative
   *
   * Specifies if the coordinates in the geometry are to be interpreted as
   * relative coordinates. For edges, this is used to define the location of
   * the edge label relative to the edge as rendered on the display. For
   * vertices, this specifies the relative location inside the bounds of the
   * parent cell.
   *
   * If this is false, then the coordinates are relative to the origin of the
   * parent cell or, for edges, the edge label position is relative to the
   * center of the edge as rendered on screen.
   *
   * Default is false.
   */
  relative: boolean;

  /**
   * Function: swap
   *
   * Swaps the x, y, width and height with the values stored in
   * <alternateBounds> and puts the previous values into <alternateBounds> as
   * a rectangle. This operation is carried-out in-place, that is, using the
   * existing geometry instance. If this operation is called during a graph
   * model transactional change, then the geometry should be cloned before
   * calling this method and setting the geometry of the cell using
   * <mxGraphModel.setGeometry>.
   */
  swap(): void;

  /**
   * Function: getTerminalPoint
   *
   * Returns the <mxPoint> representing the source or target point of this
   * edge. This is only used if the edge has no source or target vertex.
   *
   * Parameters:
   *
   * isSource - Boolean that specifies if the source or target point
   * should be returned.
   */
  getTerminalPoint(isSource: boolean): mxPoint;

  /**
   * Function: setTerminalPoint
   *
   * Sets the <sourcePoint> or <targetPoint> to the given <mxPoint> and
   * returns the new point.
   *
   * Parameters:
   *
   * point - Point to be used as the new source or target point.
   * isSource - Boolean that specifies if the source or target point
   * should be set.
   */
  setTerminalPoint(point: mxPoint, isSource: boolean): mxPoint;

  /**
   * Function: rotate
   *
   * Rotates the geometry by the given angle around the given center. That is,
   * <x> and <y> of the geometry, the <sourcePoint>, <targetPoint> and all
   * <points> are translated by the given amount. <x> and <y> are only
   * translated if <relative> is false.
   *
   * Parameters:
   *
   * angle - Number that specifies the rotation angle in degrees.
   * cx - <mxPoint> that specifies the center of the rotation.
   */
  rotate(angle: number, cx: mxPoint): void;

  /**
   * Function: translate
   *
   * Translates the geometry by the specified amount. That is, <x> and <y> of the
   * geometry, the <sourcePoint>, <targetPoint> and all <points> are translated
   * by the given amount. <x> and <y> are only translated if <relative> is false.
   * If <TRANSLATE_CONTROL_POINTS> is false, then <points> are not modified by
   * this function.
   *
   * Parameters:
   *
   * dx - Number that specifies the x-coordinate of the translation.
   * dy - Number that specifies the y-coordinate of the translation.
   */
  translate(dx: number, dy: number): void;

  /**
   * Function: scale
   *
   * Scales the geometry by the given amount. That is, <x> and <y> of the
   * geometry, the <sourcePoint>, <targetPoint> and all <points> are scaled
   * by the given amount. <x>, <y>, <width> and <height> are only scaled if
   * <relative> is false. If <fixedAspect> is true, then the smaller value
   * is used to scale the width and the height.
   *
   * Parameters:
   *
   * sx - Number that specifies the horizontal scale factor.
   * sy - Number that specifies the vertical scale factor.
   * fixedAspect - Optional boolean to keep the aspect ratio fixed.
   */
  scale(sx: number, sy: number, fixedAspect?: boolean);

  /**
   * Function: equals
   *
   * Returns true if the given object equals this geometry.
   */
  equals(obj: mxGeometry): boolean;
}
