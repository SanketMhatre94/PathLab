
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import FeatureCards from './FeatureCards'
import LabTechnologies from './LabTechnologies'
import CitySelector from './CitySelector'
import GradientButton from './SecondP.jsx/GradientButton'
import Navbar2 from './SecondP.jsx/Navbar2'
import PopularTests from './SecondP.jsx/PopularTests'
import HealthRisks from './SecondP.jsx/HealthRisks'
import HealthConditions from './SecondP.jsx/HealthConditions'
import Footer from './SecondP.jsx/h'
import CategoryLab from './CategoryLab'
// import LabList from './LabList'
import TestByHealthRisks from './TestByHealthRisks'
import TestByHealthConditions from './TestByHealthConditions'
import FeaturesSection from './FeaturesSection'
import FooterJod from './FooterJod'
import ContactUs from './ContactUs'
import SignUp from './SignUp'
import Login from './login'
import HealthConditionList from './HealthConditionList'
// import useTests from './useTest'

import Help from './Help'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  return (
  <>
  <Router>
    <Navbar></Navbar>
<Routes>
  <Route path='/' element={<Home/>}/> 
  <Route path='/contact' element={<ContactUs/>}/> 
  <Route path='/help' element={<Help/>}/>
 <Route path='/signup' element={<SignUp/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/city' element={<CitySelector/>}/>
 <Route path='/test' element={<TestByHealthConditions/>}/>
 
</Routes>
<FooterJod></FooterJod>

  </Router>
  
  </>
  )
}

export default App
