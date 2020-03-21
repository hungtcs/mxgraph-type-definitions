
declare class mxGraphLayout {
  graph: mxGraph;

  constructor(graph: mxGraph);

  /**
   * Executes the layout algorithm for the children of the given parent.
   */
  execute(parent: mxCell): void;

  /**
   * Notified when a cell is being moved in a parent that has automatic layout to update the cell state (eg. index)
   * so that the outcome of the layout will position the vertex as close to the point (x, y) as possible.
   * Empty implementation.
   */
  moveCell(cell: mxCell, x: number, y: number): void;

  /**
   * Returns the graph that this layout operates on.
   */
  getGraph(): void;

  /**
   * Returns the constraint for the given key and cell.
   */
  getConstraint(): void;

  /**
   * Traverses the (directed) graph invoking the given function for each visited vertex and edge.
   */
  traverse(): void;

  /**
   * Returns true if the given parent is an ancestor of the given child.
   */
  isAncestor(): boolean;

  /**
   * Returns a boolean indicating if the given mxCell is movable or bendable by the algorithm.
   */
  isVertexMovable(cell: mxCell): boolean;

  /**
   * Returns a boolean indicating if the given mxCell should be ignored by the algorithm.
   */
  isVertexIgnored(cell: mxCell): boolean;

  /**
   * Returns a boolean indicating if the given mxCell should be ignored by the algorithm.
   */
  isEdgeIgnored(cell: mxCell): boolean;

  /**
   * Disables or enables the edge style of the given edge.
   */
  setEdgeStyleEnabled(): void;

  /**
   * Disables or enables orthogonal end segments of the given edge.
   */
  setOrthogonalEdge(): void;

  /**
   * Determines the offset of the given parent to the parent of the layout
   */
  getParentOffset(): void;

  /**
   * Replaces the array of mxPoints in the geometry of the given edge with the given array of mxPoints.
   */
  setEdgePoints(): void;

  /**
   * Sets the new position of the given cell taking into account the size of the bounding box if useBoundingBox is true.
   */
  setVertexLocation(): void;

  /**
   * Returns an mxRectangle that defines the bounds of the given cell or the bounding box if useBoundingBox is true.
   */
  getVertexBounds(): void;

  /**
   * Shortcut to mxGraph.updateGroupBounds with moveGroup set to true.
   */
  arrangeGroups(): void;


}
