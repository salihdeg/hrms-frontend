import "./App.css";
import MainDashboard from "./layouts/MainDashboard";
import Navi from "./layouts/Navi";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import FindJobDashboard from "./layouts/FindJobDashboard";
import JobAdvertisementDetail from "./pages/JobAdvertisementDetail";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main-container">
        <Route exact path="/" component={MainDashboard} />
        <Route exact path="/advertisements" component={FindJobDashboard} />
        <Route path="/advertisements/:id" component={JobAdvertisementDetail} />
      </Container>
      {/* TODO: Buraya Footer Yaz */}
    </div>
  );
}

export default App;
