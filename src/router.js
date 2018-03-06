import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Wizard1 from './Components/Wizard/Wizard1/Wizard1';
import Wizard2 from './Components/Wizard/Wizard2/Wizard2';
import Wizard3 from './Components/Wizard/Wizard3/Wizard3';
import Wizard4 from './Components/Wizard/Wizard4/Wizard4';
import Wizard5 from './Components/Wizard/Wizard5/Wizard5';

export default (
    <HashRouter>
        <div>
            <Route exact path="/"    component={ Home } />
            <Route path="/dashboard" component={ Dashboard } />
            <Route path="/wizard1"   component={ Wizard1 } />
            <Route path="/wizard2"   component={ Wizard2 } />
            <Route path="/wizard3"   component={ Wizard3 } />
            <Route path="/wizard4"   component={ Wizard4 } />
            <Route path="/wizard5"   component={ Wizard5 } />
        </div>
    </HashRouter>
)