import AppLayout from "./layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Specialities from "./page/Specialities";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/specialitites" element={<Specialities />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
