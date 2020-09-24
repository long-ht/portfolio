import React, { Fragment } from 'react';
import Profile from '../Profile/Profile';
import Nav from '../Nav/Nav';
import NavMobile from '../Nav/NavMobile';
import Education from '../Education/Education';
import NotableProjects from '../NotableProjects/NotableProjects';
import OtherProjects from '../OtherProjects/OtherProjects';
import Contact from '../Contact/Contact';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
        <NavMobile />
        <Nav />
        <div>
          <Route exact path='/' component={Profile} />
          <section>
            <Switch>
              <Route exact path="/education" component={Education} />
              <Route exact path="/notable-projects" component={NotableProjects} />
              <Route exact path="/other-projects" component={OtherProjects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </section>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
