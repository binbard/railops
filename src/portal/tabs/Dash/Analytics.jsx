import { Container } from "@mantine/core"

export function Analytics(){

    return(
        <Container>
            <h1>Analytics</h1>
            <img src="http://127.0.0.1:5000/video_feed" alt="webcam" style={{width:'500px', height: '350px', border: '5px solid red'}}/>

        </Container>
    )
}
