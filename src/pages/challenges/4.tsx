import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";
import { Answer } from "../../components/Answer";
import Code from "../../components/Code";

const Challange4: NextPage = () => {
  return (
    <Animated>
      <Answer
        title="2 way data binding in ReactJS"
        exercise="Challenge: User should be able to type in any characters on input and
          those character should show in the browser."
      >
        <Code delay={0.2} language="JSX">
          {`function App() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Enter Text" />
      <p>{value}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`}
        </Code>
        <Code delay={0.3} language="HTML">
          {`<h4>Data Binding Exercise</h4>
<div id="root"></div>`}
        </Code>
        <Code delay={0.4} language="CSS">
          {`h4 {
  margin-top: 20px;
}

h4,
div {
  text-align: left;
  margin-left: 20px;
}

input {
  padding: 5px;
  margin-bottom: 10px;
  width: 200px;
  background-color: #fff;
  border-color: #dbdbdb;
  color: #363636;
  box-shadow: inset 0 1px 2px rgb(10 10 10 / 10%);
  max-width: 100%;
}
`}
        </Code>
      </Answer>
    </Animated>
  );
};

export default Challange4;
