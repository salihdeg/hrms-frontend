import "./App.css";
import MainDashboard from "./layouts/MainDashboard";
import Navi from "./layouts/Navi";
import { Container } from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main-container">
        <MainDashboard  />
      </Container>
      TODO: Buraya Footer Yaz
    </div>
  );
}

export default App;
