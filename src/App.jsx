import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
  Metrics,
  Credits,
  Education,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <Metrics />
        </div>
        <About />
        <Tech />
        <Education />
        <Experience />
        {/* <Works /> */}
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Credits />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
