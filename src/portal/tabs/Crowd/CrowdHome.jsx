import { Container, Grid, Skeleton } from '@mantine/core';
import { Chart as ChartJS,RadialLinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

import { Bar, Line } from 'react-chartjs-2';
import faker from 'faker';
ChartJS.register(CategoryScale,RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend);
const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];



const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text:  'Comparison Chart',
        },
    },
};

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
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


const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    number: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'blue', // Customize the color
    },
    label: {
      fontSize: '16px',
      color: 'black',
      fontWeight: 'bold' // Customize the color
    },
  };
// Define data and options for your new graph
const destinationColors = [
    'rgba(75, 192, 192, 1)', // Teal
    'rgba(255, 99, 132, 1)', // Red
    'rgba(54, 162, 235, 1)', // Blue
    'rgba(255, 159, 64, 1)', // Orange
    'rgba(153, 102, 255, 1)', // Purple
    'rgba(255, 205, 86, 1)', // Yellow
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

const crowdDensityTitle = 'CROWD DENSITY';
const  crowdDensityValue = 34500;
const averageDwellTimeTitle = 'AVERAGE DWELL TIME';
const averageDwellTimeValue = 30;
const entryExitRatesTitle = 'ENTRY AND EXIT RATES';
const entryExitRatesValue = 60;
const platfromOccupancy= 'PLATFORM OCCUPANCY';
const platformOccupancyValue= 45;

const ldata = {
    labels: labels,
    datasets: [
      {
        label: 'Crowd',
        data: labels.map(() => faker.datatype.number(NUMBER_CFG)),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const config = {
    type: 'line', // Change type to 'line' for a Line chart
    data: ldata,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Crowd vs Crime', // Change the chart title as needed
        },
      },
    },
  };

export function CrowdHome() {
    return (
        <Container my="md">
            <Grid gutter="md" style={{ width: '92vw', height: '80vh' }}>
            <Grid.Col span={3}  style={{ backgroundColor: 'gray' }}>
            <div
            style={styles.container}
          >
            <div style={styles.label}>{ crowdDensityTitle}</div>
            <div style={styles.number}>{crowdDensityValue }</div>
            </div>
                </Grid.Col>

                <Grid.Col span={3} style={{ backgroundColor: 'gray' }} >
                <div
            style={styles.container}
          >
            <div style={styles.label}>{ averageDwellTimeTitle }</div>
            <div style={styles.number}>{averageDwellTimeValue  } min</div>
          </div>
                </Grid.Col>
                <Grid.Col span={3} style={{ backgroundColor: 'gray' }}>
                <div
            style={styles.container}
          >
            <div style={styles.label}>{entryExitRatesTitle}</div>
            <div style={styles.number}>{entryExitRatesValue }%</div>
          </div>
                </Grid.Col>
                <Grid.Col span={3} style={{ backgroundColor: 'gray' }}>
                <div
            style={styles.container}
          >
            <div style={styles.label}>{platfromOccupancy}</div>
            <div style={styles.number}>{platformOccupancyValue}%</div>
          </div>
        </Grid.Col>
        <Grid.Col span={8} style={{ width: '80vh', height: '60vh' }}>
          <Line data={ldata} options={config.options} />
        </Grid.Col>
                
                <Grid.Col span={4} style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0', textAlign: 'center' }}>
  "From Chaos to Calm: Crowd Management Done Right"
</h1>
                                    </Grid.Col>
                <Grid.Col span={10} style={{ display: 'flex', alignItems: 'center' }}>
                    <h1>Destination</h1>
                    <ul>Platform</ul>
                    <ul>Waiting Area</ul>
                    <ul>Ticketing Counter</ul>
                    <ul>Retail and Dining areas</ul>
                    <ul>Public Wi-Fi Zones</ul>
                </Grid.Col>
                <Grid.Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
    {/* Display the new graph */}
    <Bar options={newOptions} data={newData} />
</Grid.Col>
            </Grid>
        </Container>
    );
}