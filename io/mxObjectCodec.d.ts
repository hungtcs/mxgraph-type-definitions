
declare class mxObjectCodec {

  idrefs: Array<any>;

  constructor(template, exclude?, idrefs?, mapping?);

  encode(enc, obj);
  decode(dec, node, into);

  isNumericAttribute(	dec, attr, obj): boolean;
  isExcluded(	obj,
    attr,
    value,
    write	): boolean;


  getName(): string;

  beforeEncode(enc, obj, node);
  encodeObject(enc: mxCodec, obj: any, node: Node);



}
