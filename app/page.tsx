import General from "@/components/Cards/General";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import  Calendar  from "@/components/Cards/Calender";
import Line from "@/components/Cards/Line";
import { TableDemo } from "@/components/Cards/Table";
import { DataTableDemo } from "@/components/Cards/DataTable";
import Bar from "@/components/Cards/Bar";

export default function Home() {
  return <div className="grid gap-[32px]">
    <div className="grid grid-cols-2 gap-[32px]  ">
      <General />
      <div className="grid gap-[32px]">
      <Calendar />
      <Bar />
      </div>
    </div>
    <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[300px] overflow-hidden">
    <Line />
    <Card className="overflow-y-scroll">
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>These are the orders of this month</CardDescription>
      </CardHeader>
      <TableDemo />
    </Card>
    <Card className="overflow-y-scroll">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>These are the users of this month</CardDescription>
      </CardHeader>
      <DataTableDemo />
    </Card>
    </div>
  </div>
}