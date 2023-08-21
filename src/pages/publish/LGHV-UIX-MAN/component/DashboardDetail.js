import { Chart as ChartJS, CategoryScale, ArcElement, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import CustomLegend from './CustomLegend';
import CustomLegendCircle from './CustomLegendCircle';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Title, Tooltip, Legend);

const DashboardDetail = ({ type }) => {
  if (type === 'bar') {
    return <BarChart />;
  } else if (type === 'pie') {
    return <PieChart />;
  } else if (type === 'line') {
    return <LineChart />;
  }
  return <div>Unknown type</div>;
}

function LineChart() {
  const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
      {
        label: '차트1',
        data: [350, 300, 200, 278, 189, 239, 349, 280, 300, 200, 278, 189, 239, 349, 400, 300, 200, 278, 189],
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.2)',
        pointBackgroundColor: '#8884d8',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#8884d8'
      }
    ]
  };
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };
  return (
    <>
    <div className='title'>
        <h2>Custom Chart Title</h2>
            <button onClick={''} className='btn btn-white btn-xs'>more</button>
        </div>
        <Line data={data} options={options} />
        <CustomLegend datasets={data.datasets.map((dataset) => ({ label: dataset.label, color: dataset.backgroundColor }))} />
    </>
  );
}

function BarChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Data A',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(255, 193, 74, 1)'
      },
      {
        label: 'Data B',
        data: [3, 10, 13, 15, 22],
        backgroundColor: 'rgba(32, 186, 194, 1)'
      }
    ]
  };
  const options = {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };
  return (
    <>
    <div className='title'>
        <h2>Custom Chart Title</h2>
            <button onClick={''} className='btn btn-white btn-xs'>more</button>
        </div>
        <Bar data={data} options={options} width={500} height={300} />
        <CustomLegend datasets={data.datasets.map((dataset) => ({ label: dataset.label, color: dataset.backgroundColor }))} />
    </>
  );
}
function PieChart() {
  const data = {
    labels: ['Chart_01', 'Chart_02', 'Chart_03', 'Chart_04', 'Chart_05', 'Chart_06', 'Chart_07', 'Chart_08', 'Chart_09', 'Chart_10'],
    datasets: [{
      data: [12, 19, 3, 5, 2, 3, 4, 7, 9, 6],
      backgroundColor: [
        'rgba(255, 193, 74, 1)',
        'rgba(32, 186, 194, 1)',
        'rgba(115, 91, 235, 1)',
        'rgba(250, 108, 142, 1)',
        'rgba(67, 87, 138, 1)',
        'rgba(14, 187, 89, 1)',
        'rgba(247, 163, 92, 1)',
        'rgba(145, 232, 225, 1)',
        'rgba(253, 156, 148, 1)',
        'rgba(204, 204, 204, 1)'
      ]
    }]
  };
  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };
  return (
  <>
    <div className='title'>
        <h2>Custom Chart Title</h2>
        <button onClick={''} className='btn btn-white btn-xs'>more</button>
    </div>
    <Pie data={data} options={options} width={360} height={240} />
    <CustomLegendCircle data={data} labels={data.labels} />
  </>
  );
}

export default DashboardDetail;
