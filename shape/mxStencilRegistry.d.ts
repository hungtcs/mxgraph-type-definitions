/// <reference path="./mxStencil.d.ts" />

/**
 * A singleton class that provides a registry for stencils and the methods
 * for painting those stencils onto a canvas or into a DOM.
 *
 * @class mxStencilRegistry
 */
declare class mxStencilRegistry {

  static stencils: { [key: string]: mxStencil };

  /**
   * Adds the given <mxStencil>.
   * @static
   * @param {string} name
   * @param {mxStencil} stencil
   */
  static addStencil(name: string, stencil: mxStencil): void;

  /**
   * Returns the <mxStencil> for the given name.
   * @static
   * @param {string} name
   * @returns {mxStencil}
   */
  static getStencil(name: string): mxStencil;

}
