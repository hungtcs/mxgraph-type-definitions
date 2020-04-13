/**
 * Sets the horizontal locations of node and edge dummy nodes on each layer.
 * Uses median down and up weighings as well as heuristics to straighten edges as
 * far as possible.
 */
declare class mxCoordinateAssignment extends mxHierarchicalLayoutStage {

  /**
   * Creates a coordinate assignment.
   *
   * @param layout
   * @param intraCellSpacing - the minimum buffer between cells on the same rank
   * @param interRankCellSpacing - the minimum distance between cells on adjacent ranks
   * @param orientation - the position of the root node(s) relative to the graph
   * @param initialX - the leftmost coordinate node placement starts at
   * @param parallelEdgeSpacing
   */
  constructor(layout: mxHierarchicalLayout, intraCellSpacing: number, interRankCellSpacing: number,
                                orientation: string, initialX: number, parallelEdgeSpacing: number);


/**
 * Reference to the enclosing {@link mxHierarchicalLayout}.
 */
layout: mxHierarchicalLayout;

/**
 * The minimum buffer between cells on the same rank.
 * @default 30
 */
intraCellSpacing: number;

/**
 * The minimum distance between cells on adjacent ranks.
 * @default 100
 */
interRankCellSpacing: number;

/**
 * The distance between each parallel edge on each ranks for long edges.
 * @default 10
 */
parallelEdgeSpacing: number;

/**
 * The number of heuristic iterations to run
 * @default 8
 */
maxIterations: number;

/**
 * The preferred horizontal distance between edges exiting a vertex
 * @default 5
 */
prefHozEdgeSep: number;

/**
 * The preferred vertical offset between edges exiting a vertex.
 * @default 2
 */
prefVertEdgeOff: number;

/**
 * The minimum distance for an edge jetty from a vertex
 * @default 12
 */
minEdgeJetty: number;

/**
 * The size of the vertical buffer in the center of inter-rank channels
 * where edge control points should not be placed
 * @default 4
 */
channelBuffer: number;

/**
 * Variable: jettyPositions
 *
 * Map of internal edges and (x,y) pair of positions of the start and end jetty
 * for that edge where it connects to the source and target vertices.
 * Note this should technically be a WeakHashMap, but since JS does not
 * have an equivalent, housekeeping must be performed before using.
 * i.e. check all edges are still in the model and clear the values.
 * Note that the y co-ord is the offset of the jetty, not the
 * absolute point
 */
jettyPositions = null;

/**
 * The position of the root ( start ) node(s) relative to the rest of the
 * laid out graph.
 * @default {@link mxConstants.DIRECTION_NORTH}
 */
orientation: string;

/**
 * The minimum x position node placement starts at
 */
initialX: number;

/**
 * The maximum x value this positioning lays up to
 */
limitX: number;

/**
 * The sum of x-displacements for the current iteration
 */
currentXDelta: number;

/**
 * The rank that has the widest x position
 */
widestRank: number;

/**
 * Internal cache of top-most values of Y for each rank
 */
rankTopY = null;

/**
 * Variable: rankBottomY
 *
 * Internal cache of bottom-most value of Y for each rank
 */
rankBottomY = null;

/**
 * The X-coordinate of the edge of the widest rank
 */
widestRankValue: number;

/**
 * Variable: rankWidths
 *
 * The width of all the ranks
 */
rankWidths = null;

/**
 * Variable: rankY
 *
 * The Y-coordinate of all the ranks
 */
rankY = null;

/**
 * Whether or not to perform local optimisations and iterate multiple times through the algorithm.
 * @default true
 */
fineTuning: number;

/**
 * A store of connections to the layer above for speed
 */
nextLayerConnectedCache = null;

/**
 * A store of connections to the layer below for speed
 */
previousLayerConnectedCache = null;

/**
 * Padding added to resized parents
 * @default 10
 */
groupPadding: number;

/**
 * Utility method to display current positions
 */
printStatus(): void;

/**
 * A basic horizontal coordinate assignment algorithm
 */
execute(parent: mxCell): void;

/**
 * Function: minNode
 *
 * Performs one median positioning sweep in both directions
 */
minNode(model: mxGraphHierarchyModel): void;

/**
 * Performs one median positioning sweep in one direction
 *
 * @param i       the iteration of the whole process
 * @param model   model an internal model of the hierarchical layout
 */
medianPos(i: number, model: mxGraphHierarchyModel): void;

/**
 * Performs median minimisation over one rank.
 *
 * @param rankValue       the layer number of this rank
 * @param model           an internal model of the hierarchical layout
 * @param nextRankValue   the layer number whose connected cels are to be laid out relative to
 */
rankMedianPosition(rankValue: number, model: mxGraphHierarchyModel, nextRankValue: number): void;

/**
 * Calculates the priority the specified cell has based on the type of its
 * cell and the cells it is connected to on the next layer
 *
 * @param currentCell   the cell whose weight is to be calculated
 * @param collection the cells the specified cell is connected to
 */
calculatedWeightedValue(currentCell: mxCell, collection: Array<mxCell>): number;

/**
 * Calculates the median position of the connected cell on the specified rank
 *
 * @param connectedCells    the cells the candidate connects to on this level
 * @param rankValue         the layer number of this rank
 */
medianXValue(connectedCells: Array<mxCell>, rankValue: number): number;

/**
 * Sets up the layout in an initial positioning. The ranks are all centered
 * as much as possible along the middle vertex in each rank. The other cells
 * are then placed as close as possible on either side.
 *
 * @param facade    the facade describing the input graph
 * @param model     an internal model of the hierarchical layout
 */
initialCoords(facade, model: mxGraphHierarchyModel)
{
  this.calculateWidestRank(facade, model);

  // Sweep up and down from the widest rank
  for (var i = this.widestRank; i >= 0; i--)
  {
    if (i < model.maxRank)
    {
      this.rankCoordinates(i, facade, model);
    }
  }

  for (var i = this.widestRank+1; i <= model.maxRank; i++)
  {
    if (i > 0)
    {
      this.rankCoordinates(i, facade, model);
    }
  }
};

/**
 * Function: rankCoordinates
 *
 * Sets up the layout in an initial positioning. All the first cells in each
 * rank are moved to the left and the rest of the rank inserted as close
 * together as their size and buffering permits. This method works on just
 * the specified rank.
 *
 * Parameters:
 *
 * rankValue - the current rank being processed
 * graph - the facade describing the input graph
 * model - an internal model of the hierarchical layout
 */
rankCoordinates(rankValue, graph, model)
{
  var rank = model.ranks[rankValue];
  var maxY = 0.0;
  var localX = this.initialX + (this.widestRankValue - this.rankWidths[rankValue])
    / 2;

  // Store whether or not any of the cells' bounds were unavailable so
  // to only issue the warning once for all cells
  var boundsWarning = false;

  for (var i = 0; i < rank.length; i++)
  {
    var node = rank[i];

    if (node.isVertex())
    {
      var bounds = this.layout.getVertexBounds(node.cell);

      if (bounds != null)
      {
        if (this.orientation == mxConstants.DIRECTION_NORTH ||
          this.orientation == mxConstants.DIRECTION_SOUTH)
        {
          node.width = bounds.width;
          node.height = bounds.height;
        }
        else
        {
          node.width = bounds.height;
          node.height = bounds.width;
        }
      }
      else
      {
        boundsWarning = true;
      }

      maxY = Math.max(maxY, node.height);
    }
    else if (node.isEdge())
    {
      // The width is the number of additional parallel edges
      // time the parallel edge spacing
      var numEdges = 1;

      if (node.edges != null)
      {
        numEdges = node.edges.length;
      }
      else
      {
        mxLog.warn('edge.edges is null');
      }

      node.width = (numEdges - 1) * this.parallelEdgeSpacing;
    }

    // Set the initial x-value as being the best result so far
    localX += node.width / 2.0;
    node.setX(rankValue, localX);
    node.setGeneralPurposeVariable(rankValue, localX);
    localX += node.width / 2.0;
    localX += this.intraCellSpacing;
  }

  if (boundsWarning == true)
  {
    mxLog.warn('At least one cell has no bounds');
  }
};

/**
 * Function: calculateWidestRank
 *
 * Calculates the width rank in the hierarchy. Also set the y value of each
 * rank whilst performing the calculation
 *
 * Parameters:
 *
 * graph - the facade describing the input graph
 * model - an internal model of the hierarchical layout
 */
calculateWidestRank(graph, model)
{
  // Starting y co-ordinate
  var y = -this.interRankCellSpacing;

  // Track the widest cell on the last rank since the y
  // difference depends on it
  var lastRankMaxCellHeight = 0.0;
  this.rankWidths = [];
  this.rankY = [];

  for (var rankValue = model.maxRank; rankValue >= 0; rankValue--)
  {
    // Keep track of the widest cell on this rank
    var maxCellHeight = 0.0;
    var rank = model.ranks[rankValue];
    var localX = this.initialX;

    // Store whether or not any of the cells' bounds were unavailable so
    // to only issue the warning once for all cells
    var boundsWarning = false;

    for (var i = 0; i < rank.length; i++)
    {
      var node = rank[i];

      if (node.isVertex())
      {
        var bounds = this.layout.getVertexBounds(node.cell);

        if (bounds != null)
        {
          if (this.orientation == mxConstants.DIRECTION_NORTH ||
            this.orientation == mxConstants.DIRECTION_SOUTH)
          {
            node.width = bounds.width;
            node.height = bounds.height;
          }
          else
          {
            node.width = bounds.height;
            node.height = bounds.width;
          }
        }
        else
        {
          boundsWarning = true;
        }

        maxCellHeight = Math.max(maxCellHeight, node.height);
      }
      else if (node.isEdge())
      {
        // The width is the number of additional parallel edges
        // time the parallel edge spacing
        var numEdges = 1;

        if (node.edges != null)
        {
          numEdges = node.edges.length;
        }
        else
        {
          mxLog.warn('edge.edges is null');
        }

        node.width = (numEdges - 1) * this.parallelEdgeSpacing;
      }

      // Set the initial x-value as being the best result so far
      localX += node.width / 2.0;
      node.setX(rankValue, localX);
      node.setGeneralPurposeVariable(rankValue, localX);
      localX += node.width / 2.0;
      localX += this.intraCellSpacing;

      if (localX > this.widestRankValue)
      {
        this.widestRankValue = localX;
        this.widestRank = rankValue;
      }

      this.rankWidths[rankValue] = localX;
    }

    if (boundsWarning == true)
    {
      mxLog.warn('At least one cell has no bounds');
    }

    this.rankY[rankValue] = y;
    var distanceToNextRank = maxCellHeight / 2.0
      + lastRankMaxCellHeight / 2.0 + this.interRankCellSpacing;
    lastRankMaxCellHeight = maxCellHeight;

    if (this.orientation == mxConstants.DIRECTION_NORTH ||
      this.orientation == mxConstants.DIRECTION_WEST)
    {
      y += distanceToNextRank;
    }
    else
    {
      y -= distanceToNextRank;
    }

    for (var i = 0; i < rank.length; i++)
    {
      var cell = rank[i];
      cell.setY(rankValue, y);
    }
  }
};

/**
 * Function: minPath
 *
 * Straightens out chains of virtual nodes where possibleacade to those stored after this layout
 * processing step has completed.
 *
 * Parameters:
 *
 * graph - the facade describing the input graph
 * model - an internal model of the hierarchical layout
 */
minPath(graph, model)
{
  // Work down and up each edge with at least 2 control points
  // trying to straighten each one out. If the same number of
  // straight segments are formed in both directions, the
  // preferred direction used is the one where the final
  // control points have the least offset from the connectable
  // region of the terminating vertices
  var edges = model.edgeMapper.getValues();

  for (var j = 0; j < edges.length; j++)
  {
    var cell = edges[j];

    if (cell.maxRank - cell.minRank - 1 < 1)
    {
      continue;
    }

    // At least two virtual nodes in the edge
    // Check first whether the edge is already straight
    var referenceX = cell
      .getGeneralPurposeVariable(cell.minRank + 1);
    var edgeStraight = true;
    var refSegCount = 0;

    for (var i = cell.minRank + 2; i < cell.maxRank; i++)
    {
      var x = cell.getGeneralPurposeVariable(i);

      if (referenceX != x)
      {
        edgeStraight = false;
        referenceX = x;
      }
      else
      {
        refSegCount++;
      }
    }

    if (!edgeStraight)
    {
      var upSegCount = 0;
      var downSegCount = 0;
      var upXPositions = [];
      var downXPositions = [];

      var currentX = cell.getGeneralPurposeVariable(cell.minRank + 1);

      for (var i = cell.minRank + 1; i < cell.maxRank - 1; i++)
      {
        // Attempt to straight out the control point on the
        // next segment up with the current control point.
        var nextX = cell.getX(i + 1);

        if (currentX == nextX)
        {
          upXPositions[i - cell.minRank - 1] = currentX;
          upSegCount++;
        }
        else if (this.repositionValid(model, cell, i + 1, currentX))
        {
          upXPositions[i - cell.minRank - 1] = currentX;
          upSegCount++;
          // Leave currentX at same value
        }
        else
        {
          upXPositions[i - cell.minRank - 1] = nextX;
          currentX = nextX;
        }
      }

      currentX = cell.getX(i);

      for (var i = cell.maxRank - 1; i > cell.minRank + 1; i--)
      {
        // Attempt to straight out the control point on the
        // next segment down with the current control point.
        var nextX = cell.getX(i - 1);

        if (currentX == nextX)
        {
          downXPositions[i - cell.minRank - 2] = currentX;
          downSegCount++;
        }
        else if (this.repositionValid(model, cell, i - 1, currentX))
        {
          downXPositions[i - cell.minRank - 2] = currentX;
          downSegCount++;
          // Leave currentX at same value
        }
        else
        {
          downXPositions[i - cell.minRank - 2] = cell.getX(i-1);
          currentX = nextX;
        }
      }

      if (downSegCount > refSegCount || upSegCount > refSegCount)
      {
        if (downSegCount >= upSegCount)
        {
          // Apply down calculation values
          for (var i = cell.maxRank - 2; i > cell.minRank; i--)
          {
            cell.setX(i, downXPositions[i - cell.minRank - 1]);
          }
        }
        else if (upSegCount > downSegCount)
        {
          // Apply up calculation values
          for (var i = cell.minRank + 2; i < cell.maxRank; i++)
          {
            cell.setX(i, upXPositions[i - cell.minRank - 2]);
          }
        }
        else
        {
          // Neither direction provided a favourable result
          // But both calculations are better than the
          // existing solution, so apply the one with minimal
          // offset to attached vertices at either end.
        }
      }
    }
  }
};

/**
 * Function: repositionValid
 *
 * Determines whether or not a node may be moved to the specified x
 * position on the specified rank
 *
 * Parameters:
 *
 * model - the layout model
 * cell - the cell being analysed
 * rank - the layer of the cell
 * position - the x position being sought
 */
repositionValid(model, cell, rank, position)
{
  var rankArray = model.ranks[rank];
  var rankIndex = -1;

  for (var i = 0; i < rankArray.length; i++)
  {
    if (cell == rankArray[i])
    {
      rankIndex = i;
      break;
    }
  }

  if (rankIndex < 0)
  {
    return false;
  }

  var currentX = cell.getGeneralPurposeVariable(rank);

  if (position < currentX)
  {
    // Trying to move node to the left.
    if (rankIndex == 0)
    {
      // Left-most node, can move anywhere
      return true;
    }

    var leftCell = rankArray[rankIndex - 1];
    var leftLimit = leftCell.getGeneralPurposeVariable(rank);
    leftLimit = leftLimit + leftCell.width / 2
      + this.intraCellSpacing + cell.width / 2;

    if (leftLimit <= position)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  else if (position > currentX)
  {
    // Trying to move node to the right.
    if (rankIndex == rankArray.length - 1)
    {
      // Right-most node, can move anywhere
      return true;
    }

    var rightCell = rankArray[rankIndex + 1];
    var rightLimit = rightCell.getGeneralPurposeVariable(rank);
    rightLimit = rightLimit - rightCell.width / 2
      - this.intraCellSpacing - cell.width / 2;

    if (rightLimit >= position)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  return true;
};

/**
 * Function: setCellLocations
 *
 * Sets the cell locations in the facade to those stored after this layout
 * processing step has completed.
 *
 * Parameters:
 *
 * graph - the input graph
 * model - the layout model
 */
setCellLocations(graph, model)
{
  this.rankTopY = [];
  this.rankBottomY = [];

  for (var i = 0; i < model.ranks.length; i++)
  {
    this.rankTopY[i] = Number.MAX_VALUE;
    this.rankBottomY[i] = -Number.MAX_VALUE;
  }

  var vertices = model.vertexMapper.getValues();

  // Process vertices all first, since they define the lower and
  // limits of each rank. Between these limits lie the channels
  // where the edges can be routed across the graph

  for (var i = 0; i < vertices.length; i++)
  {
    this.setVertexLocation(vertices[i]);
  }

  // Post process edge styles. Needs the vertex locations set for initial
  // values of the top and bottoms of each rank
  if (this.layout.edgeStyle == mxHierarchicalEdgeStyle.ORTHOGONAL
    || this.layout.edgeStyle == mxHierarchicalEdgeStyle.POLYLINE
    || this.layout.edgeStyle == mxHierarchicalEdgeStyle.CURVE)
  {
    this.localEdgeProcessing(model);
  }

  var edges = model.edgeMapper.getValues();

  for (var i = 0; i < edges.length; i++)
  {
    this.setEdgePosition(edges[i]);
  }
};

/**
 * Function: localEdgeProcessing
 *
 * Separates the x position of edges as they connect to vertices
 *
 * Parameters:
 *
 * model - the layout model
 */
localEdgeProcessing(model)
{
  // Iterate through each vertex, look at the edges connected in
  // both directions.
  for (var rankIndex = 0; rankIndex < model.ranks.length; rankIndex++)
  {
    var rank = model.ranks[rankIndex];

    for (var cellIndex = 0; cellIndex < rank.length; cellIndex++)
    {
      var cell = rank[cellIndex];

      if (cell.isVertex())
      {
        var currentCells = cell.getPreviousLayerConnectedCells(rankIndex);

        var currentRank = rankIndex - 1;

        // Two loops, last connected cells, and next
        for (var k = 0; k < 2; k++)
        {
          if (currentRank > -1
            && currentRank < model.ranks.length
            && currentCells != null
            && currentCells.length > 0)
          {
            var sortedCells = [];

            for (var j = 0; j < currentCells.length; j++)
            {
              var sorter = new WeightedCellSorter(
                currentCells[j], currentCells[j].getX(currentRank));
              sortedCells.push(sorter);
            }

            sortedCells.sort(WeightedCellSorter.prototype.compare);

            var leftLimit = cell.x[0] - cell.width / 2;
            var rightLimit = leftLimit + cell.width;

            // Connected edge count starts at 1 to allow for buffer
            // with edge of vertex
            var connectedEdgeCount = 0;
            var connectedEdgeGroupCount = 0;
            var connectedEdges = [];
            // Calculate width requirements for all connected edges
            for (var j = 0; j < sortedCells.length; j++)
            {
              var innerCell = sortedCells[j].cell;
              var connections;

              if (innerCell.isVertex())
              {
                // Get the connecting edge
                if (k == 0)
                {
                  connections = cell.connectsAsSource;

                }
                else
                {
                  connections = cell.connectsAsTarget;
                }

                for (var connIndex = 0; connIndex < connections.length; connIndex++)
                {
                  if (connections[connIndex].source == innerCell
                    || connections[connIndex].target == innerCell)
                  {
                    connectedEdgeCount += connections[connIndex].edges
                      .length;
                    connectedEdgeGroupCount++;

                    connectedEdges.push(connections[connIndex]);
                  }
                }
              }
              else
              {
                connectedEdgeCount += innerCell.edges.length;
                connectedEdgeGroupCount++;
                connectedEdges.push(innerCell);
              }
            }

            var requiredWidth = (connectedEdgeCount + 1)
              * this.prefHozEdgeSep;

            // Add a buffer on the edges of the vertex if the edge count allows
            if (cell.width > requiredWidth
              + (2 * this.prefHozEdgeSep))
            {
              leftLimit += this.prefHozEdgeSep;
              rightLimit -= this.prefHozEdgeSep;
            }

            var availableWidth = rightLimit - leftLimit;
            var edgeSpacing = availableWidth / connectedEdgeCount;

            var currentX = leftLimit + edgeSpacing / 2.0;
            var currentYOffset = this.minEdgeJetty - this.prefVertEdgeOff;
            var maxYOffset = 0;

            for (var j = 0; j < connectedEdges.length; j++)
            {
              var numActualEdges = connectedEdges[j].edges
                .length;
              var pos = this.jettyPositions[connectedEdges[j].ids[0]];

              if (pos == null)
              {
                pos = [];
                this.jettyPositions[connectedEdges[j].ids[0]] = pos;
              }

              if (j < connectedEdgeCount / 2)
              {
                currentYOffset += this.prefVertEdgeOff;
              }
              else if (j > connectedEdgeCount / 2)
              {
                currentYOffset -= this.prefVertEdgeOff;
              }
              // Ignore the case if equals, this means the second of 2
              // jettys with the same y (even number of edges)

              for (var m = 0; m < numActualEdges; m++)
              {
                pos[m * 4 + k * 2] = currentX;
                currentX += edgeSpacing;
                pos[m * 4 + k * 2 + 1] = currentYOffset;
              }

              maxYOffset = Math.max(maxYOffset,
                currentYOffset);
            }
          }

          currentCells = cell.getNextLayerConnectedCells(rankIndex);

          currentRank = rankIndex + 1;
        }
      }
    }
  }
};

/**
 * Function: setEdgePosition
 *
 * Fixes the control points
 */
setEdgePosition(cell)
{
  // For parallel edges we need to seperate out the points a
  // little
  var offsetX = 0;
  // Only set the edge control points once

  if (cell.temp[0] != 101207)
  {
    var maxRank = cell.maxRank;
    var minRank = cell.minRank;

    if (maxRank == minRank)
    {
      maxRank = cell.source.maxRank;
      minRank = cell.target.minRank;
    }

    var parallelEdgeCount = 0;
    var jettys = this.jettyPositions[cell.ids[0]];

    var source = cell.isReversed ? cell.target.cell : cell.source.cell;
    var graph = this.layout.graph;
    var layoutReversed = this.orientation == mxConstants.DIRECTION_EAST
      || this.orientation == mxConstants.DIRECTION_SOUTH;

    for (var i = 0; i < cell.edges.length; i++)
    {
      var realEdge = cell.edges[i];
      var realSource = this.layout.getVisibleTerminal(realEdge, true);

      //List oldPoints = graph.getPoints(realEdge);
      var newPoints = [];

      // Single length reversed edges end up with the jettys in the wrong
      // places. Since single length edges only have jettys, not segment
      // control points, we just say the edge isn't reversed in this section
      var reversed = cell.isReversed;

      if (realSource != source)
      {
        // The real edges include all core model edges and these can go
        // in both directions. If the source of the hierarchical model edge
        // isn't the source of the specific real edge in this iteration
        // treat if as reversed
        reversed = !reversed;
      }

      // First jetty of edge
      if (jettys != null)
      {
        var arrayOffset = reversed ? 2 : 0;
        var y = reversed ?
          (layoutReversed ? this.rankBottomY[minRank] : this.rankTopY[minRank]) :
          (layoutReversed ? this.rankTopY[maxRank] : this.rankBottomY[maxRank]);
        var jetty = jettys[parallelEdgeCount * 4 + 1 + arrayOffset];

        if (reversed != layoutReversed)
        {
          jetty = -jetty;
        }

        y += jetty;
        var x = jettys[parallelEdgeCount * 4 + arrayOffset];

        var modelSource = graph.model.getTerminal(realEdge, true);

        if (this.layout.isPort(modelSource) && graph.model.getParent(modelSource) == realSource)
        {
          var state = graph.view.getState(modelSource);

          if (state != null)
          {
            x = state.x;
          }
          else
          {
            x = realSource.geometry.x + cell.source.width * modelSource.geometry.x;
          }
        }

        if (this.orientation == mxConstants.DIRECTION_NORTH
          || this.orientation == mxConstants.DIRECTION_SOUTH)
        {
          newPoints.push(new mxPoint(x, y));

          if (this.layout.edgeStyle == mxHierarchicalEdgeStyle.CURVE)
          {
            newPoints.push(new mxPoint(x, y + jetty));
          }
        }
        else
        {
          newPoints.push(new mxPoint(y, x));

          if (this.layout.edgeStyle == mxHierarchicalEdgeStyle.CURVE)
          {
            newPoints.push(new mxPoint(y + jetty, x));
          }
        }
      }

      // Declare variables to define loop through edge points and
      // change direction if edge is reversed

      var loopStart = cell.x.length - 1;
      var loopLimit = -1;
      var loopDelta = -1;
      var currentRank = cell.maxRank - 1;

      if (reversed)
      {
        loopStart = 0;
        loopLimit = cell.x.length;
        loopDelta = 1;
        currentRank = cell.minRank + 1;
      }
      // Reversed edges need the points inserted in
      // reverse order
      for (var j = loopStart; (cell.maxRank != cell.minRank) && j != loopLimit; j += loopDelta)
      {
        // The horizontal position in a vertical layout
        var positionX = cell.x[j] + offsetX;

        // Work out the vertical positions in a vertical layout
        // in the edge buffer channels above and below this rank
        var topChannelY = (this.rankTopY[currentRank] + this.rankBottomY[currentRank + 1]) / 2.0;
        var bottomChannelY = (this.rankTopY[currentRank - 1] + this.rankBottomY[currentRank]) / 2.0;

        if (reversed)
        {
          var tmp = topChannelY;
          topChannelY = bottomChannelY;
          bottomChannelY = tmp;
        }

        if (this.orientation == mxConstants.DIRECTION_NORTH ||
          this.orientation == mxConstants.DIRECTION_SOUTH)
        {
          newPoints.push(new mxPoint(positionX, topChannelY));
          newPoints.push(new mxPoint(positionX, bottomChannelY));
        }
        else
        {
          newPoints.push(new mxPoint(topChannelY, positionX));
          newPoints.push(new mxPoint(bottomChannelY, positionX));
        }

        this.limitX = Math.max(this.limitX, positionX);
        currentRank += loopDelta;
      }

      // Second jetty of edge
      if (jettys != null)
      {
        var arrayOffset = reversed ? 2 : 0;
        var rankY = reversed ?
          (layoutReversed ? this.rankTopY[maxRank] : this.rankBottomY[maxRank]) :
          (layoutReversed ? this.rankBottomY[minRank] : this.rankTopY[minRank]);
        var jetty = jettys[parallelEdgeCount * 4 + 3 - arrayOffset];

        if (reversed != layoutReversed)
        {
          jetty = -jetty;
        }
        var y = rankY - jetty;
        var x = jettys[parallelEdgeCount * 4 + 2 - arrayOffset];

        var modelTarget = graph.model.getTerminal(realEdge, false);
        var realTarget = this.layout.getVisibleTerminal(realEdge, false);

        if (this.layout.isPort(modelTarget) && graph.model.getParent(modelTarget) == realTarget)
        {
          var state = graph.view.getState(modelTarget);

          if (state != null)
          {
            x = state.x;
          }
          else
          {
            x = realTarget.geometry.x + cell.target.width * modelTarget.geometry.x;
          }
        }

        if (this.orientation == mxConstants.DIRECTION_NORTH ||
          this.orientation == mxConstants.DIRECTION_SOUTH)
        {
          if (this.layout.edgeStyle == mxHierarchicalEdgeStyle.CURVE)
          {
            newPoints.push(new mxPoint(x, y - jetty));
          }

          newPoints.push(new mxPoint(x, y));
        }
        else
        {
          if (this.layout.edgeStyle == mxHierarchicalEdgeStyle.CURVE)
          {
            newPoints.push(new mxPoint(y - jetty, x));
          }

          newPoints.push(new mxPoint(y, x));
        }
      }

      if (cell.isReversed)
      {
        this.processReversedEdge(cell, realEdge);
      }

      this.layout.setEdgePoints(realEdge, newPoints);

      // Increase offset so next edge is drawn next to
      // this one
      if (offsetX == 0.0)
      {
        offsetX = this.parallelEdgeSpacing;
      }
      else if (offsetX > 0)
      {
        offsetX = -offsetX;
      }
      else
      {
        offsetX = -offsetX + this.parallelEdgeSpacing;
      }

      parallelEdgeCount++;
    }

    cell.temp[0] = 101207;
  }
};


/**
 * Function: setVertexLocation
 *
 * Fixes the position of the specified vertex.
 *
 * Parameters:
 *
 * cell - the vertex to position
 */
setVertexLocation(cell)
{
  var realCell = cell.cell;
  var positionX = cell.x[0] - cell.width / 2;
  var positionY = cell.y[0] - cell.height / 2;

  this.rankTopY[cell.minRank] = Math.min(this.rankTopY[cell.minRank], positionY);
  this.rankBottomY[cell.minRank] = Math.max(this.rankBottomY[cell.minRank],
    positionY + cell.height);

  if (this.orientation == mxConstants.DIRECTION_NORTH ||
    this.orientation == mxConstants.DIRECTION_SOUTH)
  {
    this.layout.setVertexLocation(realCell, positionX, positionY);
  }
  else
  {
    this.layout.setVertexLocation(realCell, positionY, positionX);
  }

  this.limitX = Math.max(this.limitX, positionX + cell.width);
};

/**
 * Hook to add additional processing
 */
processReversedEdge(graph: mxGraph, model: mxGraphModel): void;
}
