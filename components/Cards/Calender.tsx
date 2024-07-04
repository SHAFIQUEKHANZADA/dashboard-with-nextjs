'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import { ResponsiveCalendar } from "@nivo/calendar";
  
  const MyResponsiveCalendar = ({ data }: any) => (
    <ResponsiveCalendar
      data={data}
      from="2024-01-01"
      to="2024-12-31"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      // margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  );
  
  export default function Calender() {
    function generateDataForYear() {
      const data = [];
      const startdate = new Date("2024-01-01");
      const endDate = new Date("2024-12-31");
  
      while (startdate <= endDate) {
        const value = Math.floor(Math.random() * 301);
        const day = startdate.toISOString().split('T')[0]; // format date as YYYY-MM-DD
  
        data.push({
          day,
          value: value,
        });
  
        startdate.setDate(startdate.getDate() + 1);
      }
      return data;
    }
  
    const dataArray = generateDataForYear();
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Calender</CardTitle>
          <CardDescription>These are the numbers of this year.</CardDescription>
        </CardHeader>
        <CardContent className="h-[100px] flex items-center w-full">
          <MyResponsiveCalendar data={dataArray} />
        </CardContent>
      </Card>
    );
  }