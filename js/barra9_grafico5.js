var trace1 = {
    x: ['top',
    'jeans',
    'pant',
    'sweater',
    'shirt',
    'jacket',
    'cardigan',
    't-shirt',
    'skirt',
    'dress',
    'shorts',
    'scarf',
    'bag',
    'jumpsuit',
    'parka',
    'coat',
    'sweatshirt',
    'trench'],
    y: [437774,
        384411,
        373567,
        319605,
        316610,
        312736,
        260211,
        232802,
        232070,
        141712,
        130169,
        88177,
        84902,
        70708,
        49318,
        26506,
        25058,
        24132],
    name: 'Ventas',
    type: 'bar',
    marker:
    {
        color:'#519259'
    }
  };
  
  var trace2 = {
    x: ['top',
    'jeans',
    'pant',
    'sweater',
    'shirt',
    'jacket',
    'cardigan',
    't-shirt',
    'skirt',
    'dress',
    'shorts',
    'scarf',
    'bag',
    'jumpsuit',
    'parka',
    'coat',
    'sweatshirt',
    'trench'],
    y: [462931,
        391028,
        471178,
        336986,
        376262,
        418902,
        271223,
        265648,
        322244,
        209360,
        147187,
        100574,
        131534,
        89333,
        55548,
        36283,
        31550,
        42640],
    name: 'Devoluciones',
    type: 'bar',
    marker:
    {
        color:'#FF6962'
    }
  };
  

  var data = [trace1, trace2];
  var layout = {barmode: 'stack',title: 'Total de ventas y devoluciones por cada tipo de producto de la Season 9',yaxis: {
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
  Plotly.newPlot('barra95', data, layout,config);