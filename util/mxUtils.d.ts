declare class mxUtils {

  static mod(n: number, m: number): number;

  /**
   * Returns the value for the given key in the given associative array or the given default value if the value is null.
   * @param array           Associative array that contains the value for the key.
   * @param key             Key whose value should be returned.
   * @param defaultValue    Value to be returned if the value for the given key is null.
   */
  static getValue(array: any, key: any, defaultValue: any): any;

  /**
   * Returns true if the specified point (x, y) is contained in the given rectangle.
   * @param bounds  mxRectangle that represents the area
   * @param x       X-coordinate of the point.
   * @param y       Y-coordinate of the point.
   */
  static contains(bounds: mxRectangle, x: number, y: number): boolean;

  /**
   * Returns a wrapper function that locks the execution scope of the given function to the specified scope.  Inside funct, the “this” keyword becomes a reference to that scope.
   * @param scope
   * @param func
   */
  static bind(scope: any, func: Function): Function;

  /**
   * Converts the specified point (x, y) using the offset of the specified container and returns a new mxPoint with the result.
   * @param container DOM node to use for the offset.
   * @param x         X-coordinate of the point to be converted.
   * @param y         Y-coordinate of the point to be converted.
   */
  static convertPoint(container: HTMLElement, x: number, y: number): mxPoint;

  /**
   * Sets the opacity of the specified DOM node to the given value in %.
   * @param node    DOM node to set the opacity for.
   * @param value   Opacity in %.  Possible values are between 0 and 100.
   */
  static setOpacity(node: HTMLElement, value: number): void;

  /**
   * Loads the specified URL asynchronously and invokes the given functions depending on the request status.
   * Returns the mxXmlRequest in use.
   * Both functions take the mxXmlRequest as the only parameter.
   * See mxUtils.load for a synchronous implementation.
   */
  static get(url: string,
    onload?: (req: mxXmlRequest) => void,
    onerror?: (req: mxXmlRequest) => void,
    binary?: boolean,
    timeout?: number,
    ontimeout?: (req: mxXmlRequest) => void): void;

  /**
   * Loads the specified URL synchronously and returns the mxXmlRequest.
   * Throws an exception if the file cannot be loaded.
   * See mxUtils.get for an asynchronous implementation.
   * @param url URL to get the data from.
   */
  static load(url: string): mxXmlRequest;

  /**
   * Loads the URLs in the given array asynchronously and invokes the given function if all requests returned with a valid 2xx status.
   * The error handler is invoked once on the first error or invalid response.
   */
  static getAll(urls: Array<string>, onload: (req: mxXmlRequest) => void, onerror: (err: mxXmlRequest) => void): void;
}
