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
        <Code language="HTML">{"<div id='root'></div>"}</Code>
        <Code language="CSS">
          {`button {
  margin-bottom: 10px;
}

#root {
  padding: 10px;
}
`}
        </Code>
        <Code language="JSX">
          {`function App() {
  const [] = React.useState(true);

  return (
    <>
      <button>Hide Element Below</button>

      <div>Toggle Challenge</div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`}
        </Code>
      </Answer>
    </Animated>
  );
};

export default Challange3;
