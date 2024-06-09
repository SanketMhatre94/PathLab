import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Tests from './Tests';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap/min/css'

const Apps = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/tests" component={Tests} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
};

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=> {
    axios.get('http:locahost:3001/getUsers')
    .then(users => setUsers(Pathology.Health_Conditions))
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="bg-white py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Test by Health Conditions</h2>
      <div className="flex justify-center flex-wrap">
        {
        Pathology.map((Health_Conditions, index) => {
          return
            <tr>
            key={index}
            name={users["Test_Name"]}
            description={users["Test_Description"]}
            price={users.Price}
            lab={users["Lab_Name_Address"]}
          </tr>
        } 
        )}
      </div>
    </div>
  );
}

export default Apps;