import { Container, Grid, Skeleton, Text } from "@mantine/core"
import { createRef } from "react"

export function CrimeAnalytics() {

    const mainCam = createRef(null)

    return (
        <Container style={{paddingLeft: '2vw'}}>
            <h1><Text c="red">Crime Monitoring</Text></h1>

            <Grid gutter="md" style={{ width: '92vw', height: '80vh' }}>
                <Grid.Col span={8}>
                    <img ref={mainCam} id="main_cam" src="http://127.0.0.1:5000/video_feed_crime" alt="webcam" style={{ height: '440px', border: '2px solid red' }} />
                </Grid.Col>
                <Grid.Col span={4}>
                    <img src="http://127.0.0.1:5000/video_feed_crime" alt="webcam" style={{ height: '200px', border: '2px solid red' }} />
                </Grid.Col>
                <Grid.Col span={2}>
                </Grid.Col>
            </Grid>

        </Container>
    )
}
