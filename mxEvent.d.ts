declare class mxEvent {


  /**
   * Disables the context menu for the given element.
   */
  static disableContextMenu(element: HTMLElement): void;

  /**
   * Consumes the given event.
   */
  static consume(event: Event, preventDefault?: boolean, stopPropagation?: boolean): void;

  static addMouseWheelListener(callback: (event: MouseWheelEvent, up: boolean) => void, target: HTMLElement): void;

}
