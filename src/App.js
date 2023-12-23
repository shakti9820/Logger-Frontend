// App.js (or Main Component)

import React from 'react';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import InjecterWithFilter from './Injecterwithfilter';
import Injecter from './Injecter'; // Import your Component 1
import Filter from './Filter'; // Import your Component 2
import BetweenTime from './BetweenTime';

const App = () => {
    return (
      <>
      
        <Router>
            <Routes>
                {/* <Route path="/" exact component={injecterwithfilter} />
                <Route path="/injecter" component={injecter} />
                <Route path="/filter" component={filter} /> */}

                   <Route path="/" element={<Outlet />}/>
                    <Route index element={<InjecterWithFilter />} />
                    <Route path="/injecter" element={<Injecter />} />
                    <Route path="/filter" element={<Filter />} />
                    <Route path="/time" element={<BetweenTime/>} />
            </Routes>
        </Router>
        </>
    );
};

export default App;
