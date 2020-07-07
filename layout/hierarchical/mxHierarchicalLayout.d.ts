// TODO add doc and missing methods and fields
declare class mxHierarchicalLayout extends mxGraphLayout {
  /**
   * Specifies if the parent should be resized after the layout so that it contains all the child cells.
   * @default false
   */
  resizeParent: boolean;

  /**
   * The spacing buffer added between cells on the same layer.
   * @default 30
   */
  intraCellSpacing: number;

  /**
   * The spacing buffer added between cell on adjacent layers.
   * @default 100
   */
  interRankCellSpacing: number;
  
  /**
   * The spacing buffer between unconnected hierarchies.
   * @default 60
   */
  interHierarchySpacing: number;

  /**
   * The position of the root node(s) relative to the laid out graph in.
   * @default {@link mxConstants.DIRECTION_NORTH}
   */
  orientation: string;
}
