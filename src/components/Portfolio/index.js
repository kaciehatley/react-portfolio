import React from 'react'
// import { Form, Grid, Image, Segment } from 'semantic-ui-react'
import { Card, Segment, Image, Header } from 'semantic-ui-react'
import "./style.css"
import Github from "./github.png"
import Computer from "./computer.jpg"
import Pointer from "./pointer.png"
import Library from "./library.png"
import Directory from "./directory.png"
import Budget from "./budget.png"
import Workout from "./workout.png"
import Burger from "./burger.png"
import SimpleEats from "./simpleeats.png"

import { StyledButton, StyledImg, StyledIcon, Div } from "./styledComponents.js" 


const About = () => (
<Segment id="about">
    <Header as='h1' id="teamHeader">Project Portfolio</Header>
    <Image src={Computer}></Image>
    <br/>

    <Card.Group centered id="cardGroup">
    <Card>
      <Card.Content>
        <Card.Header>All Booked Library</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <StyledImg
          size='medium'
          src={Library}
        />
        <Card.Description>
          Used <strong>innovation and research skills</strong> to create project idea, configure beacons, learn new technologies, and much more.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui'>
        <a href="https://jodirhoades.github.io/portfolio/">
          <StyledButton>
            <StyledIcon src={Pointer}/>
            <Div>Live Site</Div>
          </StyledButton>
          </a>
          <a href="https://github.com/jodiRhoades">
          <StyledButton>
          <StyledIcon src={Github}/>
          <Div>Github Link</Div>
          </StyledButton>
          </a>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Simple Eats</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <StyledImg
          size='medium'
          src={SimpleEats}
        />
        <Card.Description>
          Used <strong>innovation and research skills</strong> to create project idea, configure beacons, learn new technologies, and much more.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui'>
        <a href="https://kaciehatley.github.io/simple-eats/index2.html">
          <StyledButton>
            <StyledIcon src={Pointer}/>
            <Div>Live Site</Div>
          </StyledButton>
          </a>
          <a href="https://github.com/kaciehatley/simple-eats">
          <StyledButton>
          <StyledIcon src={Github}/>
          <Div>Github Link</Div>
          </StyledButton>
          </a>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Progressive Budget Application</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <StyledImg
          size='medium'
          src={Budget}
        />
        <Card.Description>
          Used <strong>innovation and research skills</strong> to create project idea, configure beacons, learn new technologies, and much more.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui'>
        <a href="https://thawing-temple-47815.herokuapp.com/">
          <StyledButton>
            <StyledIcon src={Pointer}/>
            <Div>Live Site</Div>
          </StyledButton>
          </a>
          <a href="https://github.com/kaciehatley/budget-tracker">
          <StyledButton>
          <StyledIcon src={Github}/>
          <Div>Github Link</Div>
          </StyledButton>
          </a>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Fitness Tracker</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <StyledImg
          size='medium'
          src={Workout}
        />
        <Card.Description>
          Used <strong>innovation and research skills</strong> to create project idea, configure beacons, learn new technologies, and much more.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui'>
        <a href="https://tranquil-earth-53034.herokuapp.com/?id=5e63cb8c3e0bd50017283134">
          <StyledButton>
            <StyledIcon src={Pointer}/>
            <Div>Live Site</Div>
          </StyledButton>
          </a>
          <a href="https://github.com/kaciehatley/fitness-tracker">
          <StyledButton>
          <StyledIcon src={Github}/>
          <Div>Github Link</Div>
          </StyledButton>
          </a>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Eat-Da-Burger</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <StyledImg
          size='medium'
          src={Burger}
        />
        <Card.Description>
          Used <strong>innovation and research skills</strong> to create project idea, configure beacons, learn new technologies, and much more.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui'>
        <a href="https://github.com/kaciehatley/eat-da-burger">
          <StyledButton>
            <StyledIcon src={Pointer}/>
            <Div>Live Site</Div>
          </StyledButton>
          </a>
          <a href="https://github.com/kaciehatley/eat-da-burger">
          <StyledButton>
          <StyledIcon src={Github}/>
          <Div>Github Link</Div>
          </StyledButton>
          </a>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Employee Directory</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <StyledImg
          size='medium'
          src={Directory}
        />
        <Card.Description>
          Used <strong>React</strong> to create a directory that sorts and filters employees.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui'>
        <a href="https://desolate-ocean-13176.herokuapp.com/">
          <StyledButton>
            <StyledIcon src={Pointer}/>
            <Div>Live Site</Div>
          </StyledButton>
          </a>
          <a href="https://github.com/kaciehatley/employee-directory">
          <StyledButton>
          <StyledIcon src={Github}/>
          <Div>Github Link</Div>
          </StyledButton>
          </a>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
</Segment>
)

export default About