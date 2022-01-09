import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Animated } from "../../components/Animated";
import { Answer } from "../../components/Answer";

const Code = dynamic(() => import("../../components/Code"));

const Challange2: NextPage = () => {
  return (
    <Animated>
      <Answer
        title="Display array of users to browser"
        exercise="Challenge: Display all users to the browser Small Hint: Use array map
          with react key"
      >
        <Code delay={0.2} language="HTML">{`<div id="root"></div>`}</Code>

        <Code delay={0.3} language="CSS">
          {`h3 {
  margin-left: 20px;
  margin-bottom: 0;
}

ul {
  margin-top: 5px;
}`}
        </Code>

        <Code delay={0.4} language="JSX">
          {`const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

function App() {
  return (
    <>
      <h3>User names</h3>
      <ul>
        {users.map(user => (<li key={user.id}>{user.name}</li>}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
    `}
        </Code>
      </Answer>
    </Animated>
  );
};

export default Challange2;
