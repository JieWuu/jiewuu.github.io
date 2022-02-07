var trace1 = {
    x: ['smooth',
    'floral',
    'horizontal_stripes',
    'vertical_stripes',
    'animal_print',
    'miniprint',
    'printed',
    'sheets',
    'polka_dot',
    'checked'],
    y: [16769, 1509, 1297, 713, 576, 527, 280, 261, 214, 211],
    name: 'Cold',
    type: 'bar',
    marker:
    {
        color:'rgb(8,48,107)'
    }
  };
  var data = [trace1];
  var layout = {title: 'Cantidad de estampados(con smooth)',yaxis: {
    title: {
      text: 'Cantidad',
  
    }
  }
                    };
  var config = {responsive: true}
  Plotly.newPlot('barra3', data, layout,config);