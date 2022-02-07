var trace1 = {
    x: ['jeans',
    'pant',
    'top',
    't-shirt',
    'skirt',
    'shirt',
    'dress',
    'sweater',
    'jacket',
    'cardigan',
    'shorts',
    'scarf',
    'jumpsuit',
    'bag',
    'parka',
    'sweatshirt',
    'trench',
    'coat'],
    y: [518826,
        427150,
        382144,
        281538,
        252608,
        237888,
        222581,
        211686,
        205679,
        143866,
        140452,
        131939,
        99026,
        84833,
        40612,
        31328,
        9988,
        1848],
    name: 'Ventas',
    type: 'bar',
    marker:
    {
        color:'#519259'
    }
  };
  
  var trace2 = {
    x: ['jeans',
    'pant',
    'top',
    't-shirt',
    'skirt',
    'shirt',
    'dress',
    'sweater',
    'jacket',
    'cardigan',
    'shorts',
    'scarf',
    'jumpsuit',
    'bag',
    'parka',
    'sweatshirt',
    'trench',
    'coat'],
    y: [768300,
        721213,
        550426,
        450738,
        489400,
        394692,
        464797,
        355152,
        387142,
        248637,
        206851,
        225481,
        164828,
        199073,
        74251,
        72688,
        31360,
        2552],
    name: 'Devoluciones',
    type: 'bar',
    marker:
    {
        color:'#FF6962'
    }
  };
  

  var data = [trace1, trace2];
  var layout = {barmode: 'stack',title: 'Total de ventas y devoluciones por cada tipo de producto de la Season 7',
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
  }
                    };
  var config = {responsive: true}
  Plotly.newPlot('barra75', data, layout,config);