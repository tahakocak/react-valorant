import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

import './styles/style.min.css'

// Routes
import IndexComponent from './routes/index'
import MapsComponent from './routes/maps'
import WeaponsComponent from "./routes/weapons";
import AgentsComponent from "./routes/agents";
import TiersComponent from './routes/tiers';
import Notfound from "./routes/notfound";

//view pages
import Map from "./routes/map";

ReactDOM.render(
    <BrowserRouter>
        <nav>
            <div>
                <a href="/">Valorant</a>
            </div>
            <ul>
                <li>
                    <NavLink to="/" className="navbar-link">Homepage</NavLink>
                </li>
                <li>
                    <NavLink to="/maps" className="navbar-link">Maps</NavLink>
                </li>
                <li>
                    <NavLink to="/weapons" className="navbar-link">Weapons</NavLink>
                </li>
                <li>
                    <NavLink to="/agents" className="navbar-link">Agents</NavLink>
                </li>
                <li>
                    <NavLink to="/competitive-tiers" className="navbar-link">Competitive Tiers</NavLink>
                </li>
            </ul>
            <div className="mobile-menu">
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
        <div className="container">
            <Routes>
                <Route path="/" element={<IndexComponent />}/>
                <Route path="maps" element={<MapsComponent />} />
                <Route path="weapons" element={<WeaponsComponent />} />
                <Route path="agents" element={<AgentsComponent />} />
                <Route path="competitive-tiers" element={<TiersComponent />} />
                <Route path="map/:uuid" element={<Map />} />
                <Route path="*" element={<Notfound />} />

            </Routes>
        </div>
        <footer>
            2022 Copyright, All rights reserved
        </footer>
    </BrowserRouter>,
    document.querySelector('body')
);

