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

// =====================================================================================================================
// shape properties not documented in the JS API
// =====================================================================================================================
function htmlElement(elementId: string):HTMLElement {
  const element = document.getElementById(elementId);
  if (element == null) {
    throw new Error('Null html element');
  }
  return element;
}

const myShape = new mxShape(new mxStencil(htmlElement('container')));
myShape.fill = 'orange';
myShape.gradient = 'green';
myShape.gradientDirection = mxConstants.DIRECTION_NORTH;
myShape.opacity = 60;
myShape.fillOpacity = 100;
myShape.strokeOpacity = 80;
myShape.stroke = 'red';
myShape.strokewidth = 4;
myShape.isShadow = true;
myShape.isDashed = true;
myShape.spacing = 4;
myShape.startSize = 8;
myShape.endSize = 8;
myShape.isRounded = true;
myShape.startArrow = mxConstants.ARROW_BLOCK_THIN;
myShape.endArrow = mxConstants.ARROW_OPEN;
myShape.rotation = 75;
myShape.direction = mxConstants.DIRECTION_WEST;
myShape.glass = true;
myShape.flipH = false;
myShape.flipV = true;

myShape.constraints = [new mxConnectionConstraint()];


// =====================================================================================================================
// check inherited properties (previously directly defined in the class in mxgraph-type-definitions@1.0.3)
// =====================================================================================================================
const rectangleShape = new mxRectangleShape(new mxRectangle(0, 10, 100,40), 'black', 'orange');
rectangleShape.fill = 'yellow';
rectangleShape.stroke = 'black';
rectangleShape.strokewidth = 3;
rectangleShape.bounds = new mxRectangle(10, 10, 100,40);
