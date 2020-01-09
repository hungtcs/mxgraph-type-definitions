
declare class mxEvent {

  /**
   *Index for the label handle in an mxMouseEvent.
  */
  static LABEL_HANDLE: -1;
  /**
   *Index for the rotation handle in an mxMouseEvent.
  */
  static ROTATION_HANDLE: -2;
  /**
   *Start index for the custom handles in an mxMouseEvent.
  */
  static CUSTOM_HANDLE: -100;
  /**
   *Start index for the virtual handles in an mxMouseEvent.
  */
  static VIRTUAL_HANDLE: -100000;
  /**
   *Specifies the event name for mouseDown.
  */
  static MOUSE_DOWN: 'mouseDown';
  /**
   *Specifies the event name for mouseMove.
  */
  static MOUSE_MOVE: 'mouseMove';
  /**
   *Specifies the event name for mouseUp.
  */
  static MOUSE_UP: 'mouseUp';
  /**
   *Specifies the event name for activate.
  */
  static ACTIVATE: 'activate';
  /**
   *Specifies the event name for resizeStart.
  */
  static RESIZE_START: 'resizeStart';
  /**
   *Specifies the event name for resize.
  */
  static RESIZE: 'resize';
  /**
   *Specifies the event name for resizeEnd.
  */
  static RESIZE_END: 'resizeEnd';
  /**
   *Specifies the event name for moveStart.
  */
  static MOVE_START: 'moveStart';
  /**
   *Specifies the event name for move.
  */
  static MOVE: 'move';
  /**
   *Specifies the event name for moveEnd.
  */
  static MOVE_END: 'moveEnd';
  /**
   *Specifies the event name for panStart.
  */
  static PAN_START: 'panStart';
  /**
   *Specifies the event name for pan.
  */
  static PAN: 'pan';
  /**
   *Specifies the event name for panEnd.
  */
  static PAN_END: 'panEnd';
  /**
   *Specifies the event name for minimize.
  */
  static MINIMIZE: 'minimize';
  /**
   *Specifies the event name for normalize.
  */
  static NORMALIZE: 'normalize';
  /**
   *Specifies the event name for maximize.
  */
  static MAXIMIZE: 'maximize';
  /**
   *Specifies the event name for hide.
  */
  static HIDE: 'hide';
  /**
   *Specifies the event name for show.
  */
  static SHOW: 'show';
  /**
   *Specifies the event name for close.
  */
  static CLOSE: 'close';
  /**
   *Specifies the event name for destroy.
  */
  static DESTROY: 'destroy';
  /**
   *Specifies the event name for refresh.
  */
  static REFRESH: 'refresh';
  /**
   *Specifies the event name for size.
  */
  static SIZE: 'size';
  /**
   *Specifies the event name for select.
  */
  static SELECT: 'select';
  /**
   *Specifies the event name for fired.
  */
  static FIRED: 'fired';
  /**
   *Specifies the event name for fireMouseEvent.
  */
  static FIRE_MOUSE_EVENT: 'fireMouseEvent';
  /**
   *Specifies the event name for gesture.
  */
  static GESTURE: 'gesture';
  /**
   *Specifies the event name for tapAndHold.
  */
  static TAP_AND_HOLD: 'tapAndHold';
  /**
   *Specifies the event name for get.
  */
  static GET: 'get';
  /**
   *Specifies the event name for receive.
  */
  static RECEIVE: 'receive';
  /**
   *Specifies the event name for connect.
  */
  static CONNECT: 'connect';
  /**
   *Specifies the event name for disconnect.
  */
  static DISCONNECT: 'disconnect';
  /**
   *Specifies the event name for suspend.
  */
  static SUSPEND: 'suspend';
  /**
   *Specifies the event name for suspend.
  */
  static RESUME: 'resume';
  /**
   *Specifies the event name for mark.
  */
  static MARK: 'mark';
  /**
   *Specifies the event name for root.
  */
  static ROOT: 'root';
  /**
   *Specifies the event name for post.
  */
  static POST: 'post';
  /**
   *Specifies the event name for open.
  */
  static OPEN: 'open';
  /**
   *Specifies the event name for open.
  */
  static SAVE: 'save';
  /**
   *Specifies the event name for beforeAddVertex.
  */
  static BEFORE_ADD_VERTEX: 'beforeAddVertex';
  /**
   *Specifies the event name for addVertex.
  */
  static ADD_VERTEX: 'addVertex';
  /**
   *Specifies the event name for afterAddVertex.
  */
  static AFTER_ADD_VERTEX: 'afterAddVertex';
  /**
   *Specifies the event name for done.
  */
  static DONE: 'done';
  /**
   *Specifies the event name for execute.
  */
  static EXECUTE: 'execute';
  /**
   *Specifies the event name for executed.
  */
  static EXECUTED: 'executed';
  /**
   *Specifies the event name for beginUpdate.
  */
  static BEGIN_UPDATE: 'beginUpdate';
  /**
   *Specifies the event name for startEdit.
  */
  static START_EDIT: 'startEdit';
  /**
   *Specifies the event name for endUpdate.
  */
  static END_UPDATE: 'endUpdate';
  /**
   *Specifies the event name for endEdit.
  */
  static END_EDIT: 'endEdit';
  /**
   *Specifies the event name for beforeUndo.
  */
  static BEFORE_UNDO: 'beforeUndo';
  /**
   *Specifies the event name for undo.
  */
  static UNDO: 'undo';
  /**
   *Specifies the event name for redo.
  */
  static REDO: 'redo';
  /**
   *Specifies the event name for change.
  */
  static CHANGE: 'change';
  /**
   *Specifies the event name for notify.
  */
  static NOTIFY: 'notify';
  /**
   *Specifies the event name for layoutCells.
  */
  static LAYOUT_CELLS: 'layoutCells';
  /**
   *Specifies the event name for click.
  */
  static CLICK: 'click';
  /**
   *Specifies the event name for scale.
  */
  static SCALE: 'scale';
  /**
   *Specifies the event name for translate.
  */
  static TRANSLATE: 'translate';
  /**
   *Specifies the event name for scaleAndTranslate.
  */
  static SCALE_AND_TRANSLATE: 'scaleAndTranslate';
  /**
   *Specifies the event name for up.
  */
  static UP: 'up';
  /**
   *Specifies the event name for down.
  */
  static DOWN: 'down';
  /**
   *Specifies the event name for add.
  */
  static ADD: 'add';
  /**
   *Specifies the event name for remove.
  */
  static REMOVE: 'remove';
  /**
   *Specifies the event name for clear.
  */
  static CLEAR: 'clear';
  /**
   *Specifies the event name for addCells.
  */
  static ADD_CELLS: 'addCells';
  /**
   *Specifies the event name for cellsAdded.
  */
  static CELLS_ADDED: 'cellsAdded';
  /**
   *Specifies the event name for moveCells.
  */
  static MOVE_CELLS: 'moveCells';
  /**
   *Specifies the event name for cellsMoved.
  */
  static CELLS_MOVED: 'cellsMoved';
  /**
   *Specifies the event name for resizeCells.
  */
  static RESIZE_CELLS: 'resizeCells';
  /**
   *Specifies the event name for cellsResized.
  */
  static CELLS_RESIZED: 'cellsResized';
  /**
   *Specifies the event name for toggleCells.
  */
  static TOGGLE_CELLS: 'toggleCells';
  /**
   *Specifies the event name for cellsToggled.
  */
  static CELLS_TOGGLED: 'cellsToggled';
  /**
   *Specifies the event name for orderCells.
  */
  static ORDER_CELLS: 'orderCells';
  /**
   *Specifies the event name for cellsOrdered.
  */
  static CELLS_ORDERED: 'cellsOrdered';
  /**
   *Specifies the event name for removeCells.
  */
  static REMOVE_CELLS: 'removeCells';
  /**
   *Specifies the event name for cellsRemoved.
  */
  static CELLS_REMOVED: 'cellsRemoved';
  /**
   *Specifies the event name for groupCells.
  */
  static GROUP_CELLS: 'groupCells';
  /**
   *Specifies the event name for ungroupCells.
  */
  static UNGROUP_CELLS: 'ungroupCells';
  /**
   *Specifies the event name for removeCellsFromParent.
  */
  static REMOVE_CELLS_FROM_PARENT: 'removeCellsFromParent';
  /**
   *Specifies the event name for foldCells.
  */
  static FOLD_CELLS: 'foldCells';
  /**
   *Specifies the event name for cellsFolded.
  */
  static CELLS_FOLDED: 'cellsFolded';
  /**
   *Specifies the event name for alignCells.
  */
  static ALIGN_CELLS: 'alignCells';
  /**
   *Specifies the event name for labelChanged.
  */
  static LABEL_CHANGED: 'labelChanged';
  /**
   *Specifies the event name for connectCell.
  */
  static CONNECT_CELL: 'connectCell';
  /**
   *Specifies the event name for cellConnected.
  */
  static CELL_CONNECTED: 'cellConnected';
  /**
   *Specifies the event name for splitEdge.
  */
  static SPLIT_EDGE: 'splitEdge';
  /**
   *Specifies the event name for flipEdge.
  */
  static FLIP_EDGE: 'flipEdge';
  /**
   *Specifies the event name for startEditing.
  */
  static START_EDITING: 'startEditing';
  /**
   *Specifies the event name for editingStarted.
  */
  static EDITING_STARTED: 'editingStarted';
  /**
   *Specifies the event name for editingStopped.
  */
  static EDITING_STOPPED: 'editingStopped';
  /**
   *Specifies the event name for addOverlay.
  */
  static ADD_OVERLAY: 'addOverlay';
  /**
   *Specifies the event name for removeOverlay.
  */
  static REMOVE_OVERLAY: 'removeOverlay';
  /**
   *Specifies the event name for updateCellSize.
  */
  static UPDATE_CELL_SIZE: 'updateCellSize';
  /**
   *Specifies the event name for escape.
  */
  static ESCAPE: 'escape';
  /**
   *Specifies the event name for doubleClick.
  */
  static DOUBLE_CLICK: 'doubleClick';
  /**
   *Specifies the event name for start.
  */
  static START: 'start';
  /**
   *Specifies the event name for reset.
  */
  static RESET: 'reset';

