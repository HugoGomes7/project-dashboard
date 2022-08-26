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
    series: [ // lista que pode ter mais de um conjunto de dados, aqui tem apenas um
      {
        name: "% Sucesso",
        data: [43.6, 67.1, 67.7, 45.6, 71.1]
      }
    ]
  };

  return (
    <Chart // componente do Apex Charts
      options={{ ...options, xaxis: mockData.labels }} // "... pega todos o objeto + outros após a vírgula  
      series={mockData.series} // valores do gráfico                       
      type="bar" // tipo
      height="240" // tamanho
    />
  );
}

export default BarChart;