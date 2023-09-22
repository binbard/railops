import { Container } from "@mantine/core"

// import "./support.css"

export function Support() {
    return (
        <Container>
            <header>
                <h1>About Us</h1>
            </header>

            <section class="content">
                <h2>Our Mission</h2>
                <p>In response to the significant issue of crowd management and crimes in the country, our project aims to revolutionize safety and efficiency within various organizations. We leverage existing CCTV networks to enhance security measures, reduce crime incidents, and improve workforce productivity.</p>

                <h2>Problem Statement</h2>
                <p>Our project addresses the challenge of using existing CCTV networks for crowd management, crime prevention, and workforce monitoring through advanced AI and machine learning technologies.</p>

                <h2>Our Solution</h2>
                <p>Developed in collaboration with the Ministry of Railways, our web-based application is a pioneering solution in the context of railway safety and operational efficiency. It provides management authorities with three critical capabilities:</p>
                <ul>
                    <li><strong>Precise Crowd Management:</strong> We employ Deep Learning algorithms and ML algorithms to accurately count crowds and predict future crowd numbers.</li>
                    <li><strong>Lost Person Identification:</strong> Our advanced facial recognition technology swiftly locates missing individuals in crowded areas, enhancing safety.</li>
                    <li><strong>Crime Detection:</strong> Our system can identify potential threats, such as guns or rifles, in video feeds, improving security.</li>
                    <li><strong>Efficient Work Monitoring:</strong> We offer tools to track employee attendance and working hours, boosting workforce management.</li>
                </ul>

                <h2>Our Vision</h2>
                <p>We are committed to creating safer, more efficient communities and workplaces for the future. Our solution combines technical expertise with ethical safeguards to redefine public safety and workforce management.</p>
            </section>

            <footer>
                <p>&copy; 2023 High-Flyers. All rights reserved.</p>
            </footer>

        </Container>
    )
}
