declare class mxConnectionConstraint {

  constructor(point: mxPoint, perimeter: boolean, name?: string);

  /**
   * Variable: point
   *
   * <mxPoint> that specifies the fixed location of the connection point.
   */
  point: mxPoint;

  /**
   * Variable: perimeter
   *
   * Boolean that specifies if the point should be projected onto the perimeter
   * of the terminal.
   */
  perimeter: boolean;

  /**
   * Variable: name
   *
   * Optional string that specifies the name of the constraint.
   */
  name: string;
}
