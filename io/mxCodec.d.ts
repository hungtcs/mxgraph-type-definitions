
/**
 * XML codec for JavaScript object graphs.
 * See mxObjectCodec for a description of the general encoding/decoding scheme.
 * This class uses the codecs registered in mxCodecRegistry for encoding/decoding each object.
 */
declare class mxCodec {

  document: XMLDocument;

  /**
   * Constructs an XML encoder/decoder for the specified owner document.
   */
  constructor(document?: XMLDocument);

  updateElements();

  /**
   * Decodes the given XML node.  The optional “into” argument specifies an existing object to be used.
   * If no object is given, then a new instance is created using the constructor from the codec.
   * The function returns the passed in object or the new instance if no object was given.
   * @param node XML node to be decoded.
   * @param into Optional object to be decodec into.
   */
  decode(node: Element, into?: any): void;

  /**
   * Encodes the specified object and returns the resulting XML node.
   *
   * @author 鸿则 <hungtcs@163.com>
   * @date 2019-12-27
   * @param {mxGraphModel} obj    Object to be encoded.
   */
  encode(obj: any): XMLDocument;

  getObject(id: any): any;

}
