/* REACT IMPORTS */
import { useEffect } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/* ROUTES */
import Homepage from "pages/index";

/* STYLES */
import "styles/globals.css";

/* SCROLL TO TOP */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
