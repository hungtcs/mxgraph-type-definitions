/**
 * Extends {@link mxEventSource} to implement an application wrapper for a graph that
 * adds {@link actions}, I/O using {@link mxCodec}, auto-layout using {@link mxLayoutManager},
 * command history using {@link undoManager}, and standard dialogs and widgets, eg.
 * properties, help, outline, toolbar, and popupmenu. It also adds {@link templates}
 * to be used as cells in toolbars, auto-validation using the {@link validation}
 * flag, attribute cycling using {@link cycleAttributeValues}, higher-level events
 * such as {@link root}, and backend integration using <urlPost> and {@link urlImage}.
 *
 * ### Actions:
 *
 * Actions are functions stored in the <actions> array under their names. The
 * functions take the <mxEditor> as the first, and an optional <mxCell> as the
 * second argument and are invoked using <execute>. Any additional arguments
 * passed to execute are passed on to the action as-is.
 *
 * A list of built-in actions is available in the <addActions> description.
 *
 * ### Read/write Diagrams:
 *
 * To read a diagram from an XML string, for example from a textfield within the
 * page, the following code is used:
 *
 * @example
 * ```javascript
 * var doc = mxUtils.parseXML(xmlString);
 * var node = doc.documentElement;
 * editor.readGraphModel(node);
 * ```
 *
 * For reading a diagram from a remote location, use the {@link open} method.
 *
 * To save diagrams in XML on a server, you can set the {@link urlPost} variable.
 * This variable will be used in {@link getUrlPost} to construct a URL for the post
 * request that is issued in the {@link save} method. The post request contains the
 * XML representation of the diagram as returned by {@link writeGraphModel} in the
 * xml parameter.
 *
 * On the server side, the post request is processed using standard
 * technologies such as Java Servlets, CGI, .NET or ASP.
 *
 * Here are some examples of processing a post request in various languages.
 *
 * - Java: URLDecoder.decode(request.getParameter("xml"), "UTF-8").replace("\n", "&#xa;")
 *
 * Note that the linefeeds should only be replaced if the XML is
 * processed in Java, for example when creating an image, but not
 * if the XML is passed back to the client-side.
 *
 * - .NET: HttpUtility.UrlDecode(context.Request.Params["xml"])
 * - PHP: urldecode($_POST["xml"])
 *
 * ### Creating images:
 *
 * A backend (Java, PHP or C#) is required for creating images. The
 * distribution contains an example for each backend (ImageHandler.java,
 * ImageHandler.cs and graph.php). More information about using a backend
 * to create images can be found in the readme.html files. Note that the
 * preview is implemented using VML/SVG in the browser and does not require
 * a backend. The backend is only required to creates images (bitmaps).
 *
 * ### Special characters:
 *
 * Note There are five characters that should always appear in XML content as
 * escapes, so that they do not interact with the syntax of the markup. These
 * are part of the language for all documents based on XML and for HTML.
 *
 * - &lt; (<)
 * - &gt; (>)
 * - &amp; (&)
 * - &quot; (")
 * - &apos; (')
 *
 * Although it is part of the XML language, &apos; is not defined in HTML.
 * For this reason the XHTML specification recommends instead the use of
 * &#39; if text may be passed to a HTML user agent.
 *
 * If you are having problems with special characters on the server-side then
 * you may want to try the {@link escapePostData} flag.
 *
 * For converting decimal escape sequences inside strings, a user has provided
 * us with the following function:
 *
 * @example
 * ```javascript
 * function html2js(text)
 * {
 *   var entitySearch = /&#[0-9]+;/;
 *   var entity;
 *
 *   while (entity = entitySearch.exec(text))
 *   {
 *     var charCode = entity[0].substring(2, entity[0].length -1);
 *     text = text.substring(0, entity.index)
 *            + String.fromCharCode(charCode)
 *            + text.substring(entity.index + entity[0].length);
 *   }
 *
 *   return text;
 * }
 * ```
 *
 * Otherwise try using hex escape sequences and the built-in unescape function
 * for converting such strings.
 *
 * ### Local Files:
 *
 * For saving and opening local files, no standardized method exists that
 * works across all browsers. The recommended way of dealing with local files
 * is to create a backend that streams the XML data back to the browser (echo)
 * as an attachment so that a Save-dialog is displayed on the client-side and
 * the file can be saved to the local disk.
 *
 * For example, in PHP the code that does this looks as follows.
 *
 * @example
 * ```javascript
 * $xml = stripslashes($_POST["xml"]);
 * header("Content-Disposition: attachment; filename=\"diagram.xml\"");
 * echo($xml);
 * ```
 *
 * To open a local file, the file should be uploaded via a form in the browser
 * and then opened from the server in the editor.
 *
 * ### Cell Properties:
 *
 * The properties displayed in the properties dialog are the attributes and
 * values of the cell's user object, which is an XML node. The XML node is
 * defined in the templates section of the config file.
 *
 * The templates are stored in {@link mxEditor.templates} and contain cells which
 * are cloned at insertion time to create new vertices by use of drag and
 * drop from the toolbar. Each entry in the toolbar for adding a new vertex
 * must refer to an existing template.
 *
 * In the following example, the task node is a business object and only the
 * mxCell node and its mxGeometry child contain graph information:
 *
 * @example
 * ```javascript
 * <Task label="Task" description="">
 *   <mxCell vertex="true">
 *     <mxGeometry as="geometry" width="72" height="32"/>
 *   </mxCell>
 * </Task>
 * ```
 *
 * The idea is that the XML representation is inverse from the in-memory
 * representation: The outer XML node is the user object and the inner node is
 * the cell. This means the user object of the cell is the Task node with no
 * children for the above example:
 *
 * @example
 * ```javascript
 * <Task label="Task" description=""/>
 * ```
 *
 * The Task node can have any tag name, attributes and child nodes. The
 * {@link mxCodec} will use the XML hierarchy as the user object, while removing the
 * "known annotations", such as the mxCell node. At save-time the cell data
 * will be "merged" back into the user object. The user object is only modified
 * via the properties dialog during the lifecycle of the cell.
 *
 * In the default implementation of {@link createProperties}, the user object's
 * attributes are put into a form for editing. Attributes are changed using
 * the {@link mxCellAttributeChange} action in the model. The dialog can be replaced
 * by overriding the {@link createProperties} hook or by replacing the showProperties
 * action in {@link action}. Alternatively, the entry in the config file's popupmenu
 * section can be modified to invoke a different action.
 *
 * If you want to displey the properties dialog on a doubleclick, you can set
 * {@link mxEditor.dblClickAction} to showProperties as follows:
 *
 * @example
 * ```javascript
 * editor.dblClickAction = 'showProperties';
 * ```
 *
 * Popupmenu and Toolbar:
 *
 * The toolbar and popupmenu are typically configured using the respective
 * sections in the config file, that is, the popupmenu is defined as follows:
 *
 * @example
 * ```javascript
 * <mxEditor>
 *   <mxDefaultPopupMenu as="popupHandler">
 * 		<add as="cut" action="cut" icon="images/cut.gif"/>
 *      ...
 * ```
 *
 * New entries can be added to the toolbar by inserting an add-node into the
 * above configuration. Existing entries may be removed and changed by
 * modifying or removing the respective entries in the configuration.
 * The configuration is read by the {@link mxDefaultPopupMenuCodec}, the format of the
 * configuration is explained in {@link mxDefaultPopupMenu.decode}.
 *
 * The toolbar is defined in the mxDefaultToolbar section. Items can be added
 * and removed in this section.
 *
 * @example
 * ```javascript
 * <mxEditor>
 *   <mxDefaultToolbar>
 *     <add as="save" action="save" icon="images/save.gif"/>
 *     <add as="Swimlane" template="swimlane" icon="images/swimlane.gif"/>
 *     ...
 * ```
 *
 * The format of the configuration is described in
 * {@link mxDefaultToolbarCodec.decode}.
 *
 * Ids:
 *
 * For the IDs, there is an implicit behaviour in {@link mxCodec}: It moves the Id
 * from the cell to the user object at encoding time and vice versa at decoding
 * time. For example, if the Task node from above has an id attribute, then
 * the {@link mxCell.id} of the corresponding cell will have this value. If there
 * is no Id collision in the model, then the cell may be retrieved using this
 * Id with the {@link mxGraphModel.getCell} function. If there is a collision, a new
 * Id will be created for the cell using {@link mxGraphModel.createId}. At encoding
 * time, this new Id will replace the value previously stored under the id
 * attribute in the Task node.
 *
 * See {@link mxEditorCodec}, {@link mxDefaultToolbarCodec} and {@link mxDefaultPopupMenuCodec}
 * for information about configuring the editor and user interface.
 *
 * Programmatically inserting cells:
 *
 * For inserting a new cell, say, by clicking a button in the document,
 * the following code can be used. This requires an reference to the editor.
 *
 * @example
 * ```javascript
 * var userObject = new Object();
 * var parent = editor.graph.getDefaultParent();
 * var model = editor.graph.model;
 * model.beginUpdate();
 * try
 * {
 *   editor.graph.insertVertex(parent, null, userObject, 20, 20, 80, 30);
 * }
 * finally
 * {
 *   model.endUpdate();
 * }
 * ```
 *
 * If a template cell from the config file should be inserted, then a clone
 * of the template can be created as follows. The clone is then inserted using
 * the add function instead of addVertex.
 *
 * @example
 * ```javascript
 * var template = editor.templates['task'];
 * var clone = editor.graph.model.cloneCell(template);
 * ```
 *
 * #### Resources:
 *
 * resources/editor - Language resources for mxEditor
 *
 * #### Callback: onInit
 *
 * Called from within the constructor. In the callback,
 * "this" refers to the editor instance.
 *
 * #### Cookie: mxgraph=seen
 *
 * Set when the editor is started. Never expires. Use
 * {@link resetFirstTime} to reset this cookie. This cookie
 * only exists if {@link onInit} is implemented.
 *
 * #### Event: mxEvent.OPEN
 *
 * Fires after a file was opened in {@link open}. The <code>filename</code> property
 * contains the filename that was used. The same value is also available in
 * {@link filename}.
 *
 * #### Event: mxEvent.SAVE
 *
 * Fires after the current file was saved in {@link save}. The <code>url</code>
 * property contains the URL that was used for saving.
 *
 * #### Event: mxEvent.POST
 *
 * Fires if a successful response was received in {@link postDiagram}. The
 * <code>request</code> property contains the <mxXmlRequest>, the
 * <code>url</code> and <code>data</code> properties contain the URL and the
 * data that were used in the post request.
 *
 * #### Event: mxEvent.ROOT
 *
 * Fires when the current root has changed, or when the title of the current
 * root has changed. This event has no properties.
 *
 * #### Event: mxEvent.BEFORE_ADD_VERTEX
 *
 * Fires before a vertex is added in {@link addVertex}. The <code>vertex</code>
 * property contains the new vertex and the <code>parent</code> property
 * contains its parent.
 *
 * #### Event: mxEvent.ADD_VERTEX
 *
 * Fires between begin- and endUpdate in <addVertex>. The <code>vertex</code>
 * property contains the vertex that is being inserted.
 *
 * #### Event: mxEvent.AFTER_ADD_VERTEX
 *
 * Fires after a vertex was inserted and selected in <addVertex>. The
 * <code>vertex</code> property contains the new vertex.
 *
 * ### Example:
 *
 * For starting an in-place edit after a new vertex has been added to the
 * graph, the following code can be used.
 *
 * @example
 * ```javascript
 * editor.addListener(mxEvent.AFTER_ADD_VERTEX, function(sender, evt)
 * {
 *   var vertex = evt.getProperty('vertex');
 *
 *   if (editor.graph.isCellEditable(vertex))
 *   {
 *   	editor.graph.startEditingAtCell(vertex);
 *   }
 * });
 * ```
 *
 * Event: mxEvent.ESCAPE
 *
 * Fires when the escape key is pressed. The <code>event</code> property
 * contains the key event.
 *
 * Constructor: mxEditor
 *
 * Constructs a new editor. This function invokes the <onInit> callback
 * upon completion.
 *
 * Example:
 *
 * @example
 * ```javascript
 * var config = mxUtils.load('config/diagrameditor.xml').getDocumentElement();
 * var editor = new mxEditor(config);
 * ```
 * 
 * @class mxEditor
 * @extends mxEventSource
 */
