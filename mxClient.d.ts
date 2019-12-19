
declare class mxClient {
  /** Contains the current version of the mxGraph library.*/
  static VERSION: string
  /** True if the current browser is Internet Explorer 10 or below.*/
  static IS_IE: boolean
  /** True if the current browser is Internet Explorer 6.x.*/
  static IS_IE6: boolean
  /** True if the current browser is Internet Explorer 11.x.*/
  static IS_IE11: boolean
  /** True if the current browser is Microsoft Edge.*/
  static IS_EDGE: boolean
  /** True if the current browser is Internet Explorer and it is in quirks mode.*/
  static IS_QUIRKS: boolean
  /** True if the browser is IE11 in enterprise mode (IE8 standards mode).*/
  static IS_EM: boolean
  /** Prefix for VML namespace in node names.*/
  static VML_PREFIX: string
  /** Prefix for VML office namespace in node names.*/
  static OFFICE_PREFIX: string
  /** True if the current browser is Netscape (including Firefox).*/
  static IS_NS: boolean
  /** True if the current browser is Opera.*/
  static IS_OP: boolean
  /** True if -o-transform is available as a CSS style, ie for Opera browsers based on a Presto engine with version 2.5 or later.*/
  static IS_OT: boolean
  /** True if the current browser is Safari.*/
  static IS_SF: boolean
  /** Returns true if the user agent is an iPad, iPhone or iPod.*/
  static IS_IOS: boolean
  /** True if the current browser is Google Chrome.*/
  static IS_GC: boolean
  /** True if the this is running inside a Chrome App.*/
  static IS_CHROMEAPP: boolean
  /** True if the current browser is Firefox.*/
  static IS_FF: boolean
  /** True if -moz-transform is available as a CSS style.*/
  static IS_MT: boolean
  /** True if the browser supports VML.*/
  static IS_VML: boolean
  /** True if the browser supports SVG.*/
  static IS_SVG: boolean
  /** True if foreignObject support is not available.*/
  static NO_FO: boolean
  /** True if the client is a Windows.*/
  static IS_WIN: boolean
  /** True if the client is a Mac.*/
  static IS_MAC: boolean
  /** True if the client is a Chrome OS.*/
  static IS_CHROMEOS: boolean
  /** True if this device supports touchstart/-move/-end events (Apple iOS, Android, Chromebook and Chrome Browser on touch-enabled devices).*/
  static IS_TOUCH: boolean
  /** True if this device supports Microsoft pointer events (always false on Macs).*/
  static IS_POINTER: boolean
  /** True if the documents location does not start with http:// or https://.*/
  static IS_LOCAL: boolean

}
