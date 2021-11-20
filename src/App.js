import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Popular from "./components/Popular";
import Newhot from './components/Newhot';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Sign from './pages/Sign';
import Terms from './pages/Terms';
import Upload from './pages/Upload';
import Contact from './pages/Contact';
import Dashboard from './components/Dashboard';
import Artist from "./components/Artist";
import Home from './pages/Home';
import Footer from './components/Footer';
import Sideview from './components/Sideview';
import ScrollToTop from './components/ScrollToTop';
import Songdetail from './components/Songdetail';


function App () {
  <Helmet>
    <title>Ta8Beats.com</title>
  </Helmet> 

  return (
    <Router>
      <ScrollToTop />
      <GlobalStyles />
      <Header />
      <Sideview />
      <Switch>
        <Route path="/songdetail">
          <Songdetail />
        </Route>
        <Route path="/popular">
          <Popular />
        </Route>
        <Route path="/newhot">
          <Newhot />
        </Route>
        <Route path="/artist">
          <Artist />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/signup">
          <Sign />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
