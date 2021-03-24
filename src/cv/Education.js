import React from "react";
import styled from "styled-components";
import { CvContainer, CvCardContainer } from "./CVReactFullpage";

export default function Education() {
  return (
    <CvContainer>
      <CvCardContainer>
        <h2>Utbildning</h2>

        <h3>Medieinstitutet Göteborg</h3>
        <h4>2020 - 2022</h4>
        <h5>Front End Developer</h5>

        <h3>Uppsala Universitet</h3>
        <h4>2020</h4>
        <h5>Dynamiska webbapplikationer (7.5 hp)</h5>

        <h3>Göteborgs universitet</h3>
        <h4>2017 - 2020</h4>
        <h5>Systemvetenskap: Kandidatexamen (180 hp)</h5>

        <h4>2016</h4>
        <h6>Juridisk grundkurs (15 hp)</h6>
        <h5>Psykologi: Fortsättningskurs (30 hp)</h5>

        <h4>2015</h4>
        <h5>Psykologi: Grundkurs (30 hp)</h5>
      </CvCardContainer>
    </CvContainer>
  );
}

const SpecialH5 = styled.h5`
  margin-bottom: .5rem;
`;