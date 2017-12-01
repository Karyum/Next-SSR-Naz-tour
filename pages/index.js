import styled from 'styled-components';

import About from '../components/about.js';
import NavBar from '../components/nav-bar.js';
import Tour from '../components/tour.js';
import Contact from '../components/contact.js';

const Index = () => (
  <div>
    <NavBar />
    <About />
    <Tour />
    <Contact />
  </div>
);

export default Index;
