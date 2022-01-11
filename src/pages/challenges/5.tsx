import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";
import { Answer } from "../../components/Answer";
import Code from "../../components/Code";

const Challange5: NextPage = () => {
  return (
    <Animated>
      <Answer
        title="Disable a button"
        exercise="Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character."
      >
        <Code delay={0.2} language="JSX">
          {`function App() {
  const [value, setValue] = React.useState("");

  const isDisabled = value.length === 0;
  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button disabled={isDisabled}>Submit</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`}
        </Code>
        <Code delay={0.3} language="HTML">
          {"<div id='root'></div>"}
        </Code>
        <Code delay={0.4} language="CSS">
          {`div {
  padding: 10px;
}
button {
  margin: 0 5px;
}`}
        </Code>
      </Answer>
    </Animated>
  );
};

export default Challange5;
