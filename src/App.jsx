import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

// PRODUCTS
import BodyCare from "./pages/Products/BodyCare";
import HairCare from "./pages/Products/HairCare";
import GiftSets from "./pages/Products/GiftSets";

import ProductDetails from "./pages/ProductDetails/ProductDetails";

// CUSTOMIZATION
import PrivateLabel from "./pages/Customization/PrivateLabel";
import Packaging from "./pages/Customization/Packaging";
import Fragrance from "./pages/Customization/Fragrance";

// SUSTAINABILITY
import EcoMaterials from "./pages/Sustainability/EcoMaterials";
import RefillProgram from "./pages/Sustainability/RefillProgram";
import Certifications from "./pages/Sustainability/Certifications";

// B2B
import Hotels from "./pages/B2B/Hotels";
import Resorts from "./pages/B2B/Resorts";
import Corporate from "./pages/B2B/Corporate";

// ABOUT
import AboutUs from "./pages/About/AboutUs";
import Blog from "./pages/About/Blog";
import Mission from "./pages/About/Mission";

// CONTACT
import ContactUs from "./pages/Contact/ContactUs";
import Enquiry from "./pages/Contact/Enquiry"
import Locations from "./pages/Contact/Locations";

function App() {
  return (
    <>
      <Header />

      <main style={{ marginTop: "70px", minHeight: "80vh" }}>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* PRODUCTS */}
          <Route path="/body-care" element={<BodyCare />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/hair-care" element={<HairCare />} />
          <Route path="/gift-sets" element={<GiftSets />} />

          {/* CUSTOMIZATION */}
          <Route path="/private-label" element={<PrivateLabel />} />
          <Route path="/packaging" element={<Packaging />} />
          <Route path="/fragrance" element={<Fragrance />} />

          {/* SUSTAINABILITY */}
          <Route path="/eco-materials" element={<EcoMaterials />} />
          <Route path="/refill-program" element={<RefillProgram />} />
          <Route path="/certifications" element={<Certifications />} />

          {/* B2B */}
          <Route path="/b2b-hotels" element={<Hotels />} />
          <Route path="/b2b-resorts" element={<Resorts />} />
          <Route path="/b2b-corporate" element={<Corporate />} />

          {/* ABOUT */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/mission" element={<Mission />} />

          {/* CONTACT */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
