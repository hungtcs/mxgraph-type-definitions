

declare class mxLayoutManager {

  constructor(graph: mxGraph);

  getGraph(): mxGraph;

  setGraph(graph: mxGraph): void;

  getLayout(parent: mxCell): mxGraphLayout;

}
