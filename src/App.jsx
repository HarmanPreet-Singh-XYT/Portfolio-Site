import { Routes, Route } from "react-router-dom";

import PrivacyPolicy from "./pages/PrivacyPolicy"; // Make sure you import PrivacyPolicy
import Home from "./pages/Home";

const App = () => {
  return (
      <Routes>
        <Route path="/pingroute/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
