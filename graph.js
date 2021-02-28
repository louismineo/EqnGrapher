//import { Data } from 'attempt2.js'

GRAPH = document.getElementById('graph');
Plotly.newPlot( GRAPH, [{
x: Data.x_axis , //[1, 2, 3, 4, 5]
y: Data.y_axis }], { //[1, 2, 4, 8, 16]
margin: { t: -2 } } );