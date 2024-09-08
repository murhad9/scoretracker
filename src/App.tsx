import "./App.css";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Micro+5&display=swap"
        rel="stylesheet"
      ></link>
      <header className="App-header">
        <HeaderSection />
      </header>
    </div>
  );
}

export default App;
