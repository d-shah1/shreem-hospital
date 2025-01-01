/* REACT IMPORTS */
import { useEffect } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/* LAYOUT FILES */
import Layout from "layout";

/* ROUTES */
import Homepage from "pages/index";
import AboutUs from "pages/about-us";
import BookAppointment from "pages/book-appointment";
import KneeJointReplacement from "pages/knee-joint-replacement";
import HipJointReplacement from "pages/hip-joint-replacement";
import ShoulderJointReplacement from "pages/shoulder-joint-replacement";
import OrthoBiologicTreatments from "pages/ortho-biologic-treatments";
import ShoulderArthroscopy from "pages/shoulder-arthroscopy";
import KneeArthroscopy from "pages/knee-arthroscopy";
import AnkleArthroscopy from "pages/ankle-arthroscopy";
import ElbowArthroscopy from "pages/elbow-arthroscopy";

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
          <Route
            path="/"
            element={
              <Layout>
                <Homepage />
              </Layout>
            }
          />
          <Route
            path="/about-us"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="/book-appointment"
            element={
              <Layout>
                <BookAppointment />
              </Layout>
            }
          />
          <Route
            path="/knee-joint-replacement"
            element={
              <Layout>
                <KneeJointReplacement />
              </Layout>
            }
          />
          <Route
            path="/hip-joint-replacement"
            element={
              <Layout>
                <HipJointReplacement />
              </Layout>
            }
          />
          <Route
            path="/shoulder-joint-replacement"
            element={
              <Layout>
                <ShoulderJointReplacement />
              </Layout>
            }
          />
          <Route
            path="/ortho-biologic-treatments"
            element={
              <Layout>
                <OrthoBiologicTreatments />
              </Layout>
            }
          />
          <Route
            path="/shoulder-arthroscopy"
            element={
              <Layout>
                <ShoulderArthroscopy />
              </Layout>
            }
          />
          <Route
            path="/knee-arthroscopy"
            element={
              <Layout>
                <KneeArthroscopy />
              </Layout>
            }
          />
          <Route
            path="/ankle-arthroscopy"
            element={
              <Layout>
                <AnkleArthroscopy />
              </Layout>
            }
          />
          <Route
            path="/elbow-arthroscopy"
            element={
              <Layout>
                <ElbowArthroscopy />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
