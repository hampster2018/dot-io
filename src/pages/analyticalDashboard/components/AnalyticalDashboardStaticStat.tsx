import React, { ReactElement, useState } from 'react';
import '../analyticalDashboard.css';
import Chart from 'react-apexcharts';

/* export function DashboardStaticStats(): ReactElement {
  const tSpeed = JSON.parse(localStorage.getItem('CPMTopSpeed') || '0');
  const percentSpeed = ((tSpeed / 1250) * 100).toFixed(0);
  console.log('Percent Speed' + percentSpeed);
  const progressBar = (815 - 815 * (percentSpeed / 100)).toFixed(0);
  console.log('Prg Bar: ' + progressBar);
  return (
    <div class="skill">
      <div class="outer">
        <div class="inner">
          <div className="text-center text-[#777272] font-semibold font-mono">
            CPM Top Speed:
          </div>
          <div className="text-center text-white font-medium font-mono pt-3">
            {tSpeed} CPM
          </div>
        </div>
      </div>
      <svg
        id="grad"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="280px"
        height="280px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#D2DBFD" />
            <stop offset="50%" stop-color="#777272" />
            <stop offset="100%" stop-color="#5E5858" />
          </linearGradient>
        </defs>
        <circle
          id="circle1"
          cx="140"
          cy="140"
          r="130"
          stroke-linecap="round"
          style={{ strokeDashoffset: progressBar }}
        />
      </svg>
    </div>
  );
}
 */

export function DashboardStaticStats() {
  const tSpeed = JSON.parse(localStorage.getItem('CPMTopSpeed') || '0');
  //Get the current level you are on: 1250/50 = 25 levels so all levels are on 50 CPM intervals
  const speedLevel = (tSpeed / 50).toFixed(0);
  //percent of the level that you have completed
  const speedLevelRemainder = (((tSpeed % 50) / 50) * 100).toFixed(0);
  //remainder of the 50 cpm that need to be completed still
  const speedUntilNextLevel = 50 - (tSpeed % 50);
  //const percentSpeed = ((tSpeed / 1250) * 100).toFixed(0);
  //const progressBar = (815 - 815 * (parseInt(speedLevelRemainder) / 100)).toFixed(0);
  const intProgBar = parseInt(speedLevelRemainder);

  const [options, setOptions] = useState({
    labels: [`CPM Top Speed: ${tSpeed}`],
    //colors: ['#253f4b'],
    colors: ['#1d6bc4'],
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#222424',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: 5,
            show: true,
            color: '#fff',
            fontSize: '17px',
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '1px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'linear',
        shadeIntensity: 0.25,
        //gradientToColors: ['#acc8d7'],
        gradientToColors: ['rgba(0,246,120,0.38)'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 51, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
  });
  const [series, setSeries] = useState([intProgBar]);
  return (
    <div className="radialbar pr-24">
      <div className="flex flex-col text-center text-[15px] font-semibold	font-mono">
        <div>Current Speed Level: {speedLevel}</div>
        <div>Speed Until Next Level: {speedUntilNextLevel} CPM</div>
      </div>
      <Chart options={options} series={series} type="radialBar" height="380" />
    </div>
  );
}
