import React from 'react'
import styled from "styled-components"
import { accordionList, AccordionType } from '../../utils/constants'
import iconArrowDown from "images/icon-arrow-down.svg";
import { lightGrayishBlue } from 'utils/variables';
import Accordion from 'components/Accordion/Accordion';


const StyledAccordionList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 75px;
  position: relative;
  z-index: 10;

  h1 {
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
  }
`

const AccordionList = () => {
  return (
    <StyledAccordionList className="accordion-list">
      <h1>FAQ</h1>

      {
        accordionList.map((accordion, i) => {
          if (i == 0) {
            return <Accordion key={accordion.headline + "-" + i} {...accordion} isOpen />
          }

          return <Accordion key={accordion.headline + "-" + i} {...accordion} />
        })
      }
    </StyledAccordionList>
  )
}

export default AccordionList
