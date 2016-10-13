function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Boil Orders');

      data.addRows([
        ['2011',  17],
        ['2012',  31],
        ['2013',  31],
        ['2014',  14],
        ['2015',  21],
      ]);

      var options = {
        chart: {
          title: 'Number of boil orders in Athens, Ohio'
        },
        width: '100%',
        height: 500,
        legend: { position: 'none' }
      };

      var chart = new google.charts.Line(document.getElementById('linechart_material'));

      chart.draw(data, options);
    }