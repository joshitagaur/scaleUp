import React from 'react';
import 'hammerjs';

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';


export const DonutChartContainer = (graphData) => {
  let data = graphData.graphData.map(data => {
    return {
      ...data, 'percentage': data.pantone_value.split('-')[0]
    }
  })
  return(
  <Chart style={{ height: 170 }}>
    <ChartSeries>
      <ChartSeriesItem type="donut" data={data} categoryField="year" field="percentage" padding={0}>
        <ChartSeriesLabels color="#fff" background="none" />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend visible={false} />
  </Chart>
  )
};