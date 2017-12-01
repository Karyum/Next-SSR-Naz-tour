import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 2rem;
  margin-left: 2%;
`;

const Name = styled.span`
  font-size: 2.25rem;
  color: #404040;
`;

const A = styled.a`
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.15s ease-in;
  color: #666;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
`;
const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      a1: '#282828',
      a2: '#666',
      a3: '#666'
    };

    this.handleAbout = this.handleAbout.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleTour = this.handleTour.bind(this);
  }

  handleAbout() {
    this.setState({ a1: '#282828', a2: '#666', a3: '#666' });
  }

  handleContact() {
    this.setState({ a3: '#282828', a1: '#666', a2: '#666' });
  }

  handleTour() {
    this.setState({ a2: '#282828', a3: '#666', a1: '#666' });
  }

  render() {
    return (
      <Wrapper>
        <NavWrapper>
          <NameWrapper>
            <Name>OUSAMA SALEH</Name>
          </NameWrapper>
          <LinksWrapper>
            <A
              onClick={this.handleAbout}
              href="#About"
              style={{ color: this.state.a1 }}
            >
              About
            </A>
            <A
              onClick={this.handleTour}
              href="#Tour"
              style={{ color: this.state.a2 }}
            >
              Tour
            </A>
            <A
              onClick={this.handleContact}
              href="#Contact"
              style={{ color: this.state.a3 }}
            >
              Contact
            </A>
          </LinksWrapper>
        </NavWrapper>
      </Wrapper>
    );
  }
}

export default NavBar;
