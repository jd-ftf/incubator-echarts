/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

export * from './src/echarts';
export * from './src/export';

import './src/component/dataset';



// ----------------------------------------------
// All of the modules that are allowed to be
// imported are listed below.
//
// Users MUST NOT import other modules that are
// not included in this list.
// ----------------------------------------------



// ----------------
// Charts (series) 图表
// ----------------



// All of the series types, for example:
// chart.setOption({
//     series: [{
//         type: 'line' // or 'bar', 'pie', ...
//     }]
// });

// 折线图
import './src/chart/line';
// 柱状图
import './src/chart/bar';
// 饼图
import './src/chart/pie';
// 散点图
import './src/chart/scatter';
// 雷达图
import './src/chart/radar';
// 地图
import './src/chart/map';
// 树图
import './src/chart/tree';
// 矩形树图
import './src/chart/treemap';
// 关系图
import './src/chart/graph';
// 仪表盘
import './src/chart/gauge';
// 漏斗图
import './src/chart/funnel';
// 平行坐标
import './src/chart/parallel';
// 桑基图
import './src/chart/sankey';
// 箱线图
import './src/chart/boxplot';
// K线图
import './src/chart/candlestick';
// 涟漪散点图
import './src/chart/effectScatter';
// 线图
import './src/chart/lines';
// 热力图
import './src/chart/heatmap';
// 象形柱图
import './src/chart/pictorialBar';
// 主题河流图
import './src/chart/themeRiver';
// 旭日图
import './src/chart/sunburst';
// 自定义系列
import './src/chart/custom'; 



// -------------------
// Coordinate systems 坐标系
// -------------------



// All of the axis modules have been included in the
// coordinate system module below, do not need to
// make extra import.

// `cartesian` coordinate system. For some historical
// reasons, it is named as grid, for example:
// chart.setOption({
//     grid: {...},
//     xAxis: {...},
//     yAxis: {...},
//     series: [{...}]
// });
// 直角坐标
import './src/component/grid';

// `polar` coordinate system, for example:
// chart.setOption({
//     polar: {...},
//     radiusAxis: {...},
//     angleAxis: {...},
//     series: [{
//         coordinateSystem: 'polar'
//     }]
// });
// 极坐标系
import './src/component/polar';

// `geo` coordinate system, for example:
// chart.setOption({
//     geo: {...},
//     series: [{
//         coordinateSystem: 'geo'
//     }]
// });
// 地理坐标系
import './src/component/geo';

// `singleAxis` coordinate system (notice, it is a coordinate system
// with only one axis, work for chart like theme river), for example:
// chart.setOption({
//     singleAxis: {...}
//     series: [{type: 'themeRiver', ...}]
// });
// 单轴
import './src/component/singleAxis';

// `parallel` coordinate system, only work for parallel series, for example:
// chart.setOption({
//     parallel: {...},
//     parallelAxis: [{...}, ...],
//     series: [{
//         type: 'parallel'
//     }]
// });
// 平行坐标
import './src/component/parallel';

// `calendar` coordinate system. for example,
// chart.setOptionp({
//     calendar: {...},
//     series: [{
//         coordinateSystem: 'calendar'
//     }]
// );
// 日历
import './src/component/calendar';



// ------------------
// Other components 组件
// ------------------



// `graphic` component, for example:
// chart.setOption({
//     graphic: {...}
// });
// 自定义图形
import './src/component/graphic';

// `toolbox` component, for example:
// chart.setOption({
//     toolbox: {...}
// });
// 工具栏
import './src/component/toolbox';

// `tooltip` component, for example:
// chart.setOption({
//     tooltip: {...}
// });
// 提示框
import './src/component/tooltip';

// `axisPointer` component, for example:
// chart.setOption({
//     tooltip: {axisPointer: {...}, ...}
// });
// Or
// chart.setOption({
//     axisPointer: {...}
// });
import './src/component/axisPointer';

// `brush` component, for example:
// chart.setOption({
//     brush: {...}
// });
// Or
// chart.setOption({
//     tooltip: {feature: {brush: {...}}
// })
// 刷选
import './src/component/brush';

// `title` component, for example:
// chart.setOption({
//     title: {...}
// });
// 标题
import './src/component/title';

// `timeline` component, for example:
// chart.setOption({
//     timeline: {...}
// });
// 时间轴
import './src/component/timeline';

// `markPoint` component, for example:
// chart.setOption({
//     series: [{markPoint: {...}}]
// });
// 标注
import './src/component/markPoint';

// `markLine` component, for example:
// chart.setOption({
//     series: [{markLine: {...}}]
// });
// 标线
import './src/component/markLine';

// `markArea` component, for example:
// chart.setOption({
//     series: [{markArea: {...}}]
// });
// 标域
import './src/component/markArea';

// `legend` component scrollable, for example:
// chart.setOption({
//     legend: {type: 'scroll'}
// });
// 图例
import './src/component/legendScroll';

// `legend` component not scrollable. for example:
// chart.setOption({
//     legend: {...}
// });
// 图例
import './src/component/legend';

// `dataZoom` component including both `dataZoomInside` and `dataZoomSlider`.
// 数据区域缩放
import './src/component/dataZoom';

// `dataZoom` component providing drag, pinch, wheel behaviors
// inside coodinate system, for example:
// chart.setOption({
//     dataZoom: {type: 'inside'}
// });
// 数据区域缩放
import './src/component/dataZoomInside';

// `dataZoom` component providing a slider bar, for example:
// chart.setOption({
//     dataZoom: {type: 'slider'}
// });
// 数据区域缩放
import './src/component/dataZoomSlider';

// `dataZoom` component including both `visualMapContinuous` and `visualMapPiecewise`.
// 视觉映射
import './src/component/visualMap';

// `visualMap` component providing continuous bar, for example:
// chart.setOption({
//     visualMap: {type: 'continuous'}
// });
// 视觉映射
import './src/component/visualMapContinuous';

// `visualMap` component providing pieces bar, for example:
// chart.setOption({
//     visualMap: {type: 'piecewise'}
// });
// 视觉映射
import './src/component/visualMapPiecewise';



// -----------------
// Render engines
// -----------------



// Provide IE 6,7,8 compatibility，支持IE，小程序直接注释掉
// import '@ftf/zrender/src/vml/vml';

// Render via SVG rather than canvas，使用SVG渲染，小程序直接注释掉
// import '@ftf/zrender/src/svg/svg';
