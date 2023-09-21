<<<<<<< Updated upstream
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
=======
import { Container, Grid, Skeleton } from '@mantine/core';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
>>>>>>> Stashed changes
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
<<<<<<< Updated upstream
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
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

export function Dash() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Bar options={options} data={data} />
    </div>
  );
}

import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

export function CrowdAnalytics() {
  const SECONDARY_COL_HEIGHT = rem(500);

  // Style to center align the image both horizontally and vertically
  const centerImageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };
  const stylingImage = {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100px',
    height: 'auto',
  }
  // Style to center align the text horizontally within its container
  const centerTextStyle = {
    textAlign: 'center',
  };

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{ width: '1000px' }}>
        {/* Replace this Skeleton with your content */}
        <div style={{ height: PRIMARY_COL_HEIGHT, borderRadius: '8px', background: 'white' }}>
          <div style={centerImageStyle}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/404/0d02a1159811957.Y3JvcCw5NzUsNzYzLDQ4Miww.png"
              alt=""
            />
          </div>
          {/* <div style={stylingImage}>
            <img src="https://as2.ftcdn.net/v2/jpg/02/98/23/75/1000_F_298237588_byYe7BNQdUFQBXOGwRR2TdYKUJd0eKt6.jpg" alt="" />
          </div> */}
          
        </div>
        <Grid gutter="md">
          <Grid.Col>
            {/* Replace this Skeleton with your content */}
            <div style={{ height: SECONDARY_COL_HEIGHT, borderRadius: '8px', background: 'white' }}>
              <h1 style={centerTextStyle}>Crowd Management Redefined: Safety First</h1>
            </div>
          </Grid.Col>
          <Grid.Col >
            {/* Replace this Skeleton with your content */}
            <div style={{ height: SECONDARY_COL_HEIGHT, borderRadius: '8px', background: 'lightgray' }}>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            {/* Replace this Skeleton with your content */}
            <div style={{ height: SECONDARY_COL_HEIGHT, borderRadius: '8px', background: 'lightgray' }}>
            </div>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
=======
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Comparison Chart',
        },
    },
};

const data = {
    labels,
    datasets: [
        {
            label: 'dataset1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'dataset2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

// Define data and options for your new graph
const destinationColors = [
    'rgba(23,24,67,1.4)',
    'rgba(90,45,27,0.5)',
    'rgba(45,20,17,2.3)',
    'rgba(45,94,97,4.5)',
    'rgba(38,28,90,6.7)',
    'rgba(21,29,23,9.6)',
];

const newData = {
    labels,
    datasets: [
        {
            label: 'Platform',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: destinationColors[0],
        },
        {
            label: 'Waiting Area',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: destinationColors[1],
        },
        {
            label: 'Ticketing Counter',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: destinationColors[2],
        },
        {
            label: 'Retail and Dining Zones',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: destinationColors[3],
        },
        {
            label: 'Public Wi-Fi Zones',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: destinationColors[4],
        },
        {
            label: 'Tourist Information Centers',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: destinationColors[5],
        },
    ],
};

const newOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Destination Chart',
        },
    },
};

export function CrowdAnalytics() {
    return (
        <Container my="md">
            <Grid gutter="md" style={{ width: '92vw', height: '80vh' }}>
                <Grid.Col span={3}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0', textAlign: 'center' }}>CROWD DENSITY</h1>
                    <h2 style={{ fontSize: '18px', margin: '0', textAlign: 'center' }}>345k+</h2>
                </Grid.Col>
                <Grid.Col span={3}>
                    {/* <Skeleton color={grey}/> */}
                </Grid.Col>
                <Grid.Col span={3}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>AVERAGE DWELL TIME</h1>
                    <h2 style={{ fontSize: '18px', margin: '0', textAlign: 'center' }}>30 min</h2>
                </Grid.Col>
                <Grid.Col span={3}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0', textAlign: 'center' }}>ENTRY AND EXIT RATES</h1>
                    <h2 style={{ fontSize: '18px', margin: '0', textAlign: 'center' }}>60%</h2>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Bar options={options} data={data} />
                </Grid.Col>
                <Grid.Col span={4}>
                    {/* <Skeleton height={200} radius="md" animate={false} /> */}
                </Grid.Col>
                <Grid.Col span={3}>
                    <h1>Destination</h1>
                    <li>Platform</li>
                    <li>Waiting Area</li>
                    <li>Ticketing Counter</li>
                    <li>Retail and Dining areas</li>
                    <li>Public Wi-Fi Zones</li>
                </Grid.Col>
                <Grid.Col span={3}>
                    <h1>Crowd Diversity</h1>
                    <li>NORTH</li>
                    <li>SOUTH</li>
                    <li>EAST</li>
                    <li>WEST</li>
                </Grid.Col>
                <Grid.Col span={6}>
                    <h1>Departments Workforce</h1>
                    <li>Operations Department</li>
                    <li>Engineering Department</li>
                    <li>Mechanical Department</li>
                    <li>Electrical Department</li>
                    <li>Signaling and Telecommunications Department</li>
                    <li>Traffic Commercial Department</li>
                </Grid.Col>
                <Grid.Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    {/* Display the new graph */}
                    <Bar options={newOptions} data={newData} />
                </Grid.Col>
            </Grid>
        </Container>
    );
>>>>>>> Stashed changes
}