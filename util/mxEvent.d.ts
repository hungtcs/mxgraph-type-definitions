
declare class mxEvent {

  static UP: 'up';
  static DONE: 'done';
  static ROOT: 'root';
  static DOWN: 'down';
  static SCALE: 'scale';
  static CHANGE: 'change';
  static ESCAPE: 'escape';
  static TRANSLATE: 'translate';
  static LAYOUT_CELLS: 'layoutCells';
  static START_EDITING: 'startEditing';
  static SCALE_AND_TRANSLATE: 'scaleAndTranslate';

  static LABEL_HANDLE: -1;
  static ROTATION_HANDLE: -2;

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
