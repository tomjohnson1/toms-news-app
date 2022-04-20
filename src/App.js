import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Topics from "./components/Topics";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
