import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Containers/Home';
import Properties from './Containers/Properties';
import Property_Details from './Containers/Property_Details';
import Contact_Us from './Containers/Contact_Us';

function App() {
  return (
    <>
    <div className="app">
        <Routes>
          <Route path="/*" element={<Home/>}></Route>
          <Route path="/properties" element={<Properties/>}></Route>
          <Route path="/propertydetails" element={<Property_Details/>}></Route>
          <Route path="/schedulevisit" element={<Property_Details/>}></Route>
          <Route path="/contactus" element={<Contact_Us/>}></Route>
        </Routes>
    </div>
    </>
  );
}

export default App;
