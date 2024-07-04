'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResponsiveBar } from '@nivo/bar';
import React from 'react';

const MyResponsiveBar = ({ data }: any) => (
  <ResponsiveBar
    data={data}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    // margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'fries',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'sandwich',
        },
        id: 'lines',
      },
    ]}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.9]],
    }}
    axisTop={null}
    axisRight={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendOffset: 0,
      truncateTickAt: 0,
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={null}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    legends={[]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={e => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
  />
);

const data = [
  {
    country: 'AD',
    'hot dog': 44,
    'hot dogColor': 'hsl(26, 70%, 50%)',
    burger: 134,
    'burgerColor': 'hsl(57, 70%, 50%)',
    sandwich: 199,
    'sandwichColor': 'hsl(172, 70%, 50%)',
    kebab: 89,
    'kebabColor': 'hsl(109, 70%, 50%)',
    fries: 159,
    'friesColor': 'hsl(96, 70%, 50%)',
    donut: 102,
    'donutColor': 'hsl(253, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 35,
    'hot dogColor': 'hsl(67, 70%, 50%)',
    burger: 63,
    'burgerColor': 'hsl(167, 70%, 50%)',
    sandwich: 39,
    'sandwichColor': 'hsl(132, 70%, 50%)',
    kebab: 137,
    'kebabColor': 'hsl(310, 70%, 50%)',
    fries: 28,
    'friesColor': 'hsl(307, 70%, 50%)',
    donut: 68,
    'donutColor': 'hsl(64, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 127,
    'hot dogColor': 'hsl(28, 70%, 50%)',
    burger: 98,
    'burgerColor': 'hsl(323, 70%, 50%)',
    sandwich: 191,
    'sandwichColor': 'hsl(285, 70%, 50%)',
    kebab: 184,
    'kebabColor': 'hsl(173, 70%, 50%)',
    fries: 80,
    'friesColor': 'hsl(311, 70%, 50%)',
    donut: 161,
    'donutColor': 'hsl(83, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 197,
    'hot dogColor': 'hsl(232, 70%, 50%)',
    burger: 100,
    'burgerColor': 'hsl(240, 70%, 50%)',
    sandwich: 199,
    'sandwichColor': 'hsl(357, 70%, 50%)',
    kebab: 159,
    'kebabColor': 'hsl(228, 70%, 50%)',
    fries: 22,
    'friesColor': 'hsl(345, 70%, 50%)',
    donut: 72,
    'donutColor': 'hsl(36, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 80,
    'hot dogColor': 'hsl(36, 70%, 50%)',
    burger: 90,
    'burgerColor': 'hsl(21, 70%, 50%)',
    sandwich: 63,
    'sandwichColor': 'hsl(203, 70%, 50%)',
    kebab: 133,
    'kebabColor': 'hsl(94, 70%, 50%)',
    fries: 34,
    'friesColor': 'hsl(53, 70%, 50%)',
    donut: 179,
    'donutColor': 'hsl(355, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 22,
    'hot dogColor': 'hsl(3, 70%, 50%)',
    burger: 143,
    'burgerColor': 'hsl(341, 70%, 50%)',
    sandwich: 155,
    'sandwichColor': 'hsl(37, 70%, 50%)',
    kebab: 137,
    'kebabColor': 'hsl(95, 70%, 50%)',
    fries: 133,
    'friesColor': 'hsl(91, 70%, 50%)',
    donut: 12,
    'donutColor': 'hsl(29, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 194,
    'hot dogColor': 'hsl(5, 70%, 50%)',
    burger: 71,
    'burgerColor': 'hsl(205, 70%, 50%)',
    sandwich: 24,
    'sandwichColor': 'hsl(237, 70%, 50%)',
    kebab: 164,
    'kebabColor': 'hsl(130, 70%, 50%)',
    fries: 150,
    'friesColor': 'hsl(27, 70%, 50%)',
    donut: 77,
    'donutColor': 'hsl(333, 70%, 50%)',
  },
];

const Bar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>These are the bar chart data for different countries.</CardDescription>
      </CardHeader>
      <CardContent className="h-[100px] w-full">
        <MyResponsiveBar data={data} />
      </CardContent>
    </Card>
  );
};

export default Bar;
