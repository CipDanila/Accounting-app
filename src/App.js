import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookConsultation from "./pages/BookConsultation";
import ViewConsultation from "./pages/ViewConsultation";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add-consultation">
            <BookConsultation />
          </Route>
          <Route path="/consultation-list">
            <ViewConsultation />
          </Route>
          <Route path="/formContact-us">
            <ContactUs />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
