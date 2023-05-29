import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';

import Side from './Components/SideUser';
import SideIncident from './Components/SideIncident';
import DeclareIncident from './Components/DeclareIncident';
import ListIncident from './Components/ListIncident';
import AddIncident from './Components/AddIncident';
import SideAddIncident from './Components/SideAddIncident';
import ModifyIncident from './Components/ModifyIncident';
import SideModifyIncident from './Components/SideModifyIncident';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/side" element={<Side />} />
        <Route path="/sideincident" element={<SideIncident />} />
        <Route path="/menu" element={<ListIncident />} />
        <Route path="/declare" element={<DeclareIncident />} />
        <Route path="/listincident" element={<ListIncident />} />
        <Route path="/addincident" element={<AddIncident />} />
        <Route path="/addsideincident" element={<SideAddIncident />} />
        <Route path="/modifyincident/:id" element={<ModifyIncident />} />
        <Route path="/sidemodifyincident/:id" element={<SideModifyIncident />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
