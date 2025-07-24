import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Waitlist } from "./screens/Waitlist";
import { About } from "./screens/About";

export const App = (): JSX.Element => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Waitlist />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};