
declare class mxDragSource {

  /**
   * Reference to the DOM node which was made draggable.
   */
  element: HTMLElement;

  /**
   * Holds the DOM node that is used to represent the drag preview.
   */
  dropHandler: HTMLElement;

  /**
   * mxPoint that specifies the offset of the dragElement.
   */
  dragOffset: mxPoint;

  /**
   * Holds the DOM node that is used to represent the drag preview.
   */
  dragElement: HTMLElement;

  /**
   * Optional mxRectangle that specifies the unscaled size of the preview.
   */
  previewElement: HTMLElement;

  /**
   * Specifies if this drag source is enabled.
   */
  enabled: boolean;

  /**
   * Reference to the mxGraph that is the current drop target.
   */
  currentGraph: mxGraph;

  /**
   * Holds the current drop target under the mouse.
   */
  currentDropTarget: any;

  /**
   * Holds the current drop location.
   */
  currentPoint: mxPoint;

  /**
   * Holds an mxGuide for the currentGraph if <dragPreview> is not null.
   */
  currentGuide: mxGuide;

  /**
   * Specifies if the graph should scroll automatically.
   */
  autoscroll: boolean;

  /**
   * Specifies if mxGuide should be enabled.
   */
  guidesEnabled: boolean;

  /**
   * Specifies if the grid should be allowed.
   */
  gridEnabled: boolean;

  /**
   * Specifies if drop targets should be highlighted.
   */
  highlightDropTargets: boolean;

  /**
   * ZIndex for the drag element.
   */
  dragElementZIndex: number;

  /**
   * Opacity of the drag element in %.
   */
  dragElementOpacity: number;

  /**
   * Whether the event source should be checked in <graphContainerEvent>.
   */
  checkEventSource: any;


}
