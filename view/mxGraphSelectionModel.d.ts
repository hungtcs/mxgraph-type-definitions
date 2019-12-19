

declare class mxGraphSelectionModel extends mxEventSource {

  private cells: mxCell[];

  /**
   * Variable: doneResource
   *
   * Specifies the resource key for the status message after a long operation.
   * If the resource for this key does not exist then the value is used as
   * the status message. Default is 'done'.
   */
  doneResource: 'done' | '';

  /**
   * Variable: updatingSelectionResource
   *
   * Specifies the resource key for the status message while the selection is
   * being updated. If the resource for this key does not exist then the
   * value is used as the status message. Default is 'updatingSelection'.
   */
  updatingSelectionResource: 'updatingSelection' | '';

  /**
   * Variable: graph
   *
   * Reference to the enclosing <mxGraph>.
   */
  graph: mxGraph;

  /**
   * Variable: singleSelection
   *
   * Specifies if only one selected item at a time is allowed.
   * Default is false.
   */
  singleSelection: boolean;

  constructor(graph: mxGraph);

  /**
   * Function: isSingleSelection
   *
   * Returns <singleSelection> as a boolean.
   */
  isSingleSelection(): boolean;

  /**
   * Function: setSingleSelection
   *
   * Sets the <singleSelection> flag.
   *
   * Parameters:
   *
   * singleSelection - Boolean that specifies the new value for
   * <singleSelection>.
   */
  setSingleSelection(singleSelection: boolean): void;

  /**
   * Function: isSelected
   *
   * Returns true if the given <mxCell> is selected.
   */
  isSelected(cell: mxCell): boolean;

  /**
   * Function: isEmpty
   *
   * Returns true if no cells are currently selected.
   */
  isEmpty(): boolean;

  /**
   * Function: clear
   *
   * Clears the selection and fires a <change> event if the selection was not
   * empty.
   */
  clear(): void;

  /**
   * Function: setCell
   *
   * Selects the specified <mxCell> using <setCells>.
   *
   * Parameters:
   *
   * cell - <mxCell> to be selected.
   */
  setCell(cell: mxCell): void;

  /**
   * Function: setCells
   *
   * Selects the given array of <mxCells> and fires a <change> event.
   *
   * Parameters:
   *
   * cells - Array of <mxCells> to be selected.
   */
  setCells(cells: mxCell[]): void;

  /**
   * Function: getFirstSelectableCell
   *
   * Returns the first selectable cell in the given array of cells.
   */
  getFirstSelectableCell(cells: mxCell[]): mxCell;

  /**
   * Function: addCell
   *
   * Adds the given <mxCell> to the selection and fires a <select> event.
   *
   * Parameters:
   *
   * cell - <mxCell> to add to the selection.
   */
  addCell(cell: mxCell): void;

  /**
   * Function: addCells
   *
   * Adds the given array of <mxCells> to the selection and fires a <select>
   * event.
   *
   * Parameters:
   *
   * cells - Array of <mxCells> to add to the selection.
   */
  addCells(cells: mxCell[]): void;

  /**
   * Function: removeCell
   *
   * Removes the specified <mxCell> from the selection and fires a <select>
   * event for the remaining cells.
   *
   * Parameters:
   *
   * cell - <mxCell> to remove from the selection.
   */
  removeCell(cell: mxCell): void;

  /**
   * Function: removeCells
   */
  removeCells(cells: mxCell[]): void;

  /**
   * Function: changeSelection
   *
   * Inner callback to add the specified <mxCell> to the selection. No event
   * is fired in this implementation.
   *
   * Paramters:
   *
   * cell - <mxCell> to add to the selection.
   */
  changeSelection(added: mxCell[], removed: mxCell[]): void;

  /**
   * Function: cellAdded
   *
   * Inner callback to add the specified <mxCell> to the selection. No event
   * is fired in this implementation.
   *
   * Paramters:
   *
   * cell - <mxCell> to add to the selection.
   */
  cellAdded(cell: mxCell): void;

  /**
   * Function: cellRemoved
   *
   * Inner callback to remove the specified <mxCell> from the selection. No
   * event is fired in this implementation.
   *
   * Parameters:
   *
   * cell - <mxCell> to remove from the selection.
   */
  cellRemoved(cell: mxCell): void;
}

/**
 * Class: mxSelectionChange
 *
 * Action to change the current root in a view.
 *
 * Constructor: mxCurrentRootChange
 *
 * Constructs a change of the current root in the given view.
 */
declare class mxSelectionChange {
  private selectionModel: mxGraphSelectionModel;
  private added: mxCell[];
  private removed: mxCell[];

  constructor(selectionModel: mxGraphSelectionModel, added: mxCell[], removed: mxCell[]);

  /**
   * Function: execute
   *
   * Changes the current root of the view.
   */
  execute(): void;

}
