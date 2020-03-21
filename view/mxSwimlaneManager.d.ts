
/**
 * Manager for swimlanes and nested swimlanes that sets the size of
 * newly added swimlanes to that of their siblings,
 * and propagates changes to the size of a swimlane to its siblings,
 * if <siblings> is true, and its ancestors, if <bubbling> is true.
 */
declare class mxSwimlaneManager {

  /**
   * Reference to the enclosing mxGraph.
   */
  graph: mxGraph;

  /**
   * Specifies if event handling is enabled.
   */
  enabled: boolean

  /**
   * Specifies the orientation of the swimlanes.
   */
  horizontal: boolean;

  /**
   * Specifies if newly added cells should be resized to match the size of their existing siblings.
   */
  addEnabled: boolean;

  /**
   * Specifies if resizing of swimlanes should be handled.
   */
  resizeEnabled: boolean;

  /**
   * Holds the function that handles the move event.
   */
  moveHandler: any;

  constructor(
    graph: mxGraph,
    horizontal?: boolean,
    addEnabled?: boolean,
    resizeEnabled?: boolean
  );

  /**
   * Returns true if events are handled.
   */
  isEnabled(): boolean;

  /**
   * Enables or disables event handling.
   */
  setEnabled(value: boolean): void;

  /**
   * Returns horizontal.
   */
  isHorizontal(): boolean;

  /**
   * Sets horizontal.
   */
  setHorizontal(value: boolean): void;

  /**
   * Returns addEnabled.
   */
  isAddEnabled(): boolean;

  /**
   * Sets addEnabled.
   */
  setAddEnabled(value: boolean): void;

  /**
   * Returns resizeEnabled.
   */
  isResizeEnabled(): boolean;

  /**
   * Sets resizeEnabled.
   */
  setResizeEnabled(value: boolean): void;

  /**
   * Returns the graph that this manager operates on.
   */
  getGraph(): mxGraph;

  /**
   * Sets the graph that the manager operates on.
   */
  setGraph(graph: mxGraph): void;

  /**
   * Returns true if the given swimlane should be ignored.
   */
  isSwimlaneIgnored(swimlane: any): boolean;

  /**
   * Returns true if the given cell is horizontal.
   */
  isCellHorizontal(cell: mxCell): boolean;

  /**
   * Called if any cells have been added.
   */
  cellsAdded(cells: Array<mxCell>): void;

  /**
   * Updates the size of the given swimlane to match that of any existing siblings swimlanes.
   */
  swimlaneAdded(swimlane: any): void;

  /**
   * Called if any cells have been resizes.
   */
  cellsResized(cells: Array<mxCell>): void;

  /**
   * Called from cellsResized for all swimlanes that are not ignored to update the size of the siblings and the size of the parent swimlanes, recursively, if <bubbling> is true.
   */
  resizeSwimlane(swimlane: any, w: number, h: number, parentHorizontal: boolean): void;

  /**
   * Removes all handlers from the graph and deletes the reference to it.
   */
  destroy(): void;
}
