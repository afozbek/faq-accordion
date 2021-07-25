import React from 'react'
import styled from "styled-components"
import { AccordionType } from '../../utils/constants'
import iconArrowDown from "images/icon-arrow-down.svg";
import { lightGrayishBlue, softRed, veryDarkGrayishBlue } from 'utils/variables';


const StyledAccordion = styled.div`
  border-bottom: 2px solid ${lightGrayishBlue};
  padding: 15px 0;
  color: ${veryDarkGrayishBlue};
  text-align: start;
  cursor: pointer;
  width: 100%;

  &:hover .headline {
    color: ${softRed};
  }

  .headline {
    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: all .7s;

    img {
      transform: rotate(180deg);
    }
  }

  .desc {
    font-size: 10px;
    visibility: hidden;
    opacity: 0;
    display: none;

    transition: all 0.7;

    &.open {
      visibility: visible;
      opacity: 1;
      display: block;
      margin-top: 10px;
    }
  }
`

interface Props {
  isOpen?: boolean
}


const Accordion = ({ headline, description, isOpen }: AccordionType & Props) => {
  console.log({ isOpen })
  return (
    <StyledAccordion className="accordion">
      <p className="headline">
        {headline}
        <img src={iconArrowDown} alt="Icon Arrow Down" />
      </p>
      <p className={`desc ${isOpen ? "open" : ""}`}>
        {description}
      </p>
    </StyledAccordion>
  )
}

export default Accordion
