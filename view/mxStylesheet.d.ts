declare interface StyleMap {
  [styleKey: string]: string;
}

declare class mxStylesheet {

  constructor();

  /**
   * Function: styles
   *
   * Maps from names to cell styles. Each cell style is a map of key,
   * value pairs.
   */
  styles: StyleMap;

  /**
   * Function: createDefaultVertexStyle
   *
   * Creates and returns the default vertex style.
   */
  createDefaultVertexStyle(): StyleMap;

  /**
   * Function: createDefaultEdgeStyle
   *
   * Creates and returns the default edge style.
   */
  createDefaultEdgeStyle(): StyleMap;

  /**
   * Function: putDefaultVertexStyle
   *
   * Sets the default style for vertices using defaultVertex as the
   * stylename.
   *
   * Parameters:
   * style - Key, value pairs that define the style.
   */
  putDefaultVertexStyle(style: StyleMap): void;

  /**
   * Function: putDefaultEdgeStyle
   *
   * Sets the default style for edges using defaultEdge as the stylename.
   */
  putDefaultEdgeStyle(style: StyleMap): void;

  /**
   * Function: getDefaultVertexStyle
   *
   * Returns the default style for vertices.
   */
  getDefaultVertexStyle(): StyleMap;

  /**
   * Function: getDefaultEdgeStyle
   *
   * Sets the default style for edges.
   */
  getDefaultEdgeStyle(): StyleMap;

  /**
   * Function: putCellStyle
   *
   * Stores the given map of key, value pairs under the given name in
   * <styles>.
   *
   * Example:
   *
   * The following example adds a new style called 'rounded' into an
   * existing stylesheet:
   *
   * (code)
   * var style = new Object();
   * style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
   * style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
   * style[mxConstants.STYLE_ROUNDED] = true;
   * graph.getStylesheet().putCellStyle('rounded', style);
   * (end)
   *
   * In the above example, the new style is an object. The possible keys of
   * the object are all the constants in <mxConstants> that start with STYLE
   * and the values are either JavaScript objects, such as
   * <mxPerimeter.RightAngleRectanglePerimeter> (which is in fact a function)
   * or expressions, such as true. Note that not all keys will be
   * interpreted by all shapes (eg. the line shape ignores the fill color).
   * The final call to this method associates the style with a name in the
   * stylesheet. The style is used in a cell with the following code:
   *
   * (code)
   * model.setStyle(cell, 'rounded');
   * (end)
   *
   * Parameters:
   *
   * name - Name for the style to be stored.
   * style - Key, value pairs that define the style.
   */
  putCellStyle(name: string, style: { [key: string]: any }): void;

  /**
   * Function: getCellStyle
   *
   * Returns the cell style for the specified stylename or the given
   * defaultStyle if no style can be found for the given stylename.
   *
   * Parameters:
   *
   * name - String of the form [(stylename|key=value);] that represents the
   * style.
   * defaultStyle - Default style to be returned if no style can be found.
   */
  getCellStyle(name: string, defaultStyle?: string): StyleMap;
}
