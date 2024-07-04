'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data }: any) => (
    <ResponsiveLine
        data={data}
        // margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        lineWidth={6}
        enablePoints={false}
        pointSize={7}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-16}
        areaOpacity={0}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[]}
    />
);

const data = [
    {
        id: "japan",
        color: "hsl(345, 70%, 50%)",
        data: [
            { x: "plane", y: 265 },
            { x: "helicopter", y: 28 },
            { x: "boat", y: 29 },
            { x: "train", y: 209 },
            { x: "subway", y: 243 },
            { x: "bus", y: 2 },
            { x: "car", y: 124 },
            { x: "moto", y: 121 },
            { x: "bicycle", y: 25 },
            { x: "horse", y: 240 },
            { x: "skateboard", y: 300 },
            { x: "others", y: 189 },
        ],
    },
    {
        id: "france",
        color: "hsl(152, 70%, 50%)",
        data: [
            { x: "plane", y: 14 },
            { x: "helicopter", y: 1 },
            { x: "boat", y: 107 },
            { x: "train", y: 214 },
            { x: "subway", y: 34 },
            { x: "bus", y: 207 },
            { x: "car", y: 261 },
            { x: "moto", y: 90 },
            { x: "bicycle", y: 13 },
            { x: "horse", y: 108 },
            { x: "skateboard", y: 256 },
            { x: "others", y: 137 },
        ],
    },
    {
        id: "us",
        color: "hsl(177, 70%, 50%)",
        data: [
            { x: "plane", y: 175 },
            { x: "helicopter", y: 75 },
            { x: "boat", y: 133 },
            { x: "train", y: 2 },
            { x: "subway", y: 238 },
            { x: "bus", y: 245 },
            { x: "car", y: 216 },
            { x: "moto", y: 0 },
            { x: "bicycle", y: 193 },
            { x: "horse", y: 226 },
            { x: "skateboard", y: 283 },
            { x: "others", y: 235 },
        ],
    },
    {
        id: "germany",
        color: "hsl(80, 70%, 50%)",
        data: [
            { x: "plane", y: 167 },
            { x: "helicopter", y: 176 },
            { x: "boat", y: 4 },
            { x: "train", y: 265 },
            { x: "subway", y: 38 },
            { x: "bus", y: 50 },
            { x: "car", y: 245 },
            { x: "moto", y: 193 },
            { x: "bicycle", y: 45 },
            { x: "horse", y: 84 },
            { x: "skateboard", y: 118 },
            { x: "others", y: 293 },
        ],
    },
    {
        id: "norway",
        color: "hsl(263, 70%, 50%)",
        data: [
            { x: "plane", y: 266 },
            { x: "helicopter", y: 188 },
            { x: "boat", y: 52 },
            { x: "train", y: 71 },
            { x: "subway", y: 137 },
            { x: "bus", y: 211 },
            { x: "car", y: 150 },
            { x: "moto", y: 237 },
            { x: "bicycle", y: 99 },
            { x: "horse", y: 291 },
            { x: "skateboard", y: 241 },
            { x: "others", y: 197 },
        ],
    },
];

export default function Line() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Lines</CardTitle>
                <CardDescription>These are the stats of this year.</CardDescription>
            </CardHeader>
            <CardContent className="h-[264px] flex items-center w-full">
                <MyResponsiveLine data={data} />
            </CardContent>
        </Card>
    );
}
