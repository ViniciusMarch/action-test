import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src='https://play-lh.googleusercontent.com/xToRFw-mqA18HtizgutV0K1IouakfR8iJ3PW75u-1n1oxbP7hVfBMlgHWIwuUYKKS_s'
          className='App-logo'
          alt='logo'
        />
        <p>FFFF ZCLIIIII</p>
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
          {" | "}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'>
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
