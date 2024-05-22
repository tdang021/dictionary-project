import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="App-container p-4">
        <header className="App-header pb-3">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="footer pt-2 text-center">
        This project is coded by Tiffany and is hosted on{" "}
        <a
          href="https://github.com/tdang021/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
