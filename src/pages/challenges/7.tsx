import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";
import { Answer } from "../../components/Answer";
import Code from "../../components/Code";

function Child() {
  return <div>This is children content</div>;
}

// Add code only here
function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}

const Challange7: NextPage = () => {
  return (
    <Animated>
      <Answer
        title="Dynamically add child components (React Children)"
        exercise="Challenge: Show entire Child component content inside Parent component. Only add code on Parent Component below"
      >
        <Code delay={0.2} language="JSX">
          {`function Child() {
  return <div>This is children content</div>;
}

// Add code only here
function Parent({ children }) {
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
}

function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`}
        </Code>
        <Code delay={0.3} language="HTML">
          {`<div id="root"></div>`}
        </Code>
        <Code delay={0.4} language="CSS">
          {`div {
  padding: 10px;
}
button {
  margin: 10px 0;
  padding: 5px 10px;
}

.wrapper {
  padding: 10px;
  border: 2px solid #efefef;
  margin-bottom: 10px;
}

.box-wrapper {
  border: 2px solid #f76cb2;
  width: max-content;
}
`}
        </Code>
      </Answer>
    </Animated>
  );
};

export default Challange7;
