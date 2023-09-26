import { Chart as ChartJS, CategoryScale, ArcElement, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import CustomLegend from './CustomLegend';
import CustomLegendCircle from './CustomLegendCircle';
import CustomLegendDoughnut from './CustomLegendDoughnut';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Title, Tooltip, Legend);

const DashboardDetail = ({ type, index }) => {
  if (type === 'bar') {
    return <BarChart />;
  } else if (type === 'pie') {
    return <PieChart />;
  } else if (type === 'Doughnut') {
    return <DoughnutChart />;
  } else if (type === 'line') {
    return <LineChart />;
  } else if (type === 'wideline') {
    return <WideLineChart />;
  }
  return <div>Unknown type</div>;
}
function DoughnutChart() {
  const data = {
    labels: ['강원인프라팀', '경남인프라팀', '경남인프라팀', '경인인프라팀', '부산인프라팀', '서울인프라', '호남인프라', '기간망운영팀', '뉴비즈운영팀', '미디어운영팀'],
    datasets: [{
      data: [4, 2, 5, 2.5, 2.5, 4, 6, 3, 4, 5],
      backgroundColor: [
        '#FFC14A',
        '#20BAC2',
        '#735BEB',
        '#FA6C8E',
        '#43578A',
        '#0EBB59',
        '#d7c7fe',
        '#91E8E1',
        '#FD9C94',
        '#cccccc'
      ]
    }]
  };
  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true,
        color: '#fff',
        align: 'center',
        anchor: 'center',
        font: { size: '12' }
      }
    }
  };
  return (
  <>
    <div className='title'>
        <h3>팀별 작업등록현황</h3>
    </div>
    <div className='total'>총 20건</div>
    <div className='right color-gray size-sm'>건수 / 당일기준</div>
    <div className='flex-wrap between'>
      <Doughnut data={data} options={options} plugins={[ChartDataLabels]} width={200} height={180} />
      <CustomLegendDoughnut data={data} labels={data.labels} />
    </div>
  </>
  );
}

function PieChart() {
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
        <div className='right color-gray size-sm'>건수 / 월</div>
        <Line data={data} plugins={[ChartDataLabels]} options={options} width={452} height={224} />
        <CustomLegend datasets={data.datasets.map((dataset) => ({ label: dataset.label, color: dataset.backgroundColor }))} />
    </>
  );
}
function BarChart() {
  const data = {
    labels: ['전주', '이번주'],
    datasets: [
      {
        label: '일반작업',
        data: [160, 140],
        backgroundColor: '#43578a'
      },
      {
        label: '긴급작업',
        data: [125, 175],
        backgroundColor: '#fa6c8e'
      }
    ]
  };
  const options = {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // forces step size to be 50 units
          stepSize: 50
        },
        min: 0, // 최소값 설정
        max: 200 // 최대값 설정
      }
    },
    barPercentage: 0.7, // 바의 너비 (기본값은 1이며, 1보다 작으면 바가 좁아집니다.)
    categoryPercentage: 0.5, // 바 간의 여백 (기본값은 0.8이며, 1보다 작으면 여백이 커집니다.)
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true,
        color: '#fff',
        align: 'start',
        anchor: 'end',
        font: { size: '12' }
      }
    }
  };
  return (
    <>
        <div className='title'>
          <h3>작업등록 현황</h3>
        </div>
        <div className='right color-gray size-sm'>건수 / 주</div>
        <Bar data={data} options={options} plugins={[ChartDataLabels]} width={452} height={224} />
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
