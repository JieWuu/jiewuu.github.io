var trace1 = {
    x: ['Season 7', 'Season 8', 'Season 9'],
    y: [6029, 2855, 4784],
    name: 'Cold',
    type: 'bar',
    marker:
    {
        color:'rgb(8,48,107)'
    }
  };
  
  var trace2 = {
    x: ['Season 7', 'Season 8', 'Season 9'],
    y: [1683, 5546, 2655],
    name: 'Warm',
    type: 'bar',
    marker:
    {
        color:'#DB2929'
    }
  };
  

  var data = [trace1, trace2];
  var layout = {barmode: 'stack',title: 'Cantidad de prendas por temporada y temperatura',yaxis: {
    title: {
      text: 'Cantidad',
  
    }
  }
                    };
  var config = {responsive: true}
  Plotly.newPlot('barra2', data, layout,config);