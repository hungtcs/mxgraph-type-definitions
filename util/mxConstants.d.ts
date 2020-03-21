declare class mxConstants {
  /**
   * Class: mxConstants
   *
   * Defines various global constants.
   *
   * Variable: DEFAULT_HOTSPOT
   *
   * Defines the portion of the cell which is to be used as a connectable
   * region. Default is 0.3. Possible values are 0 < x <= 1.
   */
  static DEFAULT_HOTSPOT: 0.3;

  /**
   * Variable: MIN_HOTSPOT_SIZE
   *
   * Defines the minimum size in pixels of the portion of the cell which is
   * to be used as a connectable region. Default is 8.
   */
  static MIN_HOTSPOT_SIZE: 8;

  /**
   * Variable: MAX_HOTSPOT_SIZE
   *
   * Defines the maximum size in pixels of the portion of the cell which is
   * to be used as a connectable region. Use 0 for no maximum. Default is 0.
   */
  static MAX_HOTSPOT_SIZE: 0;

  /**
   * Variable: RENDERING_HINT_EXACT
   *
   * Defines the exact rendering hint.
   */
  static RENDERING_HINT_EXACT: 'exact';

  /**
   * Variable: RENDERING_HINT_FASTER
   *
   * Defines the faster rendering hint.
   */
  static RENDERING_HINT_FASTER: 'faster';

  /**
   * Variable: RENDERING_HINT_FASTEST
   *
   * Defines the fastest rendering hint.
   */
  static RENDERING_HINT_FASTEST: 'fastest';

  /**
   * Variable: DIALECT_SVG
   *
   * Defines the SVG display dialect name.
   */
  static DIALECT_SVG: 'svg';

  /**
   * Variable: DIALECT_VML
   *
   * Defines the VML display dialect name.
   */
  static DIALECT_VML: 'vml';

  /**
   * Variable: DIALECT_MIXEDHTML
   *
   * Defines the mixed HTML display dialect name.
   */
  static DIALECT_MIXEDHTML: 'mixedHtml';

  /**
   * Variable: DIALECT_PREFERHTML
   *
   * Defines the preferred HTML display dialect name.
   */
  static DIALECT_PREFERHTML: 'preferHtml';

  /**
   * Variable: DIALECT_STRICTHTML
   *
   * Defines the strict HTML display dialect.
   */
  static DIALECT_STRICTHTML: 'strictHtml';

  /**
   * Variable: NS_SVG
   *
   * Defines the SVG namespace.
   */
  static NS_SVG: 'http://www.w3.org/2000/svg';

  /**
   * Variable: NS_XHTML
   *
   * Defines the XHTML namespace.
   */
  static NS_XHTML: 'http://www.w3.org/1999/xhtml';

  /**
   * Variable: NS_XLINK
   *
   * Defines the XLink namespace.
   */
  static NS_XLINK: 'http://www.w3.org/1999/xlink';

  /**
   * Variable: SHADOWCOLOR
   *
   * Defines the color to be used to draw shadows in shapes and windows.
   * Default is gray.
   */
  static SHADOWCOLOR: 'gray';

  /**
   * Variable: VML_SHADOWCOLOR
   *
   * Used for shadow color in filters where transparency is not supported
   * (Microsoft Internet Explorer). Default is gray.
   */
  static VML_SHADOWCOLOR: 'gray';

  /**
   * Variable: SHADOW_OFFSET_X
   *
   * Specifies the x-offset of the shadow. Default is 2.
   */
  static SHADOW_OFFSET_X: 2;

  /**
   * Variable: SHADOW_OFFSET_Y
   *
   * Specifies the y-offset of the shadow. Default is 3.
   */
  static SHADOW_OFFSET_Y: 3;

  /**
   * Variable: SHADOW_OPACITY
   *
   * Defines the opacity for shadows. Default is 1.
   */
  static SHADOW_OPACITY: 1;

  /**
   * Variable: NODETYPE_ELEMENT
   *
   * DOM node of type ELEMENT.
   */
  static NODETYPE_ELEMENT: 1;

  /**
   * Variable: NODETYPE_ATTRIBUTE
   *
   * DOM node of type ATTRIBUTE.
   */
  static NODETYPE_ATTRIBUTE: 2;

  /**
   * Variable: NODETYPE_TEXT
   *
   * DOM node of type TEXT.
   */
  static NODETYPE_TEXT: 3;

  /**
   * Variable: NODETYPE_CDATA
   *
   * DOM node of type CDATA.
   */
  static NODETYPE_CDATA: 4;

  /**
   * Variable: NODETYPE_ENTITY_REFERENCE
   *
   * DOM node of type ENTITY_REFERENCE.
   */
  static NODETYPE_ENTITY_REFERENCE: 5;

  /**
   * Variable: NODETYPE_ENTITY
   *
   * DOM node of type ENTITY.
   */
  static NODETYPE_ENTITY: 6;

  /**
   * Variable: NODETYPE_PROCESSING_INSTRUCTION
   *
   * DOM node of type PROCESSING_INSTRUCTION.
   */
  static NODETYPE_PROCESSING_INSTRUCTION: 7;

  /**
   * Variable: NODETYPE_COMMENT
   *
   * DOM node of type COMMENT.
   */
  static NODETYPE_COMMENT: 8;

  /**
   * Variable: NODETYPE_DOCUMENT
   *
   * DOM node of type DOCUMENT.
   */
  static NODETYPE_DOCUMENT: 9;

  /**
   * Variable: NODETYPE_DOCUMENTTYPE
   *
   * DOM node of type DOCUMENTTYPE.
   */
  static NODETYPE_DOCUMENTTYPE: 10;

  /**
   * Variable: NODETYPE_DOCUMENT_FRAGMENT
   *
   * DOM node of type DOCUMENT_FRAGMENT.
   */
  static NODETYPE_DOCUMENT_FRAGMENT: 11;

  /**
   * Variable: NODETYPE_NOTATION
   *
   * DOM node of type NOTATION.
   */
  static NODETYPE_NOTATION: 12;

  /**
   * Variable: TOOLTIP_VERTICAL_OFFSET
   *
   * Defines the vertical offset for the tooltip.
   * Default is 16.
   */
  static TOOLTIP_VERTICAL_OFFSET: 16;

  /**
   * Variable: DEFAULT_VALID_COLOR
   *
   * Specifies the default valid color. Default is #0000FF.
   */
  static DEFAULT_VALID_COLOR: '#00FF00';

  /**
   * Variable: DEFAULT_INVALID_COLOR
   *
   * Specifies the default invalid color. Default is #FF0000.
   */
  static DEFAULT_INVALID_COLOR: '#FF0000';

  /**
   * Variable: OUTLINE_HIGHLIGHT_COLOR
   *
   * Specifies the default highlight color for shape outlines.
   * Default is #0000FF. This is used in <mxEdgeHandler>.
   */
  static OUTLINE_HIGHLIGHT_COLOR: '#00FF00';

  /**
   * Variable: OUTLINE_HIGHLIGHT_COLOR
   *
   * Defines the strokewidth to be used for shape outlines.
   * Default is 5. This is used in <mxEdgeHandler>.
   */
  static OUTLINE_HIGHLIGHT_STROKEWIDTH: 5;

  /**
   * Variable: HIGHLIGHT_STROKEWIDTH
   *
   * Defines the strokewidth to be used for the highlights.
   * Default is 3.
   */
  static HIGHLIGHT_STROKEWIDTH: 3;

  /**
   * Variable: CONSTRAINT_HIGHLIGHT_SIZE
   *
   * Size of the constraint highlight (in px). Default is 2.
   */
  static HIGHLIGHT_SIZE: 2;

  /**
   * Variable: HIGHLIGHT_OPACITY
   *
   * Opacity (in %) used for the highlights (including outline).
   * Default is 100.
   */
  static HIGHLIGHT_OPACITY: 100;

  /**
   * Variable: CURSOR_MOVABLE_VERTEX
   *
   * Defines the cursor for a movable vertex. Default is 'move'.
   */
  static CURSOR_MOVABLE_VERTEX: 'move';

  /**
   * Variable: CURSOR_MOVABLE_EDGE
   *
   * Defines the cursor for a movable edge. Default is 'move'.
   */
  static CURSOR_MOVABLE_EDGE: 'move';

  /**
   * Variable: CURSOR_LABEL_HANDLE
   *
   * Defines the cursor for a movable label. Default is 'default'.
   */
  static CURSOR_LABEL_HANDLE: 'default';

  /**
   * Variable: CURSOR_TERMINAL_HANDLE
   *
   * Defines the cursor for a terminal handle. Default is 'pointer'.
   */
  static CURSOR_TERMINAL_HANDLE: 'pointer';

  /**
   * Variable: CURSOR_BEND_HANDLE
   *
   * Defines the cursor for a movable bend. Default is 'crosshair'.
   */
  static CURSOR_BEND_HANDLE: 'crosshair';

  /**
   * Variable: CURSOR_VIRTUAL_BEND_HANDLE
   *
   * Defines the cursor for a movable bend. Default is 'crosshair'.
   */
  static CURSOR_VIRTUAL_BEND_HANDLE: 'crosshair';

  /**
   * Variable: CURSOR_CONNECT
   *
   * Defines the cursor for a connectable state. Default is 'pointer'.
   */
  static CURSOR_CONNECT: 'pointer';

  /**
   * Variable: HIGHLIGHT_COLOR
   *
   * Defines the color to be used for the cell highlighting.
   * Use 'none' for no color. Default is #00FF00.
   */
  static HIGHLIGHT_COLOR: '#00FF00';

  /**
   * Variable: TARGET_HIGHLIGHT_COLOR
   *
   * Defines the color to be used for highlighting a target cell for a new
   * or changed connection. Note that this may be either a source or
   * target terminal in the graph. Use 'none' for no color.
   * Default is #0000FF.
   */
  static CONNECT_TARGET_COLOR: '#0000FF';

  /**
   * Variable: INVALID_CONNECT_TARGET_COLOR
   *
   * Defines the color to be used for highlighting a invalid target cells
   * for a new or changed connections. Note that this may be either a source
   * or target terminal in the graph. Use 'none' for no color. Default is
   * #FF0000.
   */
  static INVALID_CONNECT_TARGET_COLOR: '#FF0000';

  /**
   * Variable: DROP_TARGET_COLOR
   *
   * Defines the color to be used for the highlighting target parent cells
   * (for drag and drop). Use 'none' for no color. Default is #0000FF.
   */
  static DROP_TARGET_COLOR: '#0000FF';

  /**
   * Variable: VALID_COLOR
   *
   * Defines the color to be used for the coloring valid connection
   * previews. Use 'none' for no color. Default is #FF0000.
   */
  static VALID_COLOR: '#00FF00';

  /**
   * Variable: INVALID_COLOR
   *
   * Defines the color to be used for the coloring invalid connection
   * previews. Use 'none' for no color. Default is #FF0000.
   */
  static INVALID_COLOR: '#FF0000';

  /**
   * Variable: EDGE_SELECTION_COLOR
   *
   * Defines the color to be used for the selection border of edges. Use
   * 'none' for no color. Default is #00FF00.
   */
  static EDGE_SELECTION_COLOR: '#00FF00';

  /**
   * Variable: VERTEX_SELECTION_COLOR
   *
   * Defines the color to be used for the selection border of vertices. Use
   * 'none' for no color. Default is #00FF00.
   */
  static VERTEX_SELECTION_COLOR: '#00FF00';

  /**
   * Variable: VERTEX_SELECTION_STROKEWIDTH
   *
   * Defines the strokewidth to be used for vertex selections.
   * Default is 1.
   */
  static VERTEX_SELECTION_STROKEWIDTH: 1;

  /**
   * Variable: EDGE_SELECTION_STROKEWIDTH
   *
   * Defines the strokewidth to be used for edge selections.
   * Default is 1.
   */
  static EDGE_SELECTION_STROKEWIDTH: 1;

  /**
   * Variable: SELECTION_DASHED
   *
   * Defines the dashed state to be used for the vertex selection
   * border. Default is true.
   */
  static VERTEX_SELECTION_DASHED: true;

  /**
   * Variable: SELECTION_DASHED
   *
   * Defines the dashed state to be used for the edge selection
   * border. Default is true.
   */
  static EDGE_SELECTION_DASHED: true;

  /**
   * Variable: GUIDE_COLOR
   *
   * Defines the color to be used for the guidelines in mxGraphHandler.
   * Default is #FF0000.
   */
  static GUIDE_COLOR: '#FF0000';

  /**
   * Variable: GUIDE_STROKEWIDTH
   *
   * Defines the strokewidth to be used for the guidelines in mxGraphHandler.
   * Default is 1.
   */
  static GUIDE_STROKEWIDTH: 1;

  /**
   * Variable: OUTLINE_COLOR
   *
   * Defines the color to be used for the outline rectangle
   * border.  Use 'none' for no color. Default is #0099FF.
   */
  static OUTLINE_COLOR: '#0099FF';

  /**
   * Variable: OUTLINE_STROKEWIDTH
   *
   * Defines the strokewidth to be used for the outline rectangle
   * stroke width. Default is 3.
   */
  static OUTLINE_STROKEWIDTH: number;

  /**
   * Variable: HANDLE_SIZE
   *
   * Defines the default size for handles. Default is 6.
   */
  static HANDLE_SIZE: 6;

  /**
   * Variable: LABEL_HANDLE_SIZE
   *
   * Defines the default size for label handles. Default is 4.
   */
  static LABEL_HANDLE_SIZE: 4;

  /**
   * Variable: HANDLE_FILLCOLOR
   *
   * Defines the color to be used for the handle fill color. Use 'none' for
   * no color. Default is #00FF00 (green).
   */
  static HANDLE_FILLCOLOR: '#00FF00';

  /**
   * Variable: HANDLE_STROKECOLOR
   *
   * Defines the color to be used for the handle stroke color. Use 'none' for
   * no color. Default is black.
   */
  static HANDLE_STROKECOLOR: 'black';

  /**
   * Variable: LABEL_HANDLE_FILLCOLOR
   *
   * Defines the color to be used for the label handle fill color. Use 'none'
   * for no color. Default is yellow.
   */
  static LABEL_HANDLE_FILLCOLOR: 'yellow';

  /**
   * Variable: CONNECT_HANDLE_FILLCOLOR
   *
   * Defines the color to be used for the connect handle fill color. Use
   * 'none' for no color. Default is #0000FF (blue).
   */
  static CONNECT_HANDLE_FILLCOLOR: '#0000FF';

  /**
   * Variable: LOCKED_HANDLE_FILLCOLOR
   *
   * Defines the color to be used for the locked handle fill color. Use
   * 'none' for no color. Default is #FF0000 (red).
   */
  static LOCKED_HANDLE_FILLCOLOR: '#FF0000';

  /**
   * Variable: OUTLINE_HANDLE_FILLCOLOR
   *
   * Defines the color to be used for the outline sizer fill color. Use
   * 'none' for no color. Default is #00FFFF.
   */
  static OUTLINE_HANDLE_FILLCOLOR: '#00FFFF';

  /**
   * Variable: OUTLINE_HANDLE_STROKECOLOR
   *
   * Defines the color to be used for the outline sizer stroke color. Use
   * 'none' for no color. Default is #0033FF.
   */
  static OUTLINE_HANDLE_STROKECOLOR: '#0033FF';

  /**
   * Variable: DEFAULT_FONTFAMILY
   *
   * Defines the default family for all fonts. Default is Arial,Helvetica.
   */
  static DEFAULT_FONTFAMILY: 'Arial,Helvetica';

  /**
   * Variable: DEFAULT_FONTSIZE
   *
   * Defines the default size (in px). Default is 11.
   */
  static DEFAULT_FONTSIZE: 11;

  /**
   * Variable: DEFAULT_TEXT_DIRECTION
   *
   * Defines the default value for the <STYLE_TEXT_DIRECTION> if no value is
   * defined for it in the style. Default value is an empty string which means
   * the default system setting is used and no direction is set.
   */
  static DEFAULT_TEXT_DIRECTION: '';

  /**
   * Variable: LINE_HEIGHT
   *
   * Defines the default line height for text labels. Default is 1.2.
   */
  static LINE_HEIGHT: 1.2;

  /**
   * Variable: WORD_WRAP
   *
   * Defines the CSS value for the word-wrap property. Default is "normal".
   * Change this to "break-word" to allow long words to be able to be broken
   * and wrap onto the next line.
   */
  static WORD_WRAP: 'normal';

  /**
   * Variable: ABSOLUTE_LINE_HEIGHT
   *
   * Specifies if absolute line heights should be used (px) in CSS. Default
   * is false. Set this to true for backwards compatibility.
   */
  static ABSOLUTE_LINE_HEIGHT: false;

  /**
   * Variable: DEFAULT_FONTSTYLE
   *
   * Defines the default style for all fonts. Default is 0. This can be set
   * to any combination of font styles as follows.
   *
   * (code)
   * mxConstants.DEFAULT_FONTSTYLE = mxConstants.FONT_BOLD | mxConstants.FONT_ITALIC;
   * (end)
   */
  static DEFAULT_FONTSTYLE: 0;

  /**
   * Variable: DEFAULT_STARTSIZE
   *
   * Defines the default start size for swimlanes. Default is 40.
   */
  static DEFAULT_STARTSIZE: 40;

  /**
   * Variable: DEFAULT_MARKERSIZE
   *
   * Defines the default size for all markers. Default is 6.
   */
  static DEFAULT_MARKERSIZE: 6;

  /**
   * Variable: DEFAULT_IMAGESIZE
   *
   * Defines the default width and height for images used in the
   * label shape. Default is 24.
   */
  static DEFAULT_IMAGESIZE: 24;

  /**
   * Variable: ENTITY_SEGMENT
   *
   * Defines the length of the horizontal segment of an Entity Relation.
   * This can be overridden using <mxConstants.STYLE_SEGMENT> style.
   * Default is 30.
   */
  static ENTITY_SEGMENT: number;

  /**
   * Variable: RECTANGLE_ROUNDING_FACTOR
   *
   * Defines the rounding factor for rounded rectangles in percent between
   * 0 and 1. Values should be smaller than 0.5. Default is 0.15.
   */
  static RECTANGLE_ROUNDING_FACTOR: 0.15;

  /**
   * Variable: LINE_ARCSIZE
   *
   * Defines the size of the arcs for rounded edges. Default is 20.
   */
  static LINE_ARCSIZE: 20;

  /**
   * Variable: ARROW_SPACING
   *
   * Defines the spacing between the arrow shape and its terminals. Default is 0.
   */
  static ARROW_SPACING: 0;

  /**
   * Variable: ARROW_WIDTH
   *
   * Defines the width of the arrow shape. Default is 30.
   */
  static ARROW_WIDTH: 30;

  /**
   * Variable: ARROW_SIZE
   *
   * Defines the size of the arrowhead in the arrow shape. Default is 30.
   */
  static ARROW_SIZE: 30;

  /**
   * Variable: PAGE_FORMAT_A4_PORTRAIT
   *
   * Defines the rectangle for the A4 portrait page format. The dimensions
   * of this page format are 826x1169 pixels.
   */
  static PAGE_FORMAT_A4_PORTRAIT: mxRectangle;

  /**
   * Variable: PAGE_FORMAT_A4_PORTRAIT
   *
   * Defines the rectangle for the A4 portrait page format. The dimensions
   * of this page format are 826x1169 pixels.
   */
  static PAGE_FORMAT_A4_LANDSCAPE: mxRectangle;

  /**
   * Variable: PAGE_FORMAT_LETTER_PORTRAIT
   *
   * Defines the rectangle for the Letter portrait page format. The
   * dimensions of this page format are 850x1100 pixels.
   */
  static PAGE_FORMAT_LETTER_PORTRAIT: mxRectangle;

  /**
   * Variable: PAGE_FORMAT_LETTER_PORTRAIT
   *
   * Defines the rectangle for the Letter portrait page format. The dimensions
   * of this page format are 850x1100 pixels.
   */
  static PAGE_FORMAT_LETTER_LANDSCAPE: mxRectangle;

  /**
   * Variable: NONE
   *
   * Defines the value for none. Default is "none".
   */
  static NONE: 'none';

  /**
   * Variable: STYLE_PERIMETER
   *
   * Defines the key for the perimeter style. This is a function that defines
   * the perimeter around a particular shape. Possible values are the
   * functions defined in <mxPerimeter>. Alternatively, the constants in this
   * class that start with "PERIMETER_" may be used to access
   * perimeter styles in <mxStyleRegistry>. Value is "perimeter".
   */
  static STYLE_PERIMETER: 'perimeter';

  /**
   * Variable: STYLE_SOURCE_PORT
   *
   * Defines the ID of the cell that should be used for computing the
   * perimeter point of the source for an edge. This allows for graphically
   * connecting to a cell while keeping the actual terminal of the edge.
   * Value is "sourcePort".
   */
  static STYLE_SOURCE_PORT: 'sourcePort';

  /**
   * Variable: STYLE_TARGET_PORT
   *
   * Defines the ID of the cell that should be used for computing the
   * perimeter point of the target for an edge. This allows for graphically
   * connecting to a cell while keeping the actual terminal of the edge.
   * Value is "targetPort".
   */
  static STYLE_TARGET_PORT: 'targetPort';

  /**
   * Variable: STYLE_PORT_CONSTRAINT
   *
   * Defines the direction(s) that edges are allowed to connect to cells in.
   * Possible values are "DIRECTION_NORTH, DIRECTION_SOUTH,
   * DIRECTION_EAST" and "DIRECTION_WEST". Value is
   * "portConstraint".
   */
  static STYLE_PORT_CONSTRAINT: 'portConstraint';

  /**
   * Variable: STYLE_PORT_CONSTRAINT_ROTATION
   *
   * Define whether port constraint directions are rotated with vertex
   * rotation. 0 (default) causes port constraints to remain absolute,
   * relative to the graph, 1 causes the constraints to rotate with
   * the vertex. Value is "portConstraintRotation".
   */
  static STYLE_PORT_CONSTRAINT_ROTATION: 'portConstraintRotation';

  /**
   * Variable: STYLE_SOURCE_PORT_CONSTRAINT
   *
   * Defines the direction(s) that edges are allowed to connect to sources in.
   * Possible values are "DIRECTION_NORTH, DIRECTION_SOUTH, DIRECTION_EAST"
   * and "DIRECTION_WEST". Value is "sourcePortConstraint".
   */
  static STYLE_SOURCE_PORT_CONSTRAINT: 'sourcePortConstraint';

  /**
   * Variable: STYLE_TARGET_PORT_CONSTRAINT
   *
   * Defines the direction(s) that edges are allowed to connect to targets in.
   * Possible values are "DIRECTION_NORTH, DIRECTION_SOUTH, DIRECTION_EAST"
   * and "DIRECTION_WEST". Value is "targetPortConstraint".
   */
  static STYLE_TARGET_PORT_CONSTRAINT: 'targetPortConstraint';

  /**
   * Variable: STYLE_OPACITY
   *
   * Defines the key for the opacity style. The type of the value is
   * numeric and the possible range is 0-100. Value is "opacity".
   */
  static STYLE_OPACITY: 'opacity';

  /**
   * Variable: STYLE_FILL_OPACITY
   *
   * Defines the key for the fill opacity style. The type of the value is
   * numeric and the possible range is 0-100. Value is "fillOpacity".
   */
  static STYLE_FILL_OPACITY: 'fillOpacity';

  /**
   * Variable: STYLE_STROKE_OPACITY
   *
   * Defines the key for the stroke opacity style. The type of the value is
   * numeric and the possible range is 0-100. Value is "strokeOpacity".
   */
  static STYLE_STROKE_OPACITY: 'strokeOpacity';

  /**
   * Variable: STYLE_TEXT_OPACITY
   *
   * Defines the key for the text opacity style. The type of the value is
   * numeric and the possible range is 0-100. Value is "textOpacity".
   */
  static STYLE_TEXT_OPACITY: 'textOpacity';

  /**
   * Variable: STYLE_TEXT_DIRECTION
   *
   * Defines the key for the text direction style. Possible values are
   * "TEXT_DIRECTION_DEFAULT, TEXT_DIRECTION_AUTO, TEXT_DIRECTION_LTR"
   * and "TEXT_DIRECTION_RTL". Value is "textDirection".
   * The default value for the style is defined in <DEFAULT_TEXT_DIRECTION>.
   * It is used is no value is defined for this key in a given style. This is
   * an experimental style that is currently ignored in the backends.
   */
  static STYLE_TEXT_DIRECTION: 'textDirection';

  /**
   * Variable: STYLE_OVERFLOW
   *
   * Defines the key for the overflow style. Possible values are 'visible';
   * 'hidden', 'fill' and 'width'. The default value is 'visible'. This value
   * specifies how overlapping vertex labels are handled. A value of
   * 'visible' will show the complete label. A value of 'hidden' will clip
   * the label so that it does not overlap the vertex bounds. A value of
   * 'fill' will use the vertex bounds and a value of 'width' will use the
   * the vertex width for the label. See <mxGraph.isLabelClipped>. Note that
   * the vertical alignment is ignored for overflow fill and for horizontal
   * alignment, left should be used to avoid pixel offsets in Internet Explorer
   * 11 and earlier or if foreignObjects are disabled. Value is "overflow".
   */
  static STYLE_OVERFLOW: 'overflow';

  /**
   * Variable: STYLE_ORTHOGONAL
   *
   * Defines if the connection points on either end of the edge should be
   * computed so that the edge is vertical or horizontal if possible and
   * if the point is not at a fixed location. Default is false. This is
   * used in <mxGraph.isOrthogonal>, which also returns true if the edgeStyle
   * of the edge is an elbow or entity. Value is "orthogonal".
   */
  static STYLE_ORTHOGONAL: 'orthogonal';

  /**
   * Variable: STYLE_EXIT_X
   *
   * Defines the key for the horizontal relative coordinate connection point
   * of an edge with its source terminal. Value is "exitX".
   */
  static STYLE_EXIT_X: 'exitX';

  /**
   * Variable: STYLE_EXIT_Y
   *
   * Defines the key for the vertical relative coordinate connection point
   * of an edge with its source terminal. Value is "exitY".
   */
  static STYLE_EXIT_Y: 'exitY';

  /**
   * Variable: STYLE_EXIT_PERIMETER
   *
   * Defines if the perimeter should be used to find the exact entry point
   * along the perimeter of the source. Possible values are 0 (false) and
   * 1 (true). Default is 1 (true). Value is "exitPerimeter".
   */
  static STYLE_EXIT_PERIMETER: 'exitPerimeter';

  /**
   * Variable: STYLE_ENTRY_X
   *
   * Defines the key for the horizontal relative coordinate connection point
   * of an edge with its target terminal. Value is "entryX".
   */
  static STYLE_ENTRY_X: 'entryX';

  /**
   * Variable: STYLE_ENTRY_Y
   *
   * Defines the key for the vertical relative coordinate connection point
   * of an edge with its target terminal. Value is "entryY".
   */
  static STYLE_ENTRY_Y: 'entryY';

  /**
   * Variable: STYLE_ENTRY_PERIMETER
   *
   * Defines if the perimeter should be used to find the exact entry point
   * along the perimeter of the target. Possible values are 0 (false) and
   * 1 (true). Default is 1 (true). Value is "entryPerimeter".
   */
  static STYLE_ENTRY_PERIMETER: 'entryPerimeter';

  /**
   * Variable: STYLE_WHITE_SPACE
   *
   * Defines the key for the white-space style. Possible values are 'nowrap'
   * and 'wrap'. The default value is 'nowrap'. This value specifies how
   * white-space inside a HTML vertex label should be handled. A value of
   * 'nowrap' means the text will never wrap to the next line until a
   * linefeed is encountered. A value of 'wrap' means text will wrap when
   * necessary. This style is only used for HTML labels.
   * See <mxGraph.isWrapping>. Value is "whiteSpace".
   */
  static STYLE_WHITE_SPACE: 'whiteSpace';

  /**
   * Variable: STYLE_ROTATION
   *
   * Defines the key for the rotation style. The type of the value is
   * numeric and the possible range is 0-360. Value is "rotation".
   */
  static STYLE_ROTATION: 'rotation';

  /**
   * Variable: STYLE_FILLCOLOR
   *
   * Defines the key for the fill color. Possible values are all HTML color
   * names or HEX codes, as well as special keywords such as 'swimlane;
   * 'inherit' or 'indicated' to use the color code of a related cell or the
   * indicator shape. Value is "fillColor".
   */
  static STYLE_FILLCOLOR: 'fillColor';

  /**
   * Variable: STYLE_POINTER_EVENTS
   *
   * Specifies if pointer events should be fired on transparent backgrounds.
   * This style is currently only supported in <mxRectangleShape>. Default
   * is true. Value is "pointerEvents". This is typically set to
   * false in groups where the transparent part should allow any underlying
   * cells to be clickable.
   */
  static STYLE_POINTER_EVENTS: 'pointerEvents';

  /**
   * Variable: STYLE_SWIMLANE_FILLCOLOR
   *
   * Defines the key for the fill color of the swimlane background. Possible
   * values are all HTML color names or HEX codes. Default is no background.
   * Value is "swimlaneFillColor".
   */
  static STYLE_SWIMLANE_FILLCOLOR: 'swimlaneFillColor';

  /**
   * Variable: STYLE_MARGIN
   *
   * Defines the key for the margin between the ellipses in the double ellipse shape.
   * Possible values are all positive numbers. Value is "margin".
   */
  static STYLE_MARGIN: 'margin';

  /**
   * Variable: STYLE_GRADIENTCOLOR
   *
   * Defines the key for the gradient color. Possible values are all HTML color
   * names or HEX codes, as well as special keywords such as 'swimlane;
   * 'inherit' or 'indicated' to use the color code of a related cell or the
   * indicator shape. This is ignored if no fill color is defined. Value is
   * "gradientColor".
   */
  static STYLE_GRADIENTCOLOR: 'gradientColor';

  /**
   * Variable: STYLE_GRADIENT_DIRECTION
   *
   * Defines the key for the gradient direction. Possible values are
   * <DIRECTION_EAST>, <DIRECTION_WEST>, <DIRECTION_NORTH> and
   * <DIRECTION_SOUTH>. Default is <DIRECTION_SOUTH>. Generally, and by
   * default in mxGraph, gradient painting is done from the value of
   * <STYLE_FILLCOLOR> to the value of <STYLE_GRADIENTCOLOR>. Taking the
   * example of <DIRECTION_NORTH>, this means <STYLE_FILLCOLOR> color at the
   * bottom of paint pattern and <STYLE_GRADIENTCOLOR> at top, with a
   * gradient in-between. Value is "gradientDirection".
   */
  static STYLE_GRADIENT_DIRECTION: 'gradientDirection';

  /**
   * Variable: STYLE_STROKECOLOR
   *
   * Defines the key for the strokeColor style. Possible values are all HTML
   * color names or HEX codes, as well as special keywords such as 'swimlane;
   * 'inherit', 'indicated' to use the color code of a related cell or the
   * indicator shape or 'none' for no color. Value is "strokeColor".
   */
  static STYLE_STROKECOLOR: 'strokeColor';

  /**
   * Variable: STYLE_SEPARATORCOLOR
   *
   * Defines the key for the separatorColor style. Possible values are all
   * HTML color names or HEX codes. This style is only used for
   * <SHAPE_SWIMLANE> shapes. Value is "separatorColor".
   */
  static STYLE_SEPARATORCOLOR: 'separatorColor';

  /**
   * Variable: STYLE_STROKEWIDTH
   *
   * Defines the key for the strokeWidth style. The type of the value is
   * numeric and the possible range is any non-negative value larger or equal
   * to 1. The value defines the stroke width in pixels. Note: To hide a
   * stroke use strokeColor none. Value is "strokeWidth".
   */
  static STYLE_STROKEWIDTH: 'strokeWidth';

  /**
   * Variable: STYLE_ALIGN
   *
   * Defines the key for the align style. Possible values are <ALIGN_LEFT>;
   * <ALIGN_CENTER> and <ALIGN_RIGHT>. This value defines how the lines of
   * the label are horizontally aligned. <ALIGN_LEFT> mean label text lines
   * are aligned to left of the label bounds, <ALIGN_RIGHT> to the right of
   * the label bounds and <ALIGN_CENTER> means the center of the text lines
   * are aligned in the center of the label bounds. Note this value doesn't
   * affect the positioning of the overall label bounds relative to the
   * vertex, to move the label bounds horizontally, use
   * <STYLE_LABEL_POSITION>. Value is "align".
   */
  static STYLE_ALIGN: 'align';

  /**
   * Variable: STYLE_VERTICAL_ALIGN
   *
   * Defines the key for the verticalAlign style. Possible values are
   * <ALIGN_TOP>, <ALIGN_MIDDLE> and <ALIGN_BOTTOM>. This value defines how
   * the lines of the label are vertically aligned. <ALIGN_TOP> means the
   * topmost label text line is aligned against the top of the label bounds;
   * <ALIGN_BOTTOM> means the bottom-most label text line is aligned against
   * the bottom of the label bounds and <ALIGN_MIDDLE> means there is equal
   * spacing between the topmost text label line and the top of the label
   * bounds and the bottom-most text label line and the bottom of the label
   * bounds. Note this value doesn't affect the positioning of the overall
   * label bounds relative to the vertex, to move the label bounds
   * vertically, use <STYLE_VERTICAL_LABEL_POSITION>. Value is "verticalAlign".
   */
  static STYLE_VERTICAL_ALIGN: 'verticalAlign';

  /**
   * Variable: STYLE_LABEL_WIDTH
   *
   * Defines the key for the width of the label if the label position is not
   * center. Value is "labelWidth".
   */
  static STYLE_LABEL_WIDTH: 'labelWidth';

  /**
   * Variable: STYLE_LABEL_POSITION
   *
   * Defines the key for the horizontal label position of vertices. Possible
   * values are <ALIGN_LEFT>, <ALIGN_CENTER> and <ALIGN_RIGHT>. Default is
   * <ALIGN_CENTER>. The label align defines the position of the label
   * relative to the cell. <ALIGN_LEFT> means the entire label bounds is
   * placed completely just to the left of the vertex, <ALIGN_RIGHT> means
   * adjust to the right and <ALIGN_CENTER> means the label bounds are
   * vertically aligned with the bounds of the vertex. Note this value
   * doesn't affect the positioning of label within the label bounds, to move
   * the label horizontally within the label bounds, use <STYLE_ALIGN>.
   * Value is "labelPosition".
   */
  static STYLE_LABEL_POSITION: 'labelPosition';

  /**
   * Variable: STYLE_VERTICAL_LABEL_POSITION
   *
   * Defines the key for the vertical label position of vertices. Possible
   * values are <ALIGN_TOP>, <ALIGN_BOTTOM> and <ALIGN_MIDDLE>. Default is
   * <ALIGN_MIDDLE>. The label align defines the position of the label
   * relative to the cell. <ALIGN_TOP> means the entire label bounds is
   * placed completely just on the top of the vertex, <ALIGN_BOTTOM> means
   * adjust on the bottom and <ALIGN_MIDDLE> means the label bounds are
   * horizontally aligned with the bounds of the vertex. Note this value
   * doesn't affect the positioning of label within the label bounds, to move
   * the label vertically within the label bounds, use
   * <STYLE_VERTICAL_ALIGN>. Value is "verticalLabelPosition".
   */
  static STYLE_VERTICAL_LABEL_POSITION: 'verticalLabelPosition';

  /**
   * Variable: STYLE_IMAGE_ASPECT
   *
   * Defines the key for the image aspect style. Possible values are 0 (do
   * not preserve aspect) or 1 (keep aspect). This is only used in
   * <mxImageShape>. Default is 1. Value is "imageAspect".
   */
  static STYLE_IMAGE_ASPECT: 'imageAspect';

  /**
   * Variable: STYLE_IMAGE_ALIGN
   *
   * Defines the key for the align style. Possible values are <ALIGN_LEFT>;
   * <ALIGN_CENTER> and <ALIGN_RIGHT>. The value defines how any image in the
   * vertex label is aligned horizontally within the label bounds of a
   * <SHAPE_LABEL> shape. Value is "imageAlign".
   */
  static STYLE_IMAGE_ALIGN: 'imageAlign';

  /**
   * Variable: STYLE_IMAGE_VERTICAL_ALIGN
   *
   * Defines the key for the verticalAlign style. Possible values are
   * <ALIGN_TOP>, <ALIGN_MIDDLE> and <ALIGN_BOTTOM>. The value defines how
   * any image in the vertex label is aligned vertically within the label
   * bounds of a <SHAPE_LABEL> shape. Value is "imageVerticalAlign".
   */
  static STYLE_IMAGE_VERTICAL_ALIGN: 'imageVerticalAlign';

  /**
   * Variable: STYLE_GLASS
   *
   * Defines the key for the glass style. Possible values are 0 (disabled) and
   * 1(enabled). The default value is 0. This is used in <mxLabel>. Value is
   * "glass".
   */
  static STYLE_GLASS: 'glass';

  /**
   * Variable: STYLE_IMAGE
   *
   * Defines the key for the image style. Possible values are any image URL;
   * the type of the value is String. This is the path to the image that is
   * to be displayed within the label of a vertex. Data URLs should use the
   * following format: data:image/png,xyz where xyz is the base64 encoded
   * data (without the "base64"-prefix). Note that Data URLs are only
   * supported in modern browsers. Value is "image".
   */
  static STYLE_IMAGE: 'image';

  /**
   * Variable: STYLE_IMAGE_WIDTH
   *
   * Defines the key for the imageWidth style. The type of this value is
   * int, the value is the image width in pixels and must be greater than 0.
   * Value is "imageWidth".
   */
  static STYLE_IMAGE_WIDTH: 'imageWidth';

  /**
   * Variable: STYLE_IMAGE_HEIGHT
   *
   * Defines the key for the imageHeight style. The type of this value is
   * int, the value is the image height in pixels and must be greater than 0.
   * Value is "imageHeight".
   */
  static STYLE_IMAGE_HEIGHT: 'imageHeight';

  /**
   * Variable: STYLE_IMAGE_BACKGROUND
   *
   * Defines the key for the image background color. This style is only used
   * in <mxImageShape>. Possible values are all HTML color names or HEX
   * codes. Value is "imageBackground".
   */
  static STYLE_IMAGE_BACKGROUND: 'imageBackground';

  /**
   * Variable: STYLE_IMAGE_BORDER
   *
   * Defines the key for the image border color. This style is only used in
   * <mxImageShape>. Possible values are all HTML color names or HEX codes.
   * Value is "imageBorder".
   */
  static STYLE_IMAGE_BORDER: 'imageBorder';

  /**
   * Variable: STYLE_FLIPH
   *
   * Defines the key for the horizontal image flip. This style is only used
   * in <mxImageShape>. Possible values are 0 and 1. Default is 0. Value is
   * "flipH".
   */
  static STYLE_FLIPH: 'flipH';

  /**
   * Variable: STYLE_FLIPV
   *
   * Defines the key for the vertical flip. Possible values are 0 and 1.
   * Default is 0. Value is "flipV".
   */
  static STYLE_FLIPV: 'flipV';

  /**
   * Variable: STYLE_NOLABEL
   *
   * Defines the key for the noLabel style. If this is true then no label is
   * visible for a given cell. Possible values are true or false (1 or 0).
   * Default is false. Value is "noLabel".
   */
  static STYLE_NOLABEL: 'noLabel';

  /**
   * Variable: STYLE_NOEDGESTYLE
   *
   * Defines the key for the noEdgeStyle style. If this is true then no edge
   * style is applied for a given edge. Possible values are true or false
   * (1 or 0). Default is false. Value is "noEdgeStyle".
   */
  static STYLE_NOEDGESTYLE: 'noEdgeStyle';

  /**
   * Variable: STYLE_LABEL_BACKGROUNDCOLOR
   *
   * Defines the key for the label background color. Possible values are all
   * HTML color names or HEX codes. Value is "labelBackgroundColor".
   */
  static STYLE_LABEL_BACKGROUNDCOLOR: 'labelBackgroundColor';

  /**
   * Variable: STYLE_LABEL_BORDERCOLOR
   *
   * Defines the key for the label border color. Possible values are all
   * HTML color names or HEX codes. Value is "labelBorderColor".
   */
  static STYLE_LABEL_BORDERCOLOR: 'labelBorderColor';

  /**
   * Variable: STYLE_LABEL_PADDING
   *
   * Defines the key for the label padding, ie. the space between the label
   * border and the label. Value is "labelPadding".
   */
  static STYLE_LABEL_PADDING: 'labelPadding';

  /**
   * Variable: STYLE_INDICATOR_SHAPE
   *
   * Defines the key for the indicator shape used within an <mxLabel>.
   * Possible values are all SHAPE_* constants or the names of any new
   * shapes. The indicatorShape has precedence over the indicatorImage.
   * Value is "indicatorShape".
   */
  static STYLE_INDICATOR_SHAPE: 'indicatorShape';

  /**
   * Variable: STYLE_INDICATOR_IMAGE
   *
   * Defines the key for the indicator image used within an <mxLabel>.
   * Possible values are all image URLs. The indicatorShape has
   * precedence over the indicatorImage. Value is "indicatorImage".
   */
  static STYLE_INDICATOR_IMAGE: 'indicatorImage';

  /**
   * Variable: STYLE_INDICATOR_COLOR
   *
   * Defines the key for the indicatorColor style. Possible values are all
   * HTML color names or HEX codes, as well as the special 'swimlane' keyword
   * to refer to the color of the parent swimlane if one exists. Value is
   * "indicatorColor".
   */
  static STYLE_INDICATOR_COLOR: 'indicatorColor';

  /**
   * Variable: STYLE_INDICATOR_STROKECOLOR
   *
   * Defines the key for the indicator stroke color in <mxLabel>.
   * Possible values are all color codes. Value is "indicatorStrokeColor".
   */
  static STYLE_INDICATOR_STROKECOLOR: 'indicatorStrokeColor';

  /**
   * Variable: STYLE_INDICATOR_GRADIENTCOLOR
   *
   * Defines the key for the indicatorGradientColor style. Possible values
   * are all HTML color names or HEX codes. This style is only supported in
   * <SHAPE_LABEL> shapes. Value is "indicatorGradientColor".
   */
  static STYLE_INDICATOR_GRADIENTCOLOR: 'indicatorGradientColor';

  /**
   * Variable: STYLE_INDICATOR_SPACING
   *
   * The defines the key for the spacing between the label and the
   * indicator in <mxLabel>. Possible values are in pixels. Value is
   * "indicatorSpacing".
   */
  static STYLE_INDICATOR_SPACING: 'indicatorSpacing';

  /**
   * Variable: STYLE_INDICATOR_WIDTH
   *
   * Defines the key for the indicator width. Possible values start at 0 (in
   * pixels). Value is "indicatorWidth".
   */
  static STYLE_INDICATOR_WIDTH: 'indicatorWidth';

  /**
   * Variable: STYLE_INDICATOR_HEIGHT
   *
   * Defines the key for the indicator height. Possible values start at 0 (in
   * pixels). Value is "indicatorHeight".
   */
  static STYLE_INDICATOR_HEIGHT: 'indicatorHeight';

  /**
   * Variable: STYLE_INDICATOR_DIRECTION
   *
   * Defines the key for the indicatorDirection style. The direction style is
   * used to specify the direction of certain shapes (eg. <mxTriangle>).
   * Possible values are <DIRECTION_EAST> (default), <DIRECTION_WEST>;
   * <DIRECTION_NORTH> and <DIRECTION_SOUTH>. Value is "indicatorDirection".
   */
  static STYLE_INDICATOR_DIRECTION: 'indicatorDirection';

  /**
   * Variable: STYLE_SHADOW
   *
   * Defines the key for the shadow style. The type of the value is Boolean.
   * Value is "shadow".
   */
  static STYLE_SHADOW: 'shadow';

  /**
   * Variable: STYLE_SEGMENT
   *
   * Defines the key for the segment style. The type of this value is float
   * and the value represents the size of the horizontal segment of the
   * entity relation style. Default is ENTITY_SEGMENT. Value is "segment".
   */
  static STYLE_SEGMENT: 'segment';

  /**
   * Variable: STYLE_ENDARROW
   *
   * Defines the key for the end arrow marker. Possible values are all
   * constants with an ARROW-prefix. This is only used in <mxConnector>.
   * Value is "endArrow".
   *
   * Example:
   * (code)
   * style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_CLASSIC;
   * (end)
   */
  static STYLE_ENDARROW: 'endArrow';

  /**
   * Variable: STYLE_STARTARROW
   *
   * Defines the key for the start arrow marker. Possible values are all
   * constants with an ARROW-prefix. This is only used in <mxConnector>.
   * See <STYLE_ENDARROW>. Value is "startArrow".
   */
  static STYLE_STARTARROW: 'startArrow';

  /**
   * Variable: STYLE_ENDSIZE
   *
   * Defines the key for the endSize style. The type of this value is numeric
   * and the value represents the size of the end marker in pixels. Value is
   * "endSize".
   */
  static STYLE_ENDSIZE: 'endSize';

  /**
   * Variable: STYLE_STARTSIZE
   *
   * Defines the key for the startSize style. The type of this value is
   * numeric and the value represents the size of the start marker or the
   * size of the swimlane title region depending on the shape it is used for.
   * Value is "startSize".
   */
  static STYLE_STARTSIZE: 'startSize';

  /**
   * Variable: STYLE_SWIMLANE_LINE
   *
   * Defines the key for the swimlaneLine style. This style specifies whether
   * the line between the title regio of a swimlane should be visible. Use 0
   * for hidden or 1 (default) for visible. Value is "swimlaneLine".
   */
  static STYLE_SWIMLANE_LINE: 'swimlaneLine';

  /**
   * Variable: STYLE_ENDFILL
   *
   * Defines the key for the endFill style. Use 0 for no fill or 1 (default)
   * for fill. (This style is only exported via <mxImageExport>.) Value is
   * "endFill".
   */
  static STYLE_ENDFILL: 'endFill';

  /**
   * Variable: STYLE_STARTFILL
   *
   * Defines the key for the startFill style. Use 0 for no fill or 1 (default)
   * for fill. (This style is only exported via <mxImageExport>.) Value is
   * "startFill".
   */
  static STYLE_STARTFILL: 'startFill';

  /**
   * Variable: STYLE_DASHED
   *
   * Defines the key for the dashed style. Use 0 (default) for non-dashed or 1
   * for dashed. Value is "dashed".
   */
  static STYLE_DASHED: 'dashed';

  /**
   * Defines the key for the dashed pattern style in SVG and image exports.
   * The type of this value is a space separated list of numbers that specify
   * a custom-defined dash pattern. Dash styles are defined in terms of the
   * length of the dash (the drawn part of the stroke) and the length of the
   * space between the dashes. The lengths are relative to the line width: a
   * length of "1" is equal to the line width. VML ignores this style and
   * uses dashStyle instead as defined in the VML specification. This style
   * is only used in the <mxConnector> shape. Value is "dashPattern".
   */
  static STYLE_DASH_PATTERN: 'dashPattern';

  /**
   * Variable: STYLE_FIX_DASH
   *
   * Defines the key for the fixDash style. Use 0 (default) for dash patterns
   * that depend on the linewidth and 1 for dash patterns that ignore the
   * line width. Value is "fixDash".
   */
  static STYLE_FIX_DASH: 'fixDash';

  /**
   * Variable: STYLE_ROUNDED
   *
   * Defines the key for the rounded style. The type of this value is
   * Boolean. For edges this determines whether or not joins between edges
   * segments are smoothed to a rounded finish. For vertices that have the
   * rectangle shape, this determines whether or not the rectangle is
   * rounded. Use 0 (default) for non-rounded or 1 for rounded. Value is
   * "rounded".
   */
  static STYLE_ROUNDED: 'rounded';

  /**
   * Variable: STYLE_CURVED
   *
   * Defines the key for the curved style. The type of this value is
   * Boolean. It is only applicable for connector shapes. Use 0 (default)
   * for non-curved or 1 for curved. Value is "curved".
   */
  static STYLE_CURVED: 'curved';

  /**
   * Variable: STYLE_ARCSIZE
   *
   * Defines the rounding factor for a rounded rectangle in percent (without
   * the percent sign). Possible values are between 0 and 100. If this value
   * is not specified then RECTANGLE_ROUNDING_FACTOR * 100 is used. For
   * edges, this defines the absolute size of rounded corners in pixels. If
   * this values is not specified then LINE_ARCSIZE is used.
   * (This style is only exported via <mxImageExport>.) Value is "arcSize".
   */
  static STYLE_ARCSIZE: 'arcSize';

  /**
   * Variable: STYLE_ABSOLUTE_ARCSIZE
   *
   * Defines the key for the absolute arc size style. This specifies if
   * arcSize for rectangles is abolute or relative. Possible values are 1
   * and 0 (default). Value is "absoluteArcSize".
   */
  static STYLE_ABSOLUTE_ARCSIZE: 'absoluteArcSize';

  /**
   * Variable: STYLE_SOURCE_PERIMETER_SPACING
   *
   * Defines the key for the source perimeter spacing. The type of this value
   * is numeric. This is the distance between the source connection point of
   * an edge and the perimeter of the source vertex in pixels. This style
   * only applies to edges. Value is "sourcePerimeterSpacing".
   */
  static STYLE_SOURCE_PERIMETER_SPACING: 'sourcePerimeterSpacing';

  /**
   * Variable: STYLE_TARGET_PERIMETER_SPACING
   *
   * Defines the key for the target perimeter spacing. The type of this value
   * is numeric. This is the distance between the target connection point of
   * an edge and the perimeter of the target vertex in pixels. This style
   * only applies to edges. Value is "targetPerimeterSpacing".
   */
  static STYLE_TARGET_PERIMETER_SPACING: 'targetPerimeterSpacing';

  /**
   * Variable: STYLE_PERIMETER_SPACING
   *
   * Defines the key for the perimeter spacing. This is the distance between
   * the connection point and the perimeter in pixels. When used in a vertex
   * style, this applies to all incoming edges to floating ports (edges that
   * terminate on the perimeter of the vertex). When used in an edge style;
   * this spacing applies to the source and target separately, if they
   * terminate in floating ports (on the perimeter of the vertex). Value is
   * "perimeterSpacing".
   */
  static STYLE_PERIMETER_SPACING: 'perimeterSpacing';

  /**
   * Variable: STYLE_SPACING
   *
   * Defines the key for the spacing. The value represents the spacing, in
   * pixels, added to each side of a label in a vertex (style applies to
   * vertices only). Value is "spacing".
   */
  static STYLE_SPACING: 'spacing';

  /**
   * Variable: STYLE_SPACING_TOP
   *
   * Defines the key for the spacingTop style. The value represents the
   * spacing, in pixels, added to the top side of a label in a vertex (style
   * applies to vertices only). Value is "spacingTop".
   */
  static STYLE_SPACING_TOP: 'spacingTop';

  /**
   * Variable: STYLE_SPACING_LEFT
   *
   * Defines the key for the spacingLeft style. The value represents the
   * spacing, in pixels, added to the left side of a label in a vertex (style
   * applies to vertices only). Value is "spacingLeft".
   */
  static STYLE_SPACING_LEFT: 'spacingLeft';

  /**
   * Variable: STYLE_SPACING_BOTTOM
   *
   * Defines the key for the spacingBottom style The value represents the
   * spacing, in pixels, added to the bottom side of a label in a vertex
   * (style applies to vertices only). Value is "spacingBottom".
   */
  static STYLE_SPACING_BOTTOM: 'spacingBottom';

  /**
   * Variable: STYLE_SPACING_RIGHT
   *
   * Defines the key for the spacingRight style The value represents the
   * spacing, in pixels, added to the right side of a label in a vertex (style
   * applies to vertices only). Value is "spacingRight".
   */
  static STYLE_SPACING_RIGHT: 'spacingRight';

  /**
   * Variable: STYLE_HORIZONTAL
   *
   * Defines the key for the horizontal style. Possible values are
   * true or false. This value only applies to vertices. If the <STYLE_SHAPE>
   * is "SHAPE_SWIMLANE" a value of false indicates that the
   * swimlane should be drawn vertically, true indicates to draw it
   * horizontally. If the shape style does not indicate that this vertex is a
   * swimlane, this value affects only whether the label is drawn
   * horizontally or vertically. Value is "horizontal".
   */
  static STYLE_HORIZONTAL: 'horizontal';

  /**
   * Variable: STYLE_DIRECTION
   *
   * Defines the key for the direction style. The direction style is used
   * to specify the direction of certain shapes (eg. <mxTriangle>).
   * Possible values are <DIRECTION_EAST> (default), <DIRECTION_WEST>;
   * <DIRECTION_NORTH> and <DIRECTION_SOUTH>. Value is "direction".
   */
  static STYLE_DIRECTION: 'direction';

  /**
   * Variable: STYLE_ANCHOR_POINT_DIRECTION
   *
   * Defines the key for the anchorPointDirection style. The defines if the
   * direction style should be taken into account when computing the fixed
   * point location for connected edges. Default is 1 (yes). Set this to 0
   * to ignore the direction style for fixed connection points. Value is
   * "anchorPointDirection".
   */
  static STYLE_ANCHOR_POINT_DIRECTION: 'anchorPointDirection';

  /**
   * Variable: STYLE_ELBOW
   *
   * Defines the key for the elbow style. Possible values are
   * <ELBOW_HORIZONTAL> and <ELBOW_VERTICAL>. Default is <ELBOW_HORIZONTAL>.
   * This defines how the three segment orthogonal edge style leaves its
   * terminal vertices. The vertical style leaves the terminal vertices at
   * the top and bottom sides. Value is "elbow".
   */
  static STYLE_ELBOW: 'elbow';

  /**
   * Variable: STYLE_FONTCOLOR
   *
   * Defines the key for the fontColor style. Possible values are all HTML
   * color names or HEX codes. Value is "fontColor".
   */
  static STYLE_FONTCOLOR: 'fontColor';

  /**
   * Variable: STYLE_FONTFAMILY
   *
   * Defines the key for the fontFamily style. Possible values are names such
   * as Arial; Dialog; Verdana; Times New Roman. The value is of type String.
   * Value is fontFamily.
   */
  static STYLE_FONTFAMILY: 'fontFamily';

  /**
   * Variable: STYLE_FONTSIZE
   *
   * Defines the key for the fontSize style (in px). The type of the value
   * is int. Value is "fontSize".
   */
  static STYLE_FONTSIZE: 'fontSize';

  /**
   * Variable: STYLE_FONTSTYLE
   *
   * Defines the key for the fontStyle style. Values may be any logical AND
   * (sum) of <FONT_BOLD>, <FONT_ITALIC> and <FONT_UNDERLINE>.
   * The type of the value is int. Value is "fontStyle".
   */
  static STYLE_FONTSTYLE: 'fontStyle';

  /**
   * Variable: STYLE_ASPECT
   *
   * Defines the key for the aspect style. Possible values are empty or fixed.
   * If fixed is used then the aspect ratio of the cell will be maintained
   * when resizing. Default is empty. Value is "aspect".
   */
  static STYLE_ASPECT: 'aspect';

  /**
   * Variable: STYLE_AUTOSIZE
   *
   * Defines the key for the autosize style. This specifies if a cell should be
   * resized automatically if the value has changed. Possible values are 0 or 1.
   * Default is 0. See <mxGraph.isAutoSizeCell>. This is normally combined with
   * <STYLE_RESIZABLE> to disable manual sizing. Value is "autosize".
   */
  static STYLE_AUTOSIZE: 'autosize';

  /**
   * Variable: STYLE_FOLDABLE
   *
   * Defines the key for the foldable style. This specifies if a cell is foldable
   * using a folding icon. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellFoldable>. Value is "foldable".
   */
  static STYLE_FOLDABLE: 'foldable';

  /**
   * Variable: STYLE_EDITABLE
   *
   * Defines the key for the editable style. This specifies if the value of
   * a cell can be edited using the in-place editor. Possible values are 0 or
   * 1. Default is 1. See <mxGraph.isCellEditable>. Value is "editable".
   */
  static STYLE_EDITABLE: 'editable';

  /**
   * Variable: STYLE_BACKGROUND_OUTLINE
   *
   * Defines the key for the backgroundOutline style. This specifies if a
   * only the background of a cell should be painted when it is highlighted.
   * Possible values are 0 or 1. Default is 0. Value is "backgroundOutline".
   */
  static STYLE_BACKGROUND_OUTLINE: 'backgroundOutline';

  /**
   * Variable: STYLE_BENDABLE
   *
   * Defines the key for the bendable style. This specifies if the control
   * points of an edge can be moved. Possible values are 0 or 1. Default is
   * 1. See <mxGraph.isCellBendable>. Value is "bendable".
   */
  static STYLE_BENDABLE: 'bendable';

  /**
   * Variable: STYLE_MOVABLE
   *
   * Defines the key for the movable style. This specifies if a cell can
   * be moved. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellMovable>. Value is "movable".
   */
  static STYLE_MOVABLE: 'movable';

  /**
   * Variable: STYLE_RESIZABLE
   *
   * Defines the key for the resizable style. This specifies if a cell can
   * be resized. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellResizable>. Value is "resizable".
   */
  static STYLE_RESIZABLE: 'resizable';

  /**
   * Variable: STYLE_RESIZE_WIDTH
   *
   * Defines the key for the resizeWidth style. This specifies if a cell's
   * width is resized if the parent is resized. If this is 1 then the width
   * will be resized even if the cell's geometry is relative. If this is 0
   * then the cell's width will not be resized. Default is not defined. Value
   * is "resizeWidth".
   */
  static STYLE_RESIZE_WIDTH: 'resizeWidth';

  /**
   * Variable: STYLE_RESIZE_WIDTH
   *
   * Defines the key for the resizeHeight style. This specifies if a cell's
   * height if resize if the parent is resized. If this is 1 then the height
   * will be resized even if the cell's geometry is relative. If this is 0
   * then the cell's height will not be resized. Default is not defined. Value
   * is "resizeHeight".
   */
  static STYLE_RESIZE_HEIGHT: 'resizeHeight';

  /**
   * Variable: STYLE_ROTATABLE
   *
   * Defines the key for the rotatable style. This specifies if a cell can
   * be rotated. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellRotatable>. Value is "rotatable".
   */
  static STYLE_ROTATABLE: 'rotatable';

  /**
   * Variable: STYLE_CLONEABLE
   *
   * Defines the key for the cloneable style. This specifies if a cell can
   * be cloned. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellCloneable>. Value is "cloneable".
   */
  static STYLE_CLONEABLE: 'cloneable';

  /**
   * Variable: STYLE_DELETABLE
   *
   * Defines the key for the deletable style. This specifies if a cell can be
   * deleted. Possible values are 0 or 1. Default is 1. See
   * <mxGraph.isCellDeletable>. Value is "deletable".
   */
  static STYLE_DELETABLE: 'deletable';

  /**
   * Variable: STYLE_SHAPE
   *
   * Defines the key for the shape. Possible values are all constants with
   * a SHAPE-prefix or any newly defined shape names. Value is "shape".
   */
  static STYLE_SHAPE: 'shape';

  /**
   * Variable: STYLE_EDGE
   *
   * Defines the key for the edge style. Possible values are the functions
   * defined in <mxEdgeStyle>. Value is "edgeStyle".
   */
  static STYLE_EDGE: 'edgeStyle';

  /**
   * Variable: STYLE_JETTY_SIZE
   *
   * Defines the key for the jetty size in <mxEdgeStyle.OrthConnector>.
   * Default is 10. Possible values are all numeric values or "auto".
   * Value is "jettySize".
   */
  static STYLE_JETTY_SIZE: 'jettySize';

  /**
   * Variable: STYLE_SOURCE_JETTY_SIZE
   *
   * Defines the key for the jetty size in <mxEdgeStyle.OrthConnector>.
   * Default is 10. Possible values are numeric values or "auto". This has
   * precedence over <STYLE_JETTY_SIZE>. Value is "sourceJettySize".
   */
  static STYLE_SOURCE_JETTY_SIZE: 'sourceJettySize';

  /**
   * Variable: targetJettySize
   *
   * Defines the key for the jetty size in <mxEdgeStyle.OrthConnector>.
   * Default is 10. Possible values are numeric values or "auto". This has
   * precedence over <STYLE_JETTY_SIZE>. Value is "targetJettySize".
   */
  static STYLE_TARGET_JETTY_SIZE: 'targetJettySize';

  /**
   * Variable: STYLE_LOOP
   *
   * Defines the key for the loop style. Possible values are the functions
   * defined in <mxEdgeStyle>. Value is "loopStyle".
   */
  static STYLE_LOOP: 'loopStyle';

  /**
   * Variable: STYLE_ORTHOGONAL_LOOP
   *
   * Defines the key for the orthogonal loop style. Possible values are 0 and
   * 1. Default is 0. Value is "orthogonalLoop". Use this style to specify
   * if loops should be routed using an orthogonal router. Currently, this
   * uses <mxEdgeStyle.OrthConnector> but will be replaced with a dedicated
   * orthogonal loop router in later releases.
   */
  static STYLE_ORTHOGONAL_LOOP: 'orthogonalLoop';

  /**
   * Variable: STYLE_ROUTING_CENTER_X
   *
   * Defines the key for the horizontal routing center. Possible values are
   * between -0.5 and 0.5. This is the relative offset from the center used
   * for connecting edges. The type of this value is numeric. Value is
   * "routingCenterX".
   */
  static STYLE_ROUTING_CENTER_X: 'routingCenterX';

  /**
   * Variable: STYLE_ROUTING_CENTER_Y
   *
   * Defines the key for the vertical routing center. Possible values are
   * between -0.5 and 0.5. This is the relative offset from the center used
   * for connecting edges. The type of this value is numeric. Value is
   * "routingCenterY".
   */
  static STYLE_ROUTING_CENTER_Y: 'routingCenterY';

  /**
   * Variable: FONT_BOLD
   *
   * Constant for bold fonts. Default is 1.
   */
  static FONT_BOLD: 1;

  /**
   * Variable: FONT_ITALIC
   *
   * Constant for italic fonts. Default is 2.
   */
  static FONT_ITALIC: 2;

  /**
   * Variable: FONT_UNDERLINE
   *
   * Constant for underlined fonts. Default is 4.
   */
  static FONT_UNDERLINE: 4;

  /**
   * Variable: SHAPE_RECTANGLE
   *
   * Name under which <mxRectangleShape> is registered in <mxCellRenderer>.
   * Default is rectangle.
   */
  static SHAPE_RECTANGLE: 'rectangle';

  /**
   * Variable: SHAPE_ELLIPSE
   *
   * Name under which <mxEllipse> is registered in <mxCellRenderer>.
   * Default is ellipse.
   */
  static SHAPE_ELLIPSE: 'ellipse';

  /**
   * Variable: SHAPE_DOUBLE_ELLIPSE
   *
   * Name under which <mxDoubleEllipse> is registered in <mxCellRenderer>.
   * Default is doubleEllipse.
   */
  static SHAPE_DOUBLE_ELLIPSE: 'doubleEllipse';

  /**
   * Variable: SHAPE_RHOMBUS
   *
   * Name under which <mxRhombus> is registered in <mxCellRenderer>.
   * Default is rhombus.
   */
  static SHAPE_RHOMBUS: 'rhombus';

  /**
   * Variable: SHAPE_LINE
   *
   * Name under which <mxLine> is registered in <mxCellRenderer>.
   * Default is line.
   */
  static SHAPE_LINE: 'line';

  /**
   * Variable: SHAPE_IMAGE
   *
   * Name under which <mxImageShape> is registered in <mxCellRenderer>.
   * Default is image.
   */
  static SHAPE_IMAGE: 'image';

  /**
   * Variable: SHAPE_ARROW
   *
   * Name under which <mxArrow> is registered in <mxCellRenderer>.
   * Default is arrow.
   */
  static SHAPE_ARROW: 'arrow';

  /**
   * Variable: SHAPE_ARROW_CONNECTOR
   *
   * Name under which <mxArrowConnector> is registered in <mxCellRenderer>.
   * Default is arrowConnector.
   */
  static SHAPE_ARROW_CONNECTOR: 'arrowConnector';

  /**
   * Variable: SHAPE_LABEL
   *
   * Name under which <mxLabel> is registered in <mxCellRenderer>.
   * Default is label.
   */
  static SHAPE_LABEL: 'label';

  /**
   * Variable: SHAPE_CYLINDER
   *
   * Name under which <mxCylinder> is registered in <mxCellRenderer>.
   * Default is cylinder.
   */
  static SHAPE_CYLINDER: 'cylinder';

  /**
   * Variable: SHAPE_SWIMLANE
   *
   * Name under which <mxSwimlane> is registered in <mxCellRenderer>.
   * Default is swimlane.
   */
  static SHAPE_SWIMLANE: 'swimlane';

  /**
   * Variable: SHAPE_CONNECTOR
   *
   * Name under which <mxConnector> is registered in <mxCellRenderer>.
   * Default is connector.
   */
  static SHAPE_CONNECTOR: 'connector';

  /**
   * Variable: SHAPE_ACTOR
   *
   * Name under which <mxActor> is registered in <mxCellRenderer>.
   * Default is actor.
   */
  static SHAPE_ACTOR: 'actor';

  /**
   * Variable: SHAPE_CLOUD
   *
   * Name under which <mxCloud> is registered in <mxCellRenderer>.
   * Default is cloud.
   */
  static SHAPE_CLOUD: 'cloud';

  /**
   * Variable: SHAPE_TRIANGLE
   *
   * Name under which <mxTriangle> is registered in <mxCellRenderer>.
   * Default is triangle.
   */
  static SHAPE_TRIANGLE: 'triangle';

  /**
   * Variable: SHAPE_HEXAGON
   *
   * Name under which <mxHexagon> is registered in <mxCellRenderer>.
   * Default is hexagon.
   */
  static SHAPE_HEXAGON: 'hexagon';

  /**
   * Variable: ARROW_CLASSIC
   *
   * Constant for classic arrow markers.
   */
  static ARROW_CLASSIC: 'classic';

  /**
   * Variable: ARROW_CLASSIC_THIN
   *
   * Constant for thin classic arrow markers.
   */
  static ARROW_CLASSIC_THIN: 'classicThin';

  /**
   * Variable: ARROW_BLOCK
   *
   * Constant for block arrow markers.
   */
  static ARROW_BLOCK: 'block';

  /**
   * Variable: ARROW_BLOCK_THIN
   *
   * Constant for thin block arrow markers.
   */
  static ARROW_BLOCK_THIN: 'blockThin';

  /**
   * Variable: ARROW_OPEN
   *
   * Constant for open arrow markers.
   */
  static ARROW_OPEN: 'open';

  /**
   * Variable: ARROW_OPEN_THIN
   *
   * Constant for thin open arrow markers.
   */
  static ARROW_OPEN_THIN: 'openThin';

  /**
   * Variable: ARROW_OVAL
   *
   * Constant for oval arrow markers.
   */
  static ARROW_OVAL: 'oval';

  /**
   * Variable: ARROW_DIAMOND
   *
   * Constant for diamond arrow markers.
   */
  static ARROW_DIAMOND: 'diamond';

  /**
   * Variable: ARROW_DIAMOND_THIN
   *
   * Constant for thin diamond arrow markers.
   */
  static ARROW_DIAMOND_THIN: 'diamondThin';

  /**
   * Variable: ALIGN_LEFT
   *
   * Constant for left horizontal alignment. Default is left.
   */
  static ALIGN_LEFT: 'left';

  /**
   * Variable: ALIGN_CENTER
   *
   * Constant for center horizontal alignment. Default is center.
   */
  static ALIGN_CENTER: 'center';

  /**
   * Variable: ALIGN_RIGHT
   *
   * Constant for right horizontal alignment. Default is right.
   */
  static ALIGN_RIGHT: 'right';

  /**
   * Variable: ALIGN_TOP
   *
   * Constant for top vertical alignment. Default is top.
   */
  static ALIGN_TOP: 'top';

  /**
   * Variable: ALIGN_MIDDLE
   *
   * Constant for middle vertical alignment. Default is middle.
   */
  static ALIGN_MIDDLE: 'middle';

  /**
   * Variable: ALIGN_BOTTOM
   *
   * Constant for bottom vertical alignment. Default is bottom.
   */
  static ALIGN_BOTTOM: 'bottom';

  /**
   * Variable: DIRECTION_NORTH
   *
   * Constant for direction north. Default is north.
   */
  static DIRECTION_NORTH: 'north';

  /**
   * Variable: DIRECTION_SOUTH
   *
   * Constant for direction south. Default is south.
   */
  static DIRECTION_SOUTH: 'south';

  /**
   * Variable: DIRECTION_EAST
   *
   * Constant for direction east. Default is east.
   */
  static DIRECTION_EAST: 'east';

  /**
   * Variable: DIRECTION_WEST
   *
   * Constant for direction west. Default is west.
   */
  static DIRECTION_WEST: 'west';

  /**
   * Variable: TEXT_DIRECTION_DEFAULT
   *
   * Constant for text direction default. Default is an empty string. Use
   * this value to use the default text direction of the operating system.
   */
  static TEXT_DIRECTION_DEFAULT: '';

  /**
   * Variable: TEXT_DIRECTION_AUTO
   *
   * Constant for text direction automatic. Default is auto. Use this value
   * to find the direction for a given text with <mxText.getAutoDirection>.
   */
  static TEXT_DIRECTION_AUTO: 'auto';

  /**
   * Variable: TEXT_DIRECTION_LTR
   *
   * Constant for text direction left to right. Default is ltr. Use this
   * value for left to right text direction.
   */
  static TEXT_DIRECTION_LTR: 'ltr';

  /**
   * Variable: TEXT_DIRECTION_RTL
   *
   * Constant for text direction right to left. Default is rtl. Use this
   * value for right to left text direction.
   */
  static TEXT_DIRECTION_RTL: 'rtl';

  /**
   * Variable: DIRECTION_MASK_NONE
   *
   * Constant for no direction.
   */
  static DIRECTION_MASK_NONE: 0;

  /**
   * Variable: DIRECTION_MASK_WEST
   *
   * Bitwise mask for west direction.
   */
  static DIRECTION_MASK_WEST: 1;

  /**
   * Variable: DIRECTION_MASK_NORTH
   *
   * Bitwise mask for north direction.
   */
  static DIRECTION_MASK_NORTH: 2;

  /**
   * Variable: DIRECTION_MASK_SOUTH
   *
   * Bitwise mask for south direction.
   */
  static DIRECTION_MASK_SOUTH: 4;

  /**
   * Variable: DIRECTION_MASK_EAST
   *
   * Bitwise mask for east direction.
   */
  static DIRECTION_MASK_EAST: 8;

  /**
   * Variable: DIRECTION_MASK_ALL
   *
   * Bitwise mask for all directions.
   */
  static DIRECTION_MASK_ALL: 15;

  /**
   * Variable: ELBOW_VERTICAL
   *
   * Constant for elbow vertical. Default is horizontal.
   */
  static ELBOW_VERTICAL: 'vertical';

  /**
   * Variable: ELBOW_HORIZONTAL
   *
   * Constant for elbow horizontal. Default is horizontal.
   */
  static ELBOW_HORIZONTAL: 'horizontal';

  /**
   * Variable: EDGESTYLE_ELBOW
   *
   * Name of the elbow edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  static EDGESTYLE_ELBOW: 'elbowEdgeStyle';

  /**
   * Variable: EDGESTYLE_ENTITY_RELATION
   *
   * Name of the entity relation edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  static EDGESTYLE_ENTITY_RELATION: 'entityRelationEdgeStyle';

  /**
   * Variable: EDGESTYLE_LOOP
   *
   * Name of the loop edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  static EDGESTYLE_LOOP: 'loopEdgeStyle';

  /**
   * Variable: EDGESTYLE_SIDETOSIDE
   *
   * Name of the side to side edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  static EDGESTYLE_SIDETOSIDE: 'sideToSideEdgeStyle';

  /**
   * Variable: EDGESTYLE_TOPTOBOTTOM
   *
   * Name of the top to bottom edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  static EDGESTYLE_TOPTOBOTTOM: 'topToBottomEdgeStyle';

  /**
   * Variable: EDGESTYLE_ORTHOGONAL
   *
   * Name of the generic orthogonal edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  static EDGESTYLE_ORTHOGONAL: 'orthogonalEdgeStyle';

  /**
   * Variable: EDGESTYLE_SEGMENT
   *
   * Name of the generic segment edge style. Can be used as a string value
   * for the STYLE_EDGE style.
   */
  static EDGESTYLE_SEGMENT: 'segmentEdgeStyle';

  /**
   * Variable: PERIMETER_ELLIPSE
   *
   * Name of the ellipse perimeter. Can be used as a string value
   * for the STYLE_PERIMETER style.
   */
  static PERIMETER_ELLIPSE: 'ellipsePerimeter';

  /**
   * Variable: PERIMETER_RECTANGLE
   *
   * Name of the rectangle perimeter. Can be used as a string value
   * for the STYLE_PERIMETER style.
   */
  static PERIMETER_RECTANGLE: 'rectanglePerimeter';

  /**
   * Variable: PERIMETER_RHOMBUS
   *
   * Name of the rhombus perimeter. Can be used as a string value
   * for the STYLE_PERIMETER style.
   */
  static PERIMETER_RHOMBUS: 'rhombusPerimeter';

  /**
   * Variable: PERIMETER_HEXAGON
   *
   * Name of the hexagon perimeter. Can be used as a string value
   * for the STYLE_PERIMETER style.
   */
  static PERIMETER_HEXAGON: 'hexagonPerimeter';

  /**
   * Variable: PERIMETER_TRIANGLE
   *
   * Name of the triangle perimeter. Can be used as a string value
   * for the STYLE_PERIMETER style.
   */
  static PERIMETER_TRIANGLE: 'trianglePerimeter'

}

declare type mxDialectConstants = 'svg' | 'vml' | 'mixedHtml' | 'preferHtml' | 'strictHtml';
