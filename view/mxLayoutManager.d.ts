
declare class mxLayoutManager {

  constructor(graph: mxGraph);

  getGraph(): mxGraph;

  setGraph(graph: mxGraph): void;

  getLayout(parent: mxCell): mxGraphLayout;











graph: any; //	Reference to the enclosing mxGraph.
bubbling: any; //	Specifies if the layout should bubble along the cell hierarchy.
enabled: any; //	Specifies if event handling is enabled.
updateHandler: any; //	Holds the function that handles the endUpdate event.
moveHandler: any; //	Holds the function that handles the move event.

isEnabled(...params: any): void; //	Returns true if events are handled.
setEnabled(...params: any): void; //	Enables or disables event handling.
isBubbling(...params: any): void; //	Returns true if a layout should bubble, that is, if the parent layout should be executed whenever a cell layout (layout of the children of a cell) has been executed.
setBubbling(...params: any): void; //	Sets bubbling.
beforeUndo(...params: any): void; //	Called from the undoHandler.
executeLayout(...params: any): void; //	Executes the given layout on the given parent.
cellsMoved(...params: any): void; //	Called from the moveHandler.
getCellsForEdit(...params: any): void; //	Returns the cells to be layouted for the given sequence of changes.
getCellsForChange(...params: any): void; //	Executes all layouts which have been scheduled during the changes.
layoutCells(...params: any): void; //	Executes all layouts which have been scheduled during the changes.
executeLayout(...params: any): void; //	Executes the given layout on the given parent.
destroy(...params: any): void; //

}
