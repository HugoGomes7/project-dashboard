import Chart from 'react-apexcharts'

function BarChart() {
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  const mockData = { //Dados estáticos
    labels: {
      categories: ['Vendedor 1', 'Vendedor 2', 'Vendedor 3', 'Vendedor 4', 'Vendedor 5']
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.6, 67.1, 67.7, 45.6, 71.1]
      }
    ]
  };

  return (
    <Chart
      options={{ ...options, xaxis: mockData.labels }}
      series={mockData.series}
      type="bar"
      height="240"
    />
  );
}

export default BarChart;