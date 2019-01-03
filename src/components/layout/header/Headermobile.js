import React, { Component } from 'react'
import { Container, Menu, Responsive, Segment, Sidebar, Icon } from 'semantic-ui-react'
import LoginRegister from './LoginRegister'

export class Headermobile extends Component {

  state = {}
  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { sidebarOpened } = this.state
    return (
      <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <LoginRegister />
              </Menu>
            </Container>
          </Segment>

        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

export default Headermobile
