import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
  labels: string[];
  series: number[];
}

function DonutChart() {
  //objeto instanciado 
  let chartData: ChartData = { labels: [], series: [] };

  axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then(response => {
      const data = response.data as SaleSum[]; //casting
      const myLabels = data.map(x => x.sellerName);
      const mySeries = data.map(x => x.sum);

      chartData = { labels: myLabels, series: mySeries };
      console.log(chartData);
    });



  // const mockData = { // dados estáticos
  //  series: [477138, 499928, 444867, 220426, 473088],
  // labels: ['Vendedor 1', 'Vendedor 2', 'Vendedor 3', 'Vendedor 4', 'Vendedor 5']
  //}

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <Chart // componente do Apex Charts
      options={{ ...options, labels: chartData.labels }} // "... pega todos o objeto + outros após a vírgula  
      series={chartData.series} // valores do gráfico  
      type="donut" //tipo
      height="240" // tamanho
    />
  );
}

export default DonutChart;