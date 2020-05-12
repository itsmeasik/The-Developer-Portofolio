import React from "react";
import { ThemeProvider } from "styled-components";

import { light } from "./theme";
import { Home, Projects, About, Contact } from "./pages";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <div>
        <Header />
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
