/**
 * This file is an introduction for adding tests to mxgraph-type-definitions
 * A larger infrastructure should be setup for a more robust solution: a file per types, in a dedicated subfolder (test
 * or spec), ...
 */

// a custom shape without explicit constructor, so inherited from parent class: constructor(stencil: mxStencil)
class CustomShape extends mxShape {}

// Validate fix for #24
mxCellRenderer.registerShape("customShape", CustomShape);
mxCellRenderer.registerShape("customShape", mxActor);
