import "./App.css";
import Homepage from "./pages/homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
