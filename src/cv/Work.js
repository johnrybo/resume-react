import React from "react";
import { CvContainer, CvCardContainer } from "./Cv";

export default function Work() {
  return (
    <CvContainer>
      <CvCardContainer>
        <h2>Arbetslivserfarenhet</h2>

        <h3>Fictive Reality</h3>
        <h4>2021</h4>
        <h5>Praktik: Frontend-utvecklare</h5>

        <h3>PostNord</h3>
        <h4>2010 -</h4>
        <h5>Brevbärare</h5>

        <h3>Göteborgs universitet</h3>
        <h4>2018</h4>
        <h5>Studenthandledare</h5>
      </CvCardContainer>
    </CvContainer>
  );
}
