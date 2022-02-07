d3.csv("https://raw.githubusercontent.com/SendoaBusquet/tendencias_Reto10/main/BestSeller_categoria.csv", function(err, rows){

  function unpack(rows, key) {
      return rows.map(function(row) { return row[key];});
  };
  var headerNames = d3.keys(rows[0]);
  console.log(headerNames);

      var ventas = unpack(rows,'ventas').map(x => parseInt(x));
      var title = unpack(rows,'title');
      var categoria = unpack(rows,'categoria');

      var data = [{
          type: "bar",
          y: ventas,
          x: title,
          marker: {
            size: 20,
            color:['rgb(8,48,107)','rgb(86,145,193)', 'rgb(170,184,199)']
          },
          name:'tren_superior'
        }];
      var layout = {
        title: 'Best seller por categoría',
          showlegend: true,
          xaxis: {
            tickfont: {
              size: 14,
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
  Plotly.newPlot('barrasb', data, layout, config);
  });
