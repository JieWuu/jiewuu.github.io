d3.csv("https://raw.githubusercontent.com/JieWuu/datos_reto10/main/barras1.csv", function(err, rows){

function unpack(rows, key) {
    return rows.map(function(row) { return row[key];});
};

var headerNames = d3.keys(rows[0]);
console.log(headerNames);

    var count = unpack(rows,'product_id').map(x => parseFloat(x));
    var categoria = unpack(rows,'family');

    var data = [{
        type: "bar",
        y: count,
        x: categoria,
        marker: {
          size: 20,
          color:'rgb(8,48,107)'
        },
        name:'tren_superior'
      }];
    var layout = {
      title: 'Cantidad de prendas por categoria',
        showlegend: true,
        xaxis: {
          tickangle: 25,
          tickfont: {
            size: 10,
            color: 'rgb(107, 107, 107)'
          }},
          yaxis: {
  title: {
    text: 'Cantidad',

  }
},
      showlegend:false
        };
var config = {responsive: true}
Plotly.newPlot('barra1', data, layout, config);
});