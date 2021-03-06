import { NextPage } from "next";
import { Animated } from "../../components/Animated";
import { Answer } from "../../components/Answer";
import Code from "../../components/Code";

const Challange3: NextPage = () => {
  return (
    <Animated>
      <Answer
        title="Show/Hide Element on Screen"
        exercise="Challenge: Make the button functional A click on button should toggle
          (show/hide) the string `Toggle Challenge` each time it is pressed"
      >
        <Code delay={0.2} language="JSX">
          {`function App() {
  const [show, setShow] = React.useState(true);
  const text = show ? 'Hide Element Below' : 'Show Element Below'
  return (
    <>
      <button onClick={() => setShow(!show)}>{text}</button>
      { show && <div>Toggle Challenge..</div>}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`}
        </Code>
        <Code delay={0.3} language="HTML">
          {"<div id='root'></div>"}
        </Code>
        <Code delay={0.4} language="CSS">
          {`button {
  margin-bottom: 10px;
}

#root {
  padding: 10px;
}
`}
        </Code>
      </Answer>
    </Animated>
  );
};

export default Challange3;
