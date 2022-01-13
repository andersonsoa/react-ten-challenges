import { NextPage } from "next";
import { Animated } from "../../components/Animated";
import { Answer } from "../../components/Answer";
import Code from "../../components/Code";

const Challange6: NextPage = () => {
  return (
    <Animated>
      <Answer
        title="Update the parent stater"
        exercise="Challenge: Parent text (I need to be updated from my child) should be updated when Child button below is clicked. Feel free to use any string to update the parent's current string."
      >
        <Code delay={0.2} language="JSX">
          {`function Child({ onClick }) {
  return (
    <>
      <div>Child</div>
      <button onClick={onClick}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  const handleValue = () => {
    setValue("I've been updated on my child")
  }

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child onClick={handleValue} />
      </div>
    </>
  );
}

ReactDOM.render(<Parent />, document.getElementById("root"));`}
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

export default Challange6;
