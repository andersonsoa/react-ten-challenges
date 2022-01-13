import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Animated } from "../../components/Animated";
import { Answer } from "../../components/Answer";
import Code from "../../components/Code";

const Challange10: NextPage = () => {
  return (
    <Animated>
      <Answer
        title="Fetch data from an API"
        exercise="Challenge: Given the url above, make this app fetch the data and display them in the browser (Small Hint: use `React.useEffect and fetch api`)"
      >
        <Code delay={0.2} language="JSX">
          {`function App() {
  const [userData, setUserData] = React.useState({});

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => {
        const { name, website, email, phone } = json;
        setUserData({ name, website, email, phone });
      })
  }, []);
  // No need to touch code below
  return (
    <div className="App">
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>{" "}
        {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
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
p {
  margin: 10px 0;
}`}
        </Code>
      </Answer>
    </Animated>
  );
};

export default Challange10;
