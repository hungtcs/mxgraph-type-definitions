
declare class mxMultiplicity {
  constructor(
    source: boolean,
    type: string,
    attr: string,
    value: string,
    min: number,
    max: number,
    validNeighbors: string[],
    countError: string,
    typeError: string,
    validNeighborsAllowed: boolean
  );

  /**
   * Variable: type
   *
   * Defines the type of the source or target terminal. The type is a string
   * passed to <mxUtils.isNode> together with the source or target vertex
   * value as the first argument.
   */
  type: string;

  /**
   * Variable: attr
   *
   * Optional string that specifies the attributename to be passed to
   * <mxUtils.isNode> to check if the rule applies to a cell.
   */
  attr: string;

  /**
   * Variable: value
   *
   * Optional string that specifies the value of the attribute to be passed
   * to <mxUtils.isNode> to check if the rule applies to a cell.
   */
  value: string;

  /**
   * Variable: source
   *
   * Boolean that specifies if the rule is applied to the source or target
   * terminal of an edge.
   */
  source: string;

  /**
   * Variable: min
   *
   * Defines the minimum number of connections for which this rule applies.
   * Default is 0.
   */
  min: number;

  /**
   * Variable: max
   *
   * Defines the maximum number of connections for which this rule applies.
   * A value of 'n' means unlimited times. Default is 'n'.
   */
  max: number | 'n';

  /**
   * Variable: validNeighbors
   *
   * Holds an array of strings that specify the type of neighbor for which
   * this rule applies. The strings are used in <mxCell.is> on the opposite
   * terminal to check if the rule applies to the connection.
   */
  validNeighbors: string[];

  /**
   * Variable: validNeighborsAllowed
   *
   * Boolean indicating if the list of validNeighbors are those that are allowed
   * for this rule or those that are not allowed for this rule.
   */
  validNeighborsAllowed: boolean;

  /**
   * Variable: countError
   *
   * Holds the localized error message to be displayed if the number of
   * connections for which the rule applies is smaller than <min> or greater
   * than <max>.
   */
  countError: string;

  /**
   * Variable: typeError
   *
   * Holds the localized error message to be displayed if the type of the
   * neighbor for a connection does not match the rule.
   */
  typeError: string;

  /**
   * Function: check
   *
   * Checks the multiplicity for the given arguments and returns the error
   * for the given connection or null if the multiplicity does not apply.
   *
   * Parameters:
   *
   * graph - Reference to the enclosing <mxGraph> instance.
   * edge - <mxCell> that represents the edge to validate.
   * source - <mxCell> that represents the source terminal.
   * target - <mxCell> that represents the target terminal.
   * sourceOut - Number of outgoing edges from the source terminal.
   * targetIn - Number of incoming edges for the target terminal.
   */
  check(graph: mxGraph, edge: mxCell, source: mxCell, target: mxCell, sourceOut: number, targetIn: number): string[];

  /**
   * Function: checkNeighbors
   *
   * Checks if there are any valid neighbours in <validNeighbors>. This is only
   * called if <validNeighbors> is a non-empty array.
   */
  checkNeighbors(graph: mxGraph, edge: mxCell, source: mxCell, target: mxCell): boolean;

  /**
   * Function: checkTerminal
   *
   * Checks the given terminal cell and returns true if this rule applies. The
   * given cell is the source or target of the given edge, depending on
   * <source>. This implementation uses <checkType> on the terminal's value.
   */
  checkTerminal(graph: mxGraph, terminal: mxCell, edge: mxCell): boolean;

  /**
   * Function: checkType
   *
   * Checks the type of the given value.
   */
  checkType(graph: mxGraph, value: mxCell, type: string, attr: string, attrValue: string): boolean;
}
