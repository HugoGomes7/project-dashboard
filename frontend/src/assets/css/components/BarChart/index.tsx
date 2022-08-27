import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
  name: string;
  data: number[];
}

type ChartData = {
  labels: {
    categories: string[];

  };
  series: SeriesData[];
}

function BarChart() {

  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: []
      }
    ]
  })

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/sucess-by-seller`)
      .then(response => {
        const data = response.data as SaleSuccess[];
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1)); // arredondamento

        setChartData({
          labels: {
            categories: myLabels
          },
          series: [
            {
              name: "% Success",
              data: mySeries
            }
          ]
        });
      });
  }, []);


  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  return (
    <Chart // componente do Apex Charts
      options={{ ...options, xaxis: chartData.labels }} // "... pega todos o objeto + outros após a vírgula  
      series={chartData.series} // valores do gráfico                       
      type="bar" // tipo
      height="240" // tamanho
    />
  );
}

export default BarChart;