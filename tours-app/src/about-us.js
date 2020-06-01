import React, { Component } from "react";
import "./indexStyle.css";
import "./style.css";
import { Card, Button, Jumbotron, Container, CardGroup } from "react-bootstrap"; //import React Component
import goal0 from "./img/globe.jpg";
import goal1 from "./img/currency.jpg";
import goal2 from "./img/friends.jpg";

export class AboutUs extends Component {
  render() {
    return (
      <body>
        <main>
          <section>
            <div>
              <h2 className='subtitles'>GOALS</h2>
            </div>
            <div className='goals cardGroup row justify-content-center'>
              <CardGroup>
                <Card>
                  <Card.Img variant='top' src={goal0} />
                  <Card.Body>
                    <Card.Text>
                      Have access to flight and hotels all in one place{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant='top' src={goal1} />
                  <Card.Body>
                    <Card.Text>
                      Customize your ride day to day and keep track of your
                      budget and activities{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant='top' src={goal2} />
                  <Card.Body>
                    <Card.Text>
                      Grab your friends and step on those bucket list goals
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </section>

          <div className='test'>
            <div className='videoDiv'>
              <video autoplay muted loop>
                <source src='img/bali_video.mp4' type='video/mp4' />
              </video>
            </div>

            <div className='timeline'>
              <div className='hello left'>
                <div className='content'>
                  <p className='headTimeline'>Ideate</p>
                  <p>Grab your friends and step on those bucket list goals</p>
                </div>
              </div>

              <div className='hello right'>
                <div className='content'>
                  <p className='headTimeline'>Plan</p>
                  <p>
                    Customize your ride day to day and keep track of your budget
                    and activities
                  </p>
                </div>
              </div>

              <div className='hello left'>
                <div className='content'>
                  <p className='headTimeline'>Book</p>
                  <p>Have access to flight and hotels all in one place</p>
                </div>
              </div>

              <div className='hello right'>
                <div className='content'>
                  <p className='headTimeline'>Excecute</p>
                  <p>
                    Share the plan with your friends. Lock the house and out you
                    walk with everything planned in one place
                  </p>
                </div>
              </div>

              <div className='hello left'>
                <div className='content'>
                  <p className='headTimeline'>Envision</p>
                  <p>Keep on adding to your bucket list and enjoy the ride</p>
                </div>
              </div>
            </div>
          </div>

          <div className='citation'>
            <blockquote>
              <footer>
                The timeline code was learned on{" "}
                <cite>
                  <a href='https://www.w3schools.com/howto/howto_css_timeline.asp'>
                    W3Schools
                  </a>
                </cite>
              </footer>
            </blockquote>
          </div>
        </main>
      </body>
    );
  }
}
export default AboutUs;
