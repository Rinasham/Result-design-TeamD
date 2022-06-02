import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";
import { Rank } from "./Rank";
import { RankingTable } from "./Table";
import styles from "./result.module.css";

const App = () => (
  <Container className={styles.container}>
    <h1 className={styles.title}>Result</h1>
    <Rank />
    <RankingTable />
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(<App />, document.getElementById("root"));
