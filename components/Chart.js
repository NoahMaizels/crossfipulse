import ChartJS from 'chart.js'
import { Line } from 'react-chartjs-2'

const Chart = () => {
  

  const data = {

    labels: ['Jan 20', 'Feb 20', 'Mar 20', 'Apr 20', 'May 20', 'Jun 20'],
    datasets: [{
      label: 'Locked (USD)',

      data: [1, 3, 5, 6, 10, 11],
      backgroundColor: [
        'rgba(217,83,79, 0.1)',
      ],
      borderColor: [
        'rgba(217,83,79,1)',

      ],

      borderWidth: 5
    }]
  }
  const options = {

    legend: {
      display: false,
      labels: {
        fontColor: 'orange'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#dee5ed',
          beginAtZero: true,
          callback: function (value, index, values) {
            return '$' + value + 'M';
          }
        }

      }],
      xAxes: [{
        ticks: {
          fontColor: '#dee5ed',

        }
      }]
    }
  }

  // const ctx = 'myChart'
  // const myChart = new Chart(ctx, {
  //   type: 'line',

    
  // });

  return <Line data={data} options={options}/>
}



export default Chart