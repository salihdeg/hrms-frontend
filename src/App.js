import "./App.css";
import MainDashboard from "./layouts/MainDashboard";
import Navi from "./layouts/Navi";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import FindJobDashboard from "./layouts/FindJobDashboard";
import JobAdvertisementDetail from "./pages/JobAdvertisementDetail";
import LoginDashboard from "./layouts/LoginDashboard";
import { ToastContainer } from "react-toastify";
import JobAdvertisementAdd from "./pages/JobAdvertisementAdd";
import EmployerDashboard from "./layouts/EmployerDashboard";

function App() {

  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <Navi />
      <Container className="main-container">
        <Route exact path="/" component={MainDashboard} />
        <Route exact path="/control/employer" component={EmployerDashboard} />
        <Route exact path="/login" component={LoginDashboard} />
        <Route exact path="/register/worker" component={LoginDashboard} />
        <Route exact path="/advertisements" component={FindJobDashboard} />
        <Route exact strict path="/advertisements/:id" component={JobAdvertisementDetail} />
        <Route exact strict path="/advertisement/add" component={JobAdvertisementAdd} />
      </Container>
      {/* TODO: Buraya Footer Yaz */}
    </div>
  );
}

export default App;
