import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

export default function ReactFullpageWrapper(props) {
  return (
    <ReactFullpage
      licenseKey={"8F15EDB4-2CFC4019-AFB2C191-710C6599"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
              {props.children}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}