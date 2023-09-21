import { Container, Grid, SimpleGrid, Skeleton, rem, Group, Paper, Text, ThemeIcon } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

//Bar chart 

export const option2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Gun',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',

        },
        {
            label: 'Fire',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',

        },
    ],
};

//Line chart
export const option1 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const label1 = Array.from({ length: 15 }, () => [faker.date.past().toLocaleDateString(), faker.datatype.number({ min: 1, max: 100 })]);

const data1 = {
    labels: label1.map(([date]) => date),
    datasets: [
        {
            label: 'Crime activity',
            data: label1.map(([, value]) => value),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

//three cards
const data3 = [
    { title: 'Total Crime', value: '10000', diff: 34 },
    { title: 'Gun', value: '7000', diff: -13 },
    { title: 'Fire', value: '3000', diff: 18 },
];

export function StatsGridIcons() {
    const stats = data3.map((stat) => {
        const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

        return (
            <div key={stat.title} style={{ display: 'inline-block', margin: '0 65px' }}>
                <Paper withBorder p="md" radius="md">
                    <Group justify="apart">
                        <div>
                            <Text c="dimmed" tt="uppercase" fw={700} fz="xs">
                                {stat.title}
                            </Text>
                            <Text fw={700} fz="xl">
                                {stat.value}
                            </Text>
                        </div>
                        <ThemeIcon
                            color="gray"
                            variant="light"
                            style={{
                                color: stat.diff > 0 ? 'var(--mantine-color-teal-6)' : 'var(--mantine-color-red-6)',
                            }}
                            size={38}
                            radius="md"
                        >
                            <DiffIcon size="1.8rem" stroke={1.5} />
                        </ThemeIcon>
                    </Group>
                    <Text c="dimmed" fz="sm" mt="md">
                        <Text component="span" c={stat.diff > 0 ? 'teal' : 'red'} fw={700}>
                            {stat.diff}%
                        </Text>{' '}
                        {stat.diff > 0 ? 'increase' : 'decrease'} compared to last month
                    </Text>
                </Paper>
            </div>
        );
    });

    return (
        <div>
            {stats}
        </div>
    );
}



export function CrimeAnalytics() {
    return (
        <Grid gutter="md">
            <Grid.Col span={12} style={{ width: '1250px', height: '500px' }}>
                <Line options={option1} data={data1} style={{ width: '1250px', height: '60px', paddingLeft: '30px' }} />;
            </Grid.Col>
            <Grid.Col span={12}>
                <StatsGridIcons />
            </Grid.Col>
            <Grid.Col span={8}>
                <Skeleton height={40} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={4}>
                <Skeleton height={40} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={12} style={{ width: '1250px', height: '500px' }}>
                <Bar options={option2} data={data} style={{ width: '1100px', height: '60px', paddingLeft: '5px' }} />
            </Grid.Col>
        </Grid>
    )
}

