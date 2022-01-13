import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";
import { Answer } from "../../components/Answer";
import Code from "../../components/Code";

const Challange9: NextPage = () => {
  return (
    <Animated>
      <Answer
        title="Create Counter App"
        exercise="Challenge: Pressing `Increment` button should increase the counter count by one. Pressing `Decrement` button should decrease the counter count by one."
      >
        <Code delay={0.2} language="JSX">
          {`function App() {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
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
input {
  display: block;
  padding: 5px;
  margin-bottom: 5px;
  width: 120px;
}
`}
        </Code>
      </Answer>
    </Animated>
  );
};

export default Challange9;
