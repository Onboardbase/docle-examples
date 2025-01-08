import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DocleChat } from "@docle/chat/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DocleChat
        appName="Docle Chat"
        apiToken="dsk_xxxxxxxxxxx"
        suggestionQuestions="How to use Docle Chat?,What is Docle Chat?,How to get started with Docle Chat?,What are the features of Docle Chat?"
        style={{
          textAlign: "start",
        }}
      />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
