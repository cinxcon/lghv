import { Chart as ChartJS, CategoryScale, ArcElement, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import CustomLegend from './CustomLegend';
import CustomLegendCircle from './CustomLegendCircle';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Title, Tooltip, Legend);

const DashboardDetail = ({ type, index }) => {
  if (type === 'bar') {
    return <BarChart />;
  } else if (type === 'pie') {
    if (index === '1') {
      return <PieChart1 />;
    } else {
      return <PieChart2 />;
    }
  } else if (type === 'line') {
    return <LineChart />;
  } else if (type === 'wideline') {
    return <WideLineChart />;
  }
  return <div>Unknown type</div>;
}
function PieChart1() {
  const data = {
    labels: ['기반', '시스템', 'H/E', '전상망', '기간망'],
    datasets: [{
      data: [12, 19, 3, 5, 6],
      backgroundColor: [
        'rgba(255, 193, 74, 1)',
        'rgba(32, 186, 194, 1)',
        'rgba(115, 91, 235, 1)',
        'rgba(250, 108, 142, 1)',
        'rgba(67, 87, 138, 1)'
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
        <h3>작업 현황</h3>
    </div>
    <div className='flex-wrap between'>
      <Pie data={data} options={options} width={160} height={160} />
      <CustomLegendCircle data={data} labels={data.labels} />
    </div>
  </>
  );
}

function PieChart2() {
  const data = {
    labels: ['지정안함', 'A등급', 'B등급', 'C등급', '등급외'],
    datasets: [{
      data: [12, 15, 6, 7, 8],
      backgroundColor: [
        'rgba(204, 204, 204, 1)',
        'rgba(255, 193, 74, 1)',
        'rgba(32, 186, 194, 1)',
        'rgba(115, 91, 235, 1)',
        'rgba(250, 108, 142, 1)'
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
        <h3>장애 현황</h3>
    </div>
    <div className='flex-wrap between'>
      <Pie data={data} options={options} width={160} height={160} />
      <CustomLegendCircle data={data} labels={data.labels} />
    </div>
  </>
  );
}

function LineChart() {
  const data = {
    labels: ['양천방송', '은평방송', '나라방송', '부천방송', '김포방송'],
    datasets: [
      {
        label: '등록',
        data: [90, 70, 60, 10, 30, 60],
        borderColor: '#ffc14a',
        backgroundColor: 'rgba(255, 193, 74, 0.2)',
        pointBackgroundColor: '#ffc14a',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ffc14a'
      },
      {
        label: '정상',
        data: [70, 60, 43, 40, 80, 10, 60],
        borderColor: '#20BAC2',
        backgroundColor: 'rgba(32, 186, 194, 0.2)',
        pointBackgroundColor: '#20BAC2',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#20BAC2'
      },
      {
        label: '지연',
        data: [5, 15, 25, 35, 20, 30, 40],
        borderColor: '#cccccc',
        backgroundColor: 'rgba(204, 204, 204, 0.2)',
        pointBackgroundColor: '#cccccc',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#cccccc'
      }
    ]
  };
  const options = {
    responsive: false,
    scales: {
      x: {
        beginAtZero: false
      },
      y: {
        min: 0, // 최소값 설정
        max: 100 // 최대값 설정
      }
    },
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true,
        color: 'black',
        align: 'end',
        anchor: 'end',
        font: { size: '14' }
      }
    }
  };
  return (
    <>
        <div className='title'>
          <h3>작업 관리 현황</h3>
        </div>
        <Line data={data} plugins={[ChartDataLabels]} options={options} width={345} height={192} />
        <CustomLegend datasets={data.datasets.map((dataset) => ({ label: dataset.label, color: dataset.backgroundColor }))} />
    </>
  );
}
function BarChart() {
  const data = {
    labels: ['양천방송', '은평방송', '나라방송', '부천방송', '김포방송'],
    datasets: [
      {
        label: '전송망',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(250, 108, 142, 1)'
      },
      {
        label: '콜현황',
        data: [3, 10, 13, 15, 22],
        backgroundColor: 'rgba(32, 186, 194, 1)'
      },
      {
        label: '장애지표',
        data: [6, 9, 11, 11, 17],
        backgroundColor: 'rgba(204, 204, 204, 1)'
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
          <h3>장애 관리 현황</h3>
        </div>
        <Bar data={data} options={options} width={345} height={192} />
        <CustomLegend datasets={data.datasets.map((dataset) => ({ label: dataset.label, color: dataset.backgroundColor }))} />
    </>
  );
}
function WideLineChart() {
  const data = {
    labels: ['', '서울 인프라팀', '경인 인프라팀', '경인 인프라팀', '경인 인프라팀', '경인 인프라팀', '경인 인프라팀', '경인 인프라팀', ''],
    datasets: [
      {
        data: ['null', 543000, 420021, 340000, 453123, 342156, 675950, 452130, 'null'],
        borderColor: '#ffc14a',
        backgroundColor: 'rgba(255, 193, 74, 0.2)',
        pointBackgroundColor: '#ffc14a',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ffc14a',
        pointRadius: 5, // Adjust the size of the point markers
        pointHoverRadius: 7 // Adjust the size of the point markers on hover
      }
    ]
  };
  const options = {
    responsive: false,
    scales: {
      x: {
        beginAtZero: false
      },
      y: {
        min: 0, // 최소값 설정
        max: 1000000 // 최대값 설정
      }
    },
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true,
        color: 'black',
        align: 'end',
        anchor: 'end',
        font: { size: '14' }
      }
    }
  };
  return (
    <>
        <div className='title'>
          <h3>CELL 가입자 현황</h3>
        </div>
        <Line data={data} plugins={[ChartDataLabels]} options={options} width={1560} height={200} />
        <CustomLegend datasets={data.datasets.map((dataset) => ({ label: dataset.label, color: dataset.backgroundColor }))} />
    </>
  );
}
export default DashboardDetail;
