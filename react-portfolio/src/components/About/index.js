import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'
import Headshot from "./headshot.jpg"
import "./style.css"
import Action1 from "./Enlight68.jpg"
import Action2 from "./Enlight69.jpg"
import Action3 from "./Enlight70.jpg"
import { StyledImage } from "./styledComponents.js"

const About = () => (
  <Segment id="header">
    <Header as='h1'>About Me</Header>
    <Image src={Headshot} size='small' circular centered></Image>
    <Header as='h2'>Kacie Hatley</Header>
    <Header as='h4'>(704)985-2663</Header>
    <Header as='h4'>kaciehatley@gmail.com</Header>
    <p>Hello! My name is Kacie Hatley. I am an aspiring developer currently enrolled at the UNC Charlotte Coding Bootcamp. I anticipate to complete the program in April 2020.</p>
    <br/>
    <p>My background is in elementary education. After graduating from Wingate University in 2016, I taught 1st grade for one year and then became a 4-H youth development agent for NC State University. I love teaching and inspiring others to learn. Currently my job requires me to administer relevant youth development programs for kids ages 5-18.</p>
    <br/>
    <p>When the Department of Labor published its statistics for projected growth in the developer job market, I knew we needed a kids programming class in our community. After an exhausting and disappointing search for a volunteer teacher with a background in coding, I decided to learn it myself. I have been leading an afterschool coding club since January 2019, learning with the kids as we go. The kids use Scratch and basic Python to manipulate a raspberry pi. I also go into schools to introduce coding concepts and computational thinking skills with basic Scratch projects.</p>
    <br/>
    <StyledImage src={Action1} size='medium' rounded />
    <StyledImage src={Action2} size='medium' rounded />
    <StyledImage src={Action3} size='medium' rounded />
    <br />
    <p>My next step is getting an internship/job as a full stack developer. I hope to gain enough knowledge to mentor/teach others. My passion is helping others, and I hope to do that with coding.</p>
    <br/>
    <p>When I am not coding or keeping the tiny humans alive, you might find me rock-climbing, reading, traveling, or playing bluegrass music.</p>
  </Segment>
)

export default About