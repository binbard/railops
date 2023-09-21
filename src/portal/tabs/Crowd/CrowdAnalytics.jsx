import React from 'react';
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
}