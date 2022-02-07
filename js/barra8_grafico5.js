var trace1 = {
    x: ['jeans',
    'sweater',
    'pant',
    'shirt',
    't-shirt',
    'top',
    'cardigan',
    'jacket',
    'skirt',
    'scarf',
    'dress',
    'parka',
    'bag',
    'coat',
    'sweatshirt',
    'jumpsuit',
    'shorts',
    'trench'],
    y: [607244,
        466516,
        375935,
        358684,
        283642,
        283475,
        263289,
        261678,
        254245,
        202699,
        179394,
        118865,
        55850,
        41424,
        20636,
        20526,
        2772,
        594],
    name: 'Ventas',
    type: 'bar',
    marker:
    {
        color:'#519259'
    }
  };
  
  var trace2 = {
    x: ['jeans',
    'sweater',
    'pant',
    'shirt',
    't-shirt',
    'top',
    'cardigan',
    'jacket',
    'skirt',
    'scarf',
    'dress',
    'parka',
    'bag',
    'coat',
    'sweatshirt',
    'jumpsuit',
    'shorts',
    'trench'],
    y: [729218,
        634309,
        568313,
        507352,
        418962,
        399196,
        360099,
        434056,
        411095,
        283527,
        330359,
        215362,
        133058,
        88725,
        31364,
        43081,
        4464,
        1166],
    name: 'Devoluciones',
    type: 'bar',
    marker:
    {
        color:'#FF6962'
    }
  };
  

  var data = [trace1, trace2];
  var layout = {barmode: 'stack',title: 'Total de ventas y devoluciones por cada tipo de producto de la Season 8',yaxis: {
    xaxis: {
        tickangle: 25,
        tickfont: {
          size: 10,
          color: 'rgb(107, 107, 107)'
        }},
    
    title: {
      text: 'Cantidad',
  
    }
  }
                    };
  var config = {responsive: true}
  Plotly.newPlot('barra85', data, layout,config);