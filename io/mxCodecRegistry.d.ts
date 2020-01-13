
declare class mxCodecRegistry {
  /**
   Maps from constructor names to codecs.
  */
  static codecs: Array<any>;

  /**
   Maps from classnames to codecnames.
  */
  aliases: Array<any>;

  /**
   Registers a new codec and associates the name of the template constructor in the codec with the codec object.
  */
  static register(codec);

  /**
   Adds an alias for mapping a classname to a codecname.
  */
  static addAlias(classname, codecname);

  /**
   Returns a codec that handles objects that are constructed using the given constructor.
  */
  static getCodec(ctor);

}
