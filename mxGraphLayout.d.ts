
declare class mxGraphLayout {

  constructor(graph: mxGraph);

  /**
   * Executes the layout algorithm for the children of the given parent.
   */
  execute(parent: mxCell): void;

}
