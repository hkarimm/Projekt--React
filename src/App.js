import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import store from './store';
import { Provider } from 'react-redux';
// import DarkModeToggle from './DarkModeToggle';




const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Header />
        {/* <DarkModeToggle /> */}
        <Switch>
          <Route path="/about" component={AboutMeSection} />
          <Route path="/projects" component={ProjectsSection} />
          <Route path="/contact" component={ContactSection} />
        </Switch>
         <Footer />
      </div>
    </Router>
    </Provider>
  );
};

export default App;
