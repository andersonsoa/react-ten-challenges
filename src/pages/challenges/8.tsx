import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";
import { Answer } from "../../components/Answer";
import Code from "../../components/Code";

const Challange8: NextPage = () => {
  return (
    <Animated>
      <Answer
        title="Sum of Two Numbers"
        exercise="Challenge: Make this app work like a calculator that can add two
          numbers. Functionality: When user place numbers on first and second
          input and hit the button. The sum should appear on the `Total: ` as an
          output."
      >
        <Code delay={0.2} language="JSX">
          {`
function App() {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();
  const [total, setTotal] = React.useState(0);

  const handleSum = () => {
    const sum = +number1 + +number2;

    setTotal(sum);
  };

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        value={number1}
        onChange={e => setNumber1(e.target.value)}
        placeholder="First Number"
        type="number"
      />
      <input
        value={number2}
        onChange={e => setNumber2(e.target.value)}
        placeholder="Second Number"
        type="number"
      />

      <button onClick={handleSum}>Add Two Numbers</button>
      <p>Total: {total}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`}
        </Code>
        <Code delay={0.3} language="HTML">{`<div id="root"></div>`}</Code>
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

export default Challange8;
