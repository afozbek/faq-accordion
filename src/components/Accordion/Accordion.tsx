import React from 'react'
import styled from "styled-components"
import { AccordionType } from '../../utils/constants'
import iconArrowDown from "images/icon-arrow-down.svg";


const StyledAccordion = styled.div`
  border-bottom: 1px solid #ccc;

  .headline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Accordion = ({ headline, description }: AccordionType) => {
  return (
    <StyledAccordion className="accordion">
      <p className="headline">
        {headline}
        <img src={iconArrowDown} alt="Icon Arrow Down" />
      </p>
      <p className="desc">
        {description}
      </p>
    </StyledAccordion>
  )
}

export default Accordion
