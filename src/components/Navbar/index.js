import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./style.css"
import Logo from "./Kacie Hatley.png"

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id="navbar">
      <Menu stackable>
        <Menu.Item id="logo">
          <a href="/">
            <Image src={Logo}></Image>
          </a>
        </Menu.Item>
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          href="/"
        >
          About Me
        </Menu.Item>
        
        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
          href="/portfolio"
        >
          Projects
        </Menu.Item>
        <Menu.Item
          name='contact'
          active={activeItem === 'view'}
          onClick={this.handleItemClick}
          href="/contact"
        >
          Contact
        </Menu.Item>
      </Menu>
      </div>
    )
  }
}