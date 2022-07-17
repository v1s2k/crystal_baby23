import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/gangsta-round.png";
import zenly from "../../Assets/icons8-zenly.svg";
import vk from "../../Assets/icons8-vk-в-круге-256.svg";
import tiktok from "../../Assets/icons8-тикток-256.svg";
import ints1 from "../../Assets/icons8-instagram-256.svg";




function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ПРИВЕТСТВУЮ</h1>
            <p>
              My socials<span className="purple">             HERE </span> bitches
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://vk.com/crystal.baby23">
                  <img border="0" alt="pic" src={vk}  width="150" height="150"/>

                </a>

              </li>
              <li className="social-icons">
                <a href="https://zen.ly/crystal.baby23">
                  <img border="0" alt="pic" src={zenly}  width="150" height="150"/>

                </a>
              </li>
              <li className="social-icons">
                <a href="https://vt.tiktok.com/ZSR8j7Rf3/">
                  <img border="0" alt="pic" src={tiktok}  width="150" height="150"/>

                </a>
              </li>
              <li className="social-icons">
                <a href="https://instagram.com/x.vik.aaa?igshid=YmMyMTA2M2Y=">
                  <img border="0" alt="pic" src={ints1}  width="150" height="150"/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