declare class mxEditor extends mxEventSource {
  /**
   * @param {Node} config Optional XML node that contains the configuration
   */
  constructor(config?: Node);

  /**
   * Specifies the resource key for the zoom dialog. If the resource for this
   * key does not exist then the value is used as the error message.
   * @default 'askZoom'
   */
  askZoomResource: 'askZoom' | '';

  /**
   * Specifies the resource key for the last saved info. If the resource for
   * this key does not exist then the value is used as the error message.
   * @default 'lastSaved'.
   */
  lastSavedResource: 'lastSaved' | '';

  /**
   * Specifies the resource key for the current file info. If the resource for
   * this key does not exist then the value is used as the error message.
   * @default 'currentFile'
   */
  currentFileResource: 'currentFile' | '';

  /**
   * Specifies the resource key for the properties window title. If the
   * resource for this key does not exist then the value is used as the
   * error message.
   * @default 'properties'
   */
  propertiesResource: 'properties' | '';

  /**
   * Specifies the resource key for the tasks window title. If the
   * resource for this key does not exist then the value is used as the
   * error message.
   * @default 'tasks'
   */
  tasksResource: 'tasks' | '';

  /**
   * Specifies the resource key for the help window title. If the
   * resource for this key does not exist then the value is used as the
   * error message.
   * @default 'help'
   */
  helpResource: 'help' | '';

