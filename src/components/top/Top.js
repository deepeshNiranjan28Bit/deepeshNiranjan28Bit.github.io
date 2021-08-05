import React from "react";
import "../../styles/top.css";
import { Icon } from "rsuite";

function top() {
  return (
    <div className="topDiv">
      <div className="topInnerDiv">
        <h1
          style={{
            fontFamily: "'Libre Baskerville', serif",
            marginBottom: "0",
          }}
        >
          Hello, I am
        </h1>
        <br />
        <h1
          style={{ fontFamily: "'Libre Baskerville', serif", marginTop: "0" }}
        >
          Deepesh Niranjan
        </h1>
        <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here'.
        </p>

        <Icon
          icon="arrow-circle-down"
          size="4x"
          style={{ color: "rgb(241, 241, 241)" }}
        />
      </div>
    </div>
  );
}

export default top;
