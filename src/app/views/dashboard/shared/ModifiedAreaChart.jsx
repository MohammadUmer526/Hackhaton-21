import React, { useState,useEffect } from 'react';
import ReactEcharts from "echarts-for-react";
import { merge } from "lodash";
import { fetchDashboardStats } from 'app/redux/actions/DashboardGraphAction';
import { connect } from 'react-redux';

const defaultOption = {
  grid: {
    top: 16,
    left: 36,
    right: 16,
    bottom: 32
  },
  legend: {},
  tooltip: {
    show: true,
    trigger: "axis",

    axisPointer: {
      type: "cross",
      lineStyle: {
        opacity: 0
      }
    },
    crossStyle: {
      color: "#000"
    }
  },
  series: [
    {
      areaStyle: {},
      smooth: true,
      lineStyle: {
        width: 2,
        color: "#fff"
      }
    }
  ],
  xAxis: {
    show: true,
    type: "category",
    showGrid: false,
    boundaryGap: false,
    axisLabel: {
      color: "#ccc",
      margin: 20
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: "value",
    min: 1,
    max: 50,
    axisLabel: {
      color: "#ccc",
      margin: 20,
      fontSize: 13,
      fontFamily: "roboto",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(255, 255, 255, .1)"
      }
    },
    
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  color: [
    {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(255,255,255,0.3)" // color at 0% position
        },
        {
          offset: 1,
          color: "rgba(255,255,255,0)" // color at 100% position
        }
      ],
      global: false // false by default
    }
  ]
};

const ModifiedAreaChart = (props) => {
  // const [graphData, setgraphData] = useState([]);
  
  useEffect(() => {
    props.fetchDashboardStats();
  }, []);
  
  // setgraphData(props.dashboard)
 let graphOption={
    series: [
      {
        data: props.dashboardStats,
        type: "line"
      }
    ],
    xAxis: {
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    }
  }

  return (
    <ReactEcharts
      style={{ height: '280px' }}
      option={merge({}, defaultOption, graphOption)}
    />
  );
};

// export default ModifiedAreaChart;

const mapStateToProp = (state, props) => {
  return {
      dashboardStats: state.dashboardGraph.dashboardGraph,
      loading: state.blog.loading,
  };
}
const dispatchToProps = (dispatch) => ({
  fetchDashboardStats: () => {
      dispatch(fetchDashboardStats());
  },

});

export default connect(mapStateToProp, dispatchToProps)(ModifiedAreaChart);
