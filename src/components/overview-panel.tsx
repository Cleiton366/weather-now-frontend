import { LineChart } from "@mui/x-charts";
import { useState } from "react";

export default function OverviewPanel() {
  const data = {
    weather: [31, 32, 34, 32, 28, 27, 25],
    humidity: [11, 15, 17, 25, 8, 9, 12],
    uv: [40, 32, 34, 45, 47, 25, 11],
    pressure: [15, 20, 35, 32, 28, 27, 11],
  }

  const [overview, setOverview] = useState('weather');
  const [chartData, setChartData] = useState<number[]>(data.weather);


  function setSwitchStyle(overviewType: string) {
    return overview === overviewType ? 'flex bg-[#1E1F24] rounded-[15px] w-20 h-10 items-center justify-center mx-1 text-white md:text-[12pt] border rounded-[25px] border-[#42434e]'
      : 'md:text-[12pt] mx-3';
  }

  function lastSevenDays() {
    const today = new Date();
    const lastSevenDays = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      lastSevenDays.push(date);
    }

    return lastSevenDays;
  }

  return (
    <div className="md:h-80 min-w-44 p-5 bg-[#2E2E38] border rounded-[15px] border-[#42434e] text-[#FFFFFF]]">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <h1 className="font-bold text-[24pt]">Overview</h1>
        <div
          className="flex cursor-pointer items-center justify-center h-12 w-fit bg-[#1E1F24] border rounded-[25px] border-[#42434e] text-[#FFFFFF]"
        >
          <div className="flex justify-between items-center">
            <span className={`${setSwitchStyle('weather')} text-[10pt]`} onClick={() => {
              setOverview('weather')
              setChartData(data.weather)
            }}>
              Weather
            </span>
            <span className={`${setSwitchStyle('humidity')} text-[10pt]`} onClick={() => {
              setOverview('humidity')
              setChartData(data.humidity)
            }}>
              Humidity
            </span>
            <span className={`${setSwitchStyle('uv')} text-[10pt]`} onClick={() => {
              setOverview('uv')
              setChartData(data.uv)
            }}>
              UV Index
            </span>
            <span className={`${setSwitchStyle('pressure')} text-[10pt]`} onClick={() => {
              setOverview('pressure')
              setChartData(data.pressure)
            }}>
              Pressure
            </span>
          </div>
        </div>
      </div>
      <div className="h-80 md:h-full w-full md:p-5 text-white">
        <LineChart
          xAxis={[{
            data: lastSevenDays(),
            scaleType: 'time'
          }]}
          series={[
            {
              data: chartData,
              color: '#f3f3f3',
            }
          ]}
          grid={{ horizontal: true }}
          slotProps={{
            popper: {
              sx: {
                ["& .MuiChartsTooltip-root"]: {
                  backgroundColor: "#1E1F24",
                  color: "#f3f3f3",
                  border: "1px solid #42434e",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                },
              },
            }
          }}
          sx={{
            "& .MuiChartsGrid-horizontalLine": {
              stroke: "#42434e",
            },
            //change left yAxis label styles
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              strokeWidth: "0.4",
              fill: "#f3f3f3"
            },
            // change all labels fontFamily shown on both xAxis and yAxis
            "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
              fontFamily: "Roboto",
            },
            // change bottom label styles
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
              strokeWidth: "0.5",
              fill: "#f3f3f3"
            },
            // bottomAxis Line Styles
            "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
              stroke: "#f3f3f3",
              strokeWidth: 0.4
            },
            // leftAxis Line Styles
            "& .MuiChartsAxis-left .MuiChartsAxis-line": {
              stroke: "#f3f3f3",
              strokeWidth: 0.4
            }
          }}
        />
      </div>
    </div>
  )
}