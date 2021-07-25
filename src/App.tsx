import Accordion from 'components/Accordion';
import React from 'react';
import styled from 'styled-components';
import { accordionList } from './utils/constants';
import IllustrationBoxDesktop from "images/bg-pattern-desktop.svg";

const StyledApp = styled.div`
    height: 100vh;
    position: relative;
    background: ${props => props.theme.lightTheme};
  `

const StyledAccordionList = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background: url(${IllustrationBoxDesktop});
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`

const App = () => {
  return (
    <StyledApp className="App">
      <StyledAccordionList className="accordionList">


        {
          accordionList.map((accordion, i) => {
            return <Accordion key={accordion.headline + "-" + i} {...accordion} />
          })
        }
      </StyledAccordionList>

      {/* Author Section */}
      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Abdullah Furkan Özbek</a>.
      </div> */}
    </StyledApp>
  );
}

export default App;
