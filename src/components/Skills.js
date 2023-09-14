import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import meter6 from "../assets/img/meter6.png";
import meter7 from "../assets/img/meter7.png";
import meter8 from "../assets/img/meter8.png";
import colorSharp from "../assets/img/color-sharp.png";
import rocket3 from "../assets/img/rocket3.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
          <section className="skill" id="skills">
            <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p> I’m currently learning React, React Native and English </p>
                        <Carousel responsive={ responsive } infinite={ true } className="skill-slider">
                            <div className="item" >
                                <img src={meter1} alt="Image" />
                                <h5>Advanced Javascript</h5>
                            </div>
                            <div className="item" >
                                <img src={meter2} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item" >
                                <img src={meter3} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item" >
                                <img src={meter4} alt="Image" />
                                <h5>VueJS</h5>
                            </div> 
                            <div className="item" >
                                <img src={meter5} alt="Image" />
                                <h5>Node</h5>
                            </div>  
                            <div className="item" >
                                <img src={meter6} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>  
                            <div className="item" >
                                <img src={meter7} alt="Image" />
                                <h5>MySQL</h5>
                            </div>  
                            <div className="item" >
                                <img src={meter8} alt="Image" />
                                <h5>Firebase</h5>
                            </div>  
                        </Carousel>
                    </div>
                </Col>
            </Row>
            </Container>
            <img className="background-image" src={rocket3} />
            <img className="background-image-left" src={colorSharp} />
          </section>
      )
  
}

export default Skills