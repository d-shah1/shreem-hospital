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

/* NORMAL PAGE ROUTES */
import Homepage from "pages/index";
import AboutUs from "pages/about-us";
import BookAppointment from "pages/book-appointment";

/* ORTHOPAEDIC PAGES ROUTES */
import KneeJointReplacement from "pages/orthopaedic/knee-joint-replacement";
import HipJointReplacement from "pages/orthopaedic/hip-joint-replacement";
import ShoulderJointReplacement from "pages/orthopaedic/shoulder-joint-replacement";
import OrthoBiologicTreatments from "pages/orthopaedic/ortho-biologic-treatments";
import ShoulderArthroscopy from "pages/orthopaedic/shoulder-arthroscopy";
import KneeArthroscopy from "pages/orthopaedic/knee-arthroscopy";
import AnkleArthroscopy from "pages/orthopaedic/ankle-arthroscopy";
import ElbowArthroscopy from "pages/orthopaedic/elbow-arthroscopy";

/* EYE CARE TREATMENT PAGES ROUTES */
import GlaucomaManagement from "pages/eye-care/glaucoma-management";
import RetinalDiseaseManagement from "pages/eye-care/retinal-disease-management";
import PediatricEyeCare from "pages/eye-care/pediatric-eye-care";
import OpticNerveDisorders from "pages/eye-care/optic-nerve-related-disorders";
import CataractSurgery from "pages/eye-care/cataract-surgery";
import ComprehensiveEyeCare from "pages/eye-care/comprehensive-eye-care";
import LasikTreatment from "pages/eye-care/lasik-treatment";

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
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route
              path="/knee-joint-replacement"
              element={<KneeJointReplacement />}
            />
            <Route
              path="/hip-joint-replacement"
              element={<HipJointReplacement />}
            />
            <Route
              path="/shoulder-joint-replacement"
              element={<ShoulderJointReplacement />}
            />
            <Route
              path="/ortho-biologic-treatments"
              element={<OrthoBiologicTreatments />}
            />
            <Route
              path="/shoulder-arthroscopy"
              element={<ShoulderArthroscopy />}
            />
            <Route path="/knee-arthroscopy" element={<KneeArthroscopy />} />
            <Route path="/ankle-arthroscopy" element={<AnkleArthroscopy />} />
            <Route path="/elbow-arthroscopy" element={<ElbowArthroscopy />} />
            <Route
              path="/glaucoma-management"
              element={<GlaucomaManagement />}
            />
            <Route
              path="/retinal-disease-management"
              element={<RetinalDiseaseManagement />}
            />
            <Route path="/pediatric-eye-care" element={<PediatricEyeCare />} />
            <Route
              path="/optic-nerve-disorders"
              element={<OpticNerveDisorders />}
            />
            <Route path="/cataract-surgery" element={<CataractSurgery />} />
            <Route
              path="/comprehensive-eye-care"
              element={<ComprehensiveEyeCare />}
            />
            <Route path="/lasik-treatment" element={<LasikTreatment />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
