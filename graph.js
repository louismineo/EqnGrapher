// this is where to manipulate the graph

GRAPH = document.getElementById('graph');
Plotly.newPlot( GRAPH, [{
x: Data.X_axis , //[1, 2, 3, 4, 5]
y: Data.Y_axis }], { //[1, 2, 4, 8, 16]
margin: { t: -2 } } );
