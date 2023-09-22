import React from 'react';
import { Container, Grid, Skeleton } from '@mantine/core';
import { Chart as ChartJS,RadialLinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Radar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(CategoryScale,RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','Septemeber','October','Novemeber','Decemeber'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Crowd',
      data: labels.map(() => faker.datatype.number(NUMBER_CFG)),
      borderColor: 'red',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Crime Reported',
      data: labels.map(() => faker.datatype.number(NUMBER_CFG)),
      borderColor: 'blue',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const rdata = {
    labels: labels,
    datasets: [
      {
        label: 'Crowd',
        data: labels.map(() => faker.datatype.number(NUMBER_CFG)), // Use faker for values
        borderColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: 'start'
      },
      {
        label: 'Employees',
        data: labels.map(() => faker.datatype.number(NUMBER_CFG)), // Use faker for values
        borderColor: 'blue',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        fill: 'start'
      },
      // Add a new dataset
      {
        label: 'Security', // Change the label as needed
        data: labels.map(() => faker.datatype.number(NUMBER_CFG)), // Use faker for values
        borderColor: 'green', // Change the color as needed
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Change the color as needed
        fill: 'start'
    },
    ],
  };
  const rconfig = {
    type: 'radar',
    data: rdata,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Radar Chart'
        }
      }
    },
  };
  

const config = {
  type: 'line', // Change type to 'line' for a Line chart
  data: data,
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
    transition: 'transform 0.2s', // Add a smooth transition on hover
    cursor: 'pointer', // Add a pointer cursor on hover
  },
  number: {
    fontSize: '24px',
    fontWeight: 'bold',
    transition: 'color 0.2s', // Add a smooth color transition on hover
    color:'blue'
},
  label: {
    fontSize: '16px',
  },
  indicator: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    marginLeft: '4px',
  },
  greenIndicator: {
    backgroundColor: 'green',
  },
  redIndicator: {
    backgroundColor: 'red',
  },
};

// Define your threshold value
const thresholdValue = 50;

function Header() {
    const currentDate = new Date(); // Get the current date
    const formattedDate = currentDate.toLocaleDateString(); // Format it as a string
  
    // Additional details relevant to the railway system
    const railwayDetails =
      "Dehradun Terminal Station Code: DDN\nZone: Northern Railway\nDivision: Moradabad";
  
    const headerStyle = {
      marginBottom: '20px',
      textAlign: 'left', // Align text to the left
      marginLeft: '20px', // Add some left margin for spacing
      padding: '20px', // Add some padding for better spacing
      backgroundColor: '#f5f5f5', // Add a background color
      border: '1px solid #ddd', // Add a border
      borderRadius: '5px', // Add rounded corners
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    };
  
    const headingStyle = {
      fontSize: '24px', // Increase font size for the heading
      fontWeight: 'bold',
      margin: '0', // Remove default margin
    };
  
    const detailsStyle = {
      fontSize: '16px',
      lineHeight: '1.5', // Increase line height for better readability
      marginTop: '10px', // Add top margin to details
    };
  
    return (
      <div style={headerStyle}>
        <h1 style={headingStyle}>{formattedDate}</h1>
        <p style={detailsStyle}>{railwayDetails}</p>
      </div>
    );
  }
  
  
  
export function Dash() {
    
  // Replace these values with your actual data
  const liveCrowdCount = 500;
  const armsAndAmmunitions = 10;
  const lostAndFoundCases = 25;
  const totalWorkforce = 1000;

  // Determine if the value is above or below the threshold
  const liveCrowdCountColor = liveCrowdCount >= thresholdValue ? styles.greenIndicator : styles.redIndicator;
  const armsAndAmmunitionsColor = armsAndAmmunitions >= thresholdValue ? styles.greenIndicator : styles.redIndicator;
  const lostAndFoundCasesColor = lostAndFoundCases >= thresholdValue ? styles.greenIndicator : styles.redIndicator;
  const totalWorkforceColor = totalWorkforce >= thresholdValue ? styles.greenIndicator : styles.redIndicator;

  return (
    <Container my="md">
        <Header />
      <Grid gutter="md" style={{ width: '92vw', height: '80vh' }}>
        <Grid.Col span={3}>
          <div
            style={styles.container}
            onMouseEnter={() => {
              // Add hover effect (e.g., change color)
              styles.number.color = 'red';
              styles.container.transform = 'scale(1.05)';
            }}
            onMouseLeave={() => {
              // Remove hover effect (reset styles)
              styles.number.color = 'blue';
              styles.container.transform = 'scale(1)';
            }}
          >
            <div style={styles.number}>{liveCrowdCount}</div>
            <div style={styles.label}>Live Crowd Count</div>
            <div style={{ ...styles.indicator, ...liveCrowdCountColor }}></div>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div
            style={styles.container}
            onMouseEnter={() => {
              styles.number.color = 'red';
              styles.container.transform = 'scale(1.05)';
            }}
            onMouseLeave={() => {
              styles.number.color = 'blue';
              styles.container.transform = 'scale(1)';
            }}
          >
            <div style={styles.number}>{armsAndAmmunitions}</div>
            <div style={styles.label}>Arms and Ammunitions Detected</div>
            <div style={{ ...styles.indicator, ...armsAndAmmunitionsColor }}></div>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div
            style={styles.container}
            onMouseEnter={() => {
              styles.number.color = 'red';
              styles.container.transform = 'scale(1.05)';
            }}
            onMouseLeave={() => {
              styles.number.color = 'blue';
              styles.container.transform = 'scale(1)';
            }}
          >
            <div style={styles.number}>{lostAndFoundCases}</div>
            <div style={styles.label}>Lost Cases Reported</div>
            <div style={{ ...styles.indicator, ...lostAndFoundCasesColor }}></div>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div
            style={styles.container}
            onMouseEnter={() => {
              styles.number.color = 'red';
              styles.container.transform = 'scale(1.05)';
            }}
            onMouseLeave={() => {
              styles.number.color = 'blue';
              styles.container.transform = 'scale(1)';
            }}
          >
            <div style={styles.number}>{totalWorkforce}</div>
            <div style={styles.label}>Total Workforce</div>
            <div style={{ ...styles.indicator, ...totalWorkforceColor }}></div>
          </div>
        </Grid.Col>
        <Grid.Col span={8} style={{ width: '80vh', height: '60vh' }}>
          <Line data={config.data} options={config.options} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Radar data={rdata} options={rconfig}/>
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