  /**
   * Specifies the resource key for the outline window title. If the
   * resource for this key does not exist then the value is used as the
   * error message.
   * @default 'outline'
   */
  outlineResource: 'outline' | '';

  /**
   * Reference to the {@link mxWindow} that contains the outline. The {@link mxOutline}
   * is stored in outline.outline.
   * @default null
   */
  outline: mxWindow;

  /**
   * Holds a {@link mxGraph} for displaying the diagram. The graph
   * is created in {@link setGraphContainer}.
   * @default null
   */
  graph: mxGraph;

  /**
   * Holds the render hint used for creating the
   * graph in {@link setGraphContainer}. See {@link mxGraph}.
   * @default null
   */
  graphRenderHint: any;

  /**
   * Holds a {@link mxDefaultToolbar} for displaying the toolbar. The
   * toolbar is created in {@link setToolbarContainer}.
   * @default null
   */
  toolbar: mxDefaultToolbar;

  /**
   * DOM container that holds the statusbar. 
   * Use {@link setStatusContainer} to set this value.
   * @default null
   */
  status: Element;

  /**
   * Holds a {@link mxDefaultPopupMenu} for displaying popupmenus.
   * @default null
   */
  popupHandler: mxDefaultPopupMenu;

  /**
   * Holds an {@link mxUndoManager} for the command history.
   * @default null
   */
  undoManager: mxUndoManager;

  /**
   * Holds a {@link mxDefaultKeyHandler} for handling keyboard events.
   * The handler is created in {@link setGraphContainer}.
   */
  keyHandler: mxDefaultKeyHandler;

  /**
   * Maps from actionnames to actions, which are functions taking
   * the editor and the cell as arguments. Use {@link addAction}
   * to add or replace an action and {@link execute} to execute an action
   * by name, passing the cell to be operated upon as the second
   * argument.
   * @default null
   */
  actions: Function;

  /**
   * Specifies the name of the action to be executed
   * when a cell is double clicked. Default is 'edit'.
   *
   * To handle a singleclick, use the following code.
   *
   * @example
   * ```javascript
   * editor.graph.addListener(mxEvent.CLICK, function(sender, evt)
   * {
   *   var e = evt.getProperty('event');
   *   var cell = evt.getProperty('cell');
   *
   *   if (cell != null && !e.isConsumed())
   *   {
   *     // Do something useful with cell...
   *     e.consume();
   *   }
   * });
   * ```
   */
  dblClickAction: 'edit';

  /**
   * Specifies if new cells must be inserted
   * into an existing swimlane. Otherwise, cells
   * that are not swimlanes can be inserted as
   * top-level cells.
   * @default false
   */
  swimlaneRequired: boolean;

  /**
   * Specifies if the context menu should be disabled in the graph container.
   * @default true
   */
  disableContextMenu: boolean;

  /**
   * Specifies the function to be used for inserting new
   * cells into the graph. This is assigned from the
   * {@link mxDefaultToolbar} if a vertex-tool is clicked.
   */
  insertFunction: Function;

  /**
   * Specifies if a new cell should be inserted on a single
   * click even using {@link insertFunction} if there is a cell
   * under the mousepointer, otherwise the cell under the
   * mousepointer is selected.
   * @default false
   */
  forcedInserting: boolean;
  
  /**
   * Maps from names to protoype cells to be used
   * in the toolbar for inserting new cells into
   * the diagram.
   * @default null
   */
  templates: any;

  /**
   * Prototype edge cell that is used for creating new edges.
   * @default null
   */
  defaultEdge: any;

  /**
   * Specifies the edge style to be returned in {@link getEdgeStyle}.
   * @default null
   */
  defaultEdgeStyle: any;

  /**
   * Prototype group cell that is used for creating new groups.
   * @default null
   */
  defaultGroup: any;

  /**
   * Default size for the border of new groups. If null,
   * then then <mxGraph.gridSize> is used.
   * @default null
   */
  groupBorderSize: any;

  /**
   * Contains the URL of the last opened file as a string.
   * @default null
   */
  filename: string;

  /**
   * Character to be used for encoding linefeeds in {@link save}
   * @default '&#xa;'
   */
  linefeed: '&#xa;';

  /**
   * Specifies if the name of the post parameter that contains the diagram
   * data in a post request to the server.
   * @default 'xml'
   */
  postParameterName: 'xml';

  /**
   * Specifies if the data in the post request for saving a diagram
   * should be converted using encodeURIComponent.
   * @default true
   */
  escapePostData: boolean;

  /**
   * Specifies the URL to be used for posting the diagram
   * to a backend in {@link save}.
   * @default null
   */
  urlPost: string;

  /**
   * Specifies the URL to be used for creating a bitmap of
   * the graph in the image action.
   * @default null 
   */
  urlImage: string;

  /**
   * Specifies if the top-level elements in the
   * diagram should be layed out using a vertical
   * or horizontal stack depending on the setting
   * of {@link horizontalFlow}. The spacing between the
   * swimlanes is specified by {@link swimlaneSpacing}.
   *
   * If the top-level elements are swimlanes, then
   * the intra-swimlane layout is activated by
   * the {@link layoutSwimlanes} switch.
   * @default false
   */
  layoutDiagram: boolean;
}
