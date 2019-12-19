declare class mxCircleLayout {

  moveCircle: boolean;
  disableEdgeStyle: boolean;

  constructor(graph: mxGraph, radius?: number);

  execute(parent: mxCell): void;

  getRadius(count: number, max: number): number;

}
