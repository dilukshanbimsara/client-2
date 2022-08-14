import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./component/header/Header";
// import Login from "./component/Login/Login";
import FogotPassForm from "./component/Login/Login Forms/FogotPassForm";
import ResetPassForm from "./component/Login/Login Forms/ResetPassForm";
import LoginForm from "./component/Login/Login Forms/LoginForm";
import Navbar from "./component/NavigationBar/Navbar";
import Tables from "./component/Table/Table";
import Home from "./pages/Home";
import Button from 'react-bootstrap/Button';
import Players from "./pages/Manager/js/Players";
import CricketRanking from "./pages/Manager/js/CricketRanking";
import SearchTable from "./component/Search/SearchTable";
import Session from "./pages/Manager/js/Session";
import Membership from "./pages/Manager/js/Membership";
import SampleForm from "./component/Form/SampleForm";
import FormData from "./component/Form/FormData";
import Test from "./component/Table/test";

const List = [
  {id:1, name: "John Doe" , Age: 27},
  {id:1, name: "John Doe" , Age: 27},
  {id:1, name: "John Doe" , Age: <Button variant="secondary">View</Button>},
]

const colNames = ['id','Name','Age']

let array1 = [
  {
    title: "First Name",
    for: "exampleInputEmail1",
    type: "text",
    placeholder: "First Name",
    id: "f-name",
  },
  {
    title: "Last Name",
    for: "exampleInputEmail1",
    type: "text",
    placeholder: "Last Name",
    id: "l-name",
  },
  {
    title: "e-mail",
    for: "exampleInputEmail1",
    type: "email",
    placeholder: "Email",
    id: "email",
  },
  {
    title: "Contact",
    for: "exampleInputEmail1",
    type: "number",
    placeholder: "Contact Number",
    id: "contact",
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <FogotPassForm /> */}
        {/* <ResetPassForm /> */}
        {/* {<>test</>} */}
        <Routes>
          <Route path="/ResetPassword" element={<ResetPassForm />} />
          <Route path="/FogotPassword" element={<FogotPassForm/>} />
          <Route path="/" element={<LoginForm/>} />
          <Route path="/client" element={<Home/>} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Table" element={<Tables list={List} colNames={colNames} />} />
          <Route path="/manager/Players" element={<Players />} />
          <Route path="/manager/FormData" element={<FormData />} />
          <Route path="/manager/CricketRanking"  element={<CricketRanking/>}/>
          <Route path="/manager/Session"  element={<Session/>}/>
          {/* <Route path="/manager/Membership"  element={<Membership/>}/> */}
          {/* <Route path="/manager/SampleForm" element={<SampleForm arr={array1} upload = {true} />} /> */}

          <Route path="/test" element={<Test/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
