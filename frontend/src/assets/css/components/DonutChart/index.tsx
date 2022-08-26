import Chart from 'react-apexcharts';

function DonutChart() {

  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Vendedor 1', 'Vendedor 2', 'Vendedor 3', 'Vendedor 4', 'Vendedor 5']
  }

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <Chart // componente do Apex Charts
      options={{ ...options, labels: mockData.labels }} // "... pega todos o objeto + outros após a vírgula  
      series={mockData.series} // valores do gráfico  
      type="donut" //tipo
      height="240" // tamanho
    />
  );
}

export default DonutChart;