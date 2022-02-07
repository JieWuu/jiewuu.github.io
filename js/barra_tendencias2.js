d3.csv("https://raw.githubusercontent.com/SendoaBusquet/tendencias_Reto10/main/aceptacion.csv", function(err, rows){

function unpack(rows, key) {
    return rows.map(function(row) { return row[key];});
};

var headerNames = d3.keys(rows[0]);
console.log(headerNames);

    var aceptacion = unpack(rows,'aceptación').map(x => parseFloat(x));
    var title = unpack(rows,'title');
    var categoria = unpack(rows,'categoria');

    var data = [{
        type: "bar",
        y: aceptacion,
        x: title,
        marker: {
          size: 20,
          color:['rgb(8,48,107)', 'rgb(8,48,107)', 'rgb(86,145,193)', 
          'rgb(86,145,193)', 'rgb(8,48,107)', 'rgb(86,145,193)', 
          'rgb(8,48,107)', 'rgb(8,48,107)', 'rgb(8,48,107)', 
          'rgb(8,48,107)']
        },
        name:'tren_superior'
      }];
    var layout = {
      title: '10 prendas con mayor aceptación',
        showlegend: true,
        xaxis: {
          tickangle: 25,
          tickfont: {
            size: 10,
            color: 'rgb(107, 107, 107)'
          }},
          yaxis: {
  title: {
    text: 'Aceptación',

  }
},
      showlegend:false
        };
var config = {responsive: true}
Plotly.newPlot('barrasa', data, layout, config);
});