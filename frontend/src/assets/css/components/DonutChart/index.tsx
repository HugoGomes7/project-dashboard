import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
  labels: string[];
  series: number[];
}

function DonutChart() {

  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
      .then(response => {
        const data = response.data as SaleSum[]; //casting
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => x.sum);

        setChartData({ labels: myLabels, series: mySeries });
      });
  }, []);

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