  /**
   * Binds the function to the specified event on the given element.
   * Use mxUtils.bind in order to bind the “this” keyword inside the function to a given execution scope.
   */
  static addListener(element: HTMLElement, event: string, callback: any): void;

  /**
   * Returns the event’s target or srcElement depending on the browser.
   * @param event
   */
  static getSource(event: Event): HTMLElement;

  static getClientX(event: Event): number;
  static getClientY(event: Event): number;

  /**
   * Returns true if the alt key is pressed for the given event.
   */
  static isAltDown(evt: any): boolean;
  static isMetaDown(evt: any): boolean;
  static isShiftDown(evt: any): boolean;
  static isControlDown(evt: any): boolean;
  static isPopupTrigger(evt: any): boolean;

  static isMouseEvent(evt: any): boolean;

  /**
   * Returns true if the event was generated using a touch device (not a pen or mouse).
   * @param event
   */
  static isTouchEvent(event: Event): boolean;

  /**
   * Disables the context menu for the given element.
   */
  static disableContextMenu(element: HTMLElement): void;

  /**
   * Consumes the given event.
   */
  static consume(event: Event, preventDefault?: boolean, stopPropagation?: boolean): void;

  static addMouseWheelListener(callback: (event: MouseWheelEvent, up: boolean) => void, target: HTMLElement): void;

  /**
   * Adds the given listeners for touch, mouse and/or pointer events.
   * If mxClient.IS_POINTER is true then pointer events will be registered,
   * else the respective mouse events will be registered.
   * If mxClient.IS_POINTER is false and mxClient.IS_TOUCH is true then the respective
   * touch events will be registered as well as the mouse events.
   * @param node
   * @param startListener
   * @param moveListener
   * @param endListener
   */
  static addGestureListeners(node: Element, startListener: Function, moveListener?: Function, endListener?: Function): void;

  /**
   * Redirects the mouse events from the given DOM node to the graph dispatch loop using the event and given state as event arguments.
   * State can either be an instance of mxCellState or a function that returns an mxCellState.
   * The down, move, up and dblClick arguments are optional functions that take the trigger event
   * as arguments and replace the default behaviour.
   * @param node
   * @param graph
   * @param state
   * @param down
   * @param move
   * @param up
   * @param dblClick
   */
  static redirectMouseEvents(node: Element, graph: mxGraph, state?: mxCellState,
    down?, move?, up?, dblClick?);

}
