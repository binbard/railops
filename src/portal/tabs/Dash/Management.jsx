import { Container, Grid, Skeleton } from '@mantine/core';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const options = {
    responsive: true,
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

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};


export function Management() {
    return (
        <Container my="md">
            <Grid gutter="md" style={{ width: '92vw', height: '80vh' }}>
                <Grid.Col span={8}>
                    <Bar options={options} data={data} />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Skeleton height={200} radius="md" animate={false} />
                </Grid.Col>
                <Grid.Col span={3}>
                    <Skeleton height={320} radius="md" animate={false} />
                </Grid.Col>
                <Grid.Col span={3}>
                    <Skeleton height={160} radius="md" animate={false} />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Skeleton height={200} radius="md" animate={false} />
                </Grid.Col>
            </Grid>
        </Container>
    );
}