import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Templates from './Templates/Templates';
import Emails from './Emails/Emails';
import Layout from './Layout/Layout';
import Login from './Login/Login';

const LayoutWrapper = ({Component}) => {
  return <Layout ><Component /></Layout>
}

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
            <Route exact path="/" element={<LayoutWrapper Component={Home}/>}/>
            <Route exact path="/login" element={<Login/>}/>
            {/* <Route exact path="/login" element={<LayoutWrapper Component={Login}/>}/> */}
            <Route exact path="/templates" element={<LayoutWrapper Component={Templates}/>}/>
            <Route exact path="/emails" element={<LayoutWrapper Component={Emails}/>}/>
            <Route path="*" element={<LayoutWrapper Component={NotFound}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

const NotFound = () => {
  return <h1>Not found</h1>;
};

// const Login = () => {
//   return <h1>Log in</h1>;
// };


export default App;