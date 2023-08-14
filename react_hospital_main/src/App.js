import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './component/Index/Home';
import Services from './component/Services/Services';
import Departments from './component/Departments/Departments';
import Doctors from './component/Doctors/Doctors';
import Blog from './component/Blog/Blog';
import Blogdetail from './component/Blogdetail/Blogdetail';
import Aboutpage from './component/Aboutus/Aboutpage';
import Faq from './component/Faq/Faq';
import Gallery from './component/Gallery/Gallery';
import Prices from './component/Prices/Prices';
import Contact from './component/Contact/Contact';

import Signup from './Admin/Signup/Signup';
import Dashboard from './Admin/Dashboard/Dashboard';
import Signin from './Admin/Signin/Signin';
import AddDepartment from './Admin/Dashboard/AddDepartment';
import AddDoctor from './Admin/Dashboard/AddDoctor';
import AddPatient from './Admin/Dashboard/AddPatient';
import AddPayment from './Admin/Dashboard/AddPayment';
import ViewDepartment from './Admin/Dashboard/ViewDepartment';
import ViewDoctors from './Admin/Dashboard/ViewDoctors';
import ViewPatients from './Admin/Dashboard/ViewPatients';
import ViewPayment from './Admin/Dashboard/ViewPayment';
import Appointment from './Admin/Dashboard/Appointment';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail" element={<Blogdetail />} />
        <Route path="/about-us" element={<Aboutpage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/galary" element={<Gallery />} />
        <Route path="/price-list" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />


        {/* ==========================Admin Root======================= */}


        <Route path="/dashboard" element={(localStorage.getItem('userId') !== null) ? <Dashboard /> : <Signin />} />
        <Route path="/admin" element={ localStorage.getItem('userId') == null ? <Signin/> : <Dashboard/>} />
        <Route path="/register" element={<Signup />} />
        <Route path="/appointment" element={(localStorage.getItem('userId') !== null) ? <Appointment /> : <Signin />} />
        <Route path="/adddoctor" element={(localStorage.getItem('userId') !== null) ? <AddDoctor /> : <Signin />} />
        <Route path="/addpatient" element={(localStorage.getItem('userId') !== null) ? <AddPatient /> : <Signin />} />
        <Route path="/addpayment" element={(localStorage.getItem('userId') !== null) ? <AddPayment /> : <Signin />} />
        <Route path="/adddepartment" element={(localStorage.getItem('userId') !== null) ? <AddDepartment /> : <Signin />} />
        <Route path="/viewdepartment" element={(localStorage.getItem('userId') !== null) ? <ViewDepartment /> : <Signin />} />
        <Route path="/viewdoctor" element={(localStorage.getItem('userId') !== null) ? <ViewDoctors /> : <Signin />} />
        <Route path="/viewpatients" element={(localStorage.getItem('userId') !== null) ? <ViewPatients /> : <Signin />} />
        <Route path="/viewpayment" element={(localStorage.getItem('userId') !== null) ? <ViewPayment /> : <Signin />} />


      </Routes>
    </div>
  );
}                                                   

export default App;
