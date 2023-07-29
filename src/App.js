import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use BrowserRouter instead of HashRouter
import Login from './Components/Login';
import Profile from './Components/Profile';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;







// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from "./Components/Login";
// import Profile from "./Components/Profile";
// import { useState } from "react";
// import { Navigate } from 'react-router-dom';

// function App() {
//   const [idThis, setIdThis] = useState("");
//   return (
//     <>
//       <div className="App">
//         <Router>
//           <Routes>
//             <Route path="" element={<Login setId={setIdThis} />} /> 
//             <Route path="/profile" element={<Profile userId={idThis} />} /> 
//             <Route path="*" element={<Navigate to="" />} /> 
//           </Routes>
//         </Router>
//       </div>
//     </>
//   );
// }

// export default App;