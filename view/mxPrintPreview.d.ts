
declare class mxPrintPreview {

  /**
   * Constructs a new print preview for the given parameters.
   * @author 鸿则 <hungtcs@163.com>
   * @date 2019-12-27
   * @param {mxGraph} graph                   mxGraph to be previewed.
   * @param {number} [scale]                  Optional scale of the output.  Default is 1 / mxGraph.pageScale.
   * @param {mxRectangle} [pageFormat]        mxRectangle that specifies the page format (in pixels).
   * @param {mxRectangle} [border]            Border in pixels along each side of every page.
   *                                          Note that the actual print function in the browser will add another border for printing.
   *                                          This should match the page format of the printer.
   *                                          Default uses the mxGraph.pageFormat of the given graph.
   * @param {number} [x0]                     Optional left offset of the output.  Default is 0.
   * @param {number} [y0]                     Optional top offset of the output.  Default is 0.
   * @param {string} [borderColor]            Optional color of the page border.  Default is no border.  Note that a border is sometimes useful to highlight the printed page border in the print preview of the browser.
   * @param {string} [title]                  Optional string that is used for the window title.  Default is ‘Printer-friendly version’.
   * @param {boolean} [pageSelector]          Optional boolean that specifies if the page selector should appear in the window with the print preview.  Default is true.
   */
  constructor(
    graph: mxGraph,
    scale?: number,
    pageFormat?: mxRectangle,
    border?: mxRectangle,
    x0?: number,
    y0?: number,
    borderColor?: string,
    title?: string,
    pageSelector?: boolean,
  );

  /**
   *  Shows the print preview window.  The window is created here if it does not exist.
   *
   * @author 鸿则 <hungtcs@163.com>
   * @date 2019-12-27
   * @param {string} [css]                Optional CSS string to be used in the head section.
   * @param {Window} [targetWindow]       Optional window that should be used for rendering.  If this is specified then no HEAD tag, CSS and BODY tag will be written.
   * @param {boolean} [forcePageBreaks]
   * @param {boolean} [keepOpen]
   */
  open(css?: string, targetWindow?: Window, forcePageBreaks?: boolean, keepOpen?: boolean): void;

}
