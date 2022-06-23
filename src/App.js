import DarkMode from "./components/DarkMode";

import Hello from "./components/Hello";

function App() {
  return (
    <div className="container">
      <header>
        <h1>React Dark Mode</h1>
        <DarkMode />
      </header>
      <Hello />
      <footer>
        <p>A simple react dark mode ui system using css variables and javascript local storage.</p>
      </footer>
    </div>
  );
}

export default App;
