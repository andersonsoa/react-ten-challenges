import dynamic from "next/dynamic";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";
import { Answer } from "../../components/Answer";

const Code = dynamic(() => import("../../components/Code"));

const Challange1: NextPage = () => {
  return (
    <Animated>
      <Answer
        title="Display Simple JSX"
        exercise="Challenge: Display `JSX is cool!` as an output"
      >
        <Code delay={0.2} language="HTML">{`<div id="root"></div>`}</Code>

        <Code delay={0.3} language="CSS">
          {"div { \n  padding: 10px;\n}"}
        </Code>

        <Code delay={0.4} language="JSX">
          {`function App() {
  return <div>JSX is cool!</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
            `}
        </Code>
      </Answer>
    </Animated>
  );
};

export default Challange1;
