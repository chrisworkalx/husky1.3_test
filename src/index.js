import echarts from 'echarts';

document.querySelector('#add')?.addEventListener(
  'click',
  () => {
    console.log('123');
  },
  false
);
const xAxisLines = [
  '2021/12/01',
  '2021/12/10',
  '2021/12-20',
  '2022/01/03',
  '2022/01-30',
  '2022/02-10',
  '2022/03-31'
];
const myChart = echarts.init(document.getElementById('app'));
const option = {
  //图例和线的颜色
  color: ['#f40', 'green', 'red', 'yellow', 'blue', '#f99'],
  // title: {
  //   text: '树懒课堂总部一周气温变化', //标题
  //   subtext: '纯属虚构' //子标题
  // },
  tooltip: {
    //提示框，鼠标悬浮交互时的信息提示
    trigger: 'axis', //值为axis显示该列下所有坐标轴对应数据，值为item时只显示该点数据
    // formatter: '{a}:<br />{b}: {c}'
    backgroundColor: '#fff',
    textStyle: {
      color: '#000'
    },
    triggerOn: 'click',
    formatter: (...rest) => {
      const item = rest[0];
      const [firstItem, ...other] = item;
      const mainXaxisLabel = firstItem.axisValue;
      let str = '';
      for (let i = 0; i < item.length; i++) {
        str += `
          <div>
            <span>${item[i].seriesName}: </span>
            <span>${item[i].value}</span>
          </div>
        `;
      }

      let result = `<div style="margin-right: 10px;
      ">
      <div style="border: 1px solid #DCDFE6;box-shadow: 0px 2px 8px 0px #00000026;" id="add">${mainXaxisLabel}</div>
      </div>`;

      result += `<div>${str}</div>`;

      return `<div style="display: flex;">${result}</div>`;
    }
  },
  //定义网格线属性
  // grid: {
  //   top: '15%',
  //   bottom: '10%'
  // },
  legend: {
    //图例，每个图表最多仅有一个图例
    // data: ['最高气温', '最低气温']
    itemHeight: 8,
    itemWidth: 32,
    // right: 0,
    right: 150,
    // top: 'center',
    data: [
      //这一部分动态展示
      {
        name: 'A1',
        icon: 'rect'
        // itemStyle: {
        //   color: '#f40'
        // },
        // lineStyle: {
        //   color: '#f40'
        // }
      },
      {
        name: 'A2',
        icon: 'rect'
      },
      {
        name: 'A3',
        icon: 'rect'
      },
      {
        name: 'A4',
        icon: 'rect'
      },
      {
        name: 'A5',
        icon: 'rect'
      },
      {
        name: 'A6',
        icon: 'rect'
      },
      {
        name: 'A7',
        icon: 'rect'
      }
    ]
  },
  // toolbox: {
  //   //工具栏
  //   show: true,
  //   feature: {
  //     mark: {
  //       show: true
  //     },
  //     dataView: {
  //       //数据视图
  //       show: true,
  //       readOnly: false //是否只读
  //     },
  //     magicType: {
  //       //切换图表
  //       show: true,
  //       type: ['line', 'bar', 'stack', 'tiled'] //图表
  //     },
  //     restore: {
  //       //还原原始图表
  //       show: true
  //     },
  //     saveAsImage: {
  //       //保存图片
  //       show: true
  //     }
  //   }
  // },
  calculable: true, //是否启用拖拽重计算特性
  xAxis: [
    {
      //x轴名称
      // name: '日期',
      //x轴 名称样式
      // nameTextStyle: {
      //   fontWeight: 600,
      //   fontSize: 18
      // },
      type: 'category', //坐标轴类型，横轴默认为类目型'category'
      //x 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
      boundaryGap: false,
      //动态获取
      data: xAxisLines,
      axisTick: {
        //坐标轴刻度线去掉
        show: false
      },
      axisLabel: {
        //是否显示刻度 设置为false
        // show: false,
        formatter: function (val) {
          if (
            val == xAxisLines[0] ||
            val == xAxisLines[xAxisLines.length - 1]
          ) {
            return '{a|' + val + '}';
          } else {
            return val;
          }
        },
        rich: {
          a: {
            align: 'left',
            padding: [0, 30],
            color: '#f40'
          },
          b: {
            align: 'right'
          },
          c: {
            display: 'none',
            color: 'transparent'
          }
        }
      }
    }
  ],
  yAxis: [
    {
      //y轴隐藏
      // show: false,
      //y轴名称
      // name: '温度',
      //y轴名称文字样式
      // nameTextStyle: {
      //   fontWeight: 600,
      //   fontSize: 18
      // },
      type: 'value', //坐标轴类型，纵轴默认为数值型'value'
      axisLabel: {
        formatter: '{value} °C' //加上单位
      },
      axisTick: {
        show: false
      },
      //坐标轴线去掉
      axisLine: {
        show: false
      }
    }
  ],
  series: [
    //动态展示
    {
      //设置图表数据
      name: 'A1', //系列名称，如果启用legend，该值将被legend.data索引相关
      type: 'line', //图表类型
      data: [11, 11, 15, 13, 12, 13, 10]
      // markPoint: {
      //   //系列中的数据标注内容
      //   data: [
      //     {
      //       type: 'max',
      //       name: '最大值'
      //     },
      //     {
      //       type: 'min',
      //       name: '最小值'
      //     }
      //   ]
      // },
      // markLine: {
      //   //系列中的数据标线内容
      //   data: [
      //     {
      //       type: 'average',
      //       name: '平均值'
      //     }
      //   ]
      // }
    },
    {
      name: 'A2',
      type: 'line',
      data: [1, 2, -2, 5, 3, 2, 0]
      // markPoint: {
      //   data: [
      //     {
      //       name: '周最低',
      //       value: -2,
      //       xAxis: 1,
      //       yAxis: -1.5
      //     }
      //   ]
      // },
      // markLine: {
      //   data: [
      //     {
      //       type: 'average',
      //       name: '平均值'
      //     }
      //   ]
      // }
    },
    {
      name: 'A3',
      type: 'line',
      data: [1, 3, 24, 8, 9, 1, 0]
    },
    {
      name: 'A4',
      type: 'line',
      data: [-2, 4, 6, 13, 5, 20, -2]
    },
    {
      name: 'A5',
      type: 'line',
      data: [17, 6, 22, 10, 11, 21, 3]
    },
    {
      name: 'A6',
      type: 'line',
      data: [10, 6, 20, 11, 6, 17, -3]
    },
    {
      name: 'A7',
      type: 'line',
      data: [15, 26, 20, 14, 3, 18, 10]
    }
  ]
};

myChart.setOption(option);
