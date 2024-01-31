import AddUser from "./components/CrudContact/AddContact";
import EditContact from "./components/CrudContact/EditContact";
import AddProgram from "./components/CrudProgram/AddProgram";
import AddLayanan from "./components/CrudLayanan/AddLayanan";
import EditProgram from "./components/CrudProgram/EditProgram";
import ListLayanan from "./components/ListLayanan/ListLayanan";
import ListProgram from "./components/ListProgram/ListProgram";
import ListWa from "./components/ListWhatsapp/ListWa";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditLayanan from "./components/CrudLayanan/EditLayanan";
import ListKelas from "./components/ListKelas/ListKelas";
import AddKelas from "./components/CrudKelas/AddKelas";
import ListMapel from "./components/ListMapel/ListMapel";
import AddMapel from "./components/CrudMapel/AddMapel";
import EditMapel from "./components/CrudMapel/EditMapel";
import ListOffice from "./components/ListOffice/ListOffice";
import AddOffice from "./components/CrudOffice/AddOffice";
import EditOffice from "./components/CrudOffice/EditOffice";
import ListReservasi from "./components/ListResevasi/ListReservasi";
import AddReservasi from "./components/CrudReservasi/AddReservasi";
import EditKelas from "./components/CrudKelas/EditKelas";
import ListKeunggulan from "./components/ListKeunggulan/ListKeunggulan";
import AddKeunggulan from "./components/CrudKeunggulan/AddKeunggulan";
import EditKeunggulan from "./components/CrudKeunggulan/EditKeunggulan";
import ListFaq from "./components/ListFaq/ListFaq";
import AddFaq from "./components/CrudFaq/AddFaq";
import EditFaq from "./components/CrudFaq/EditFaq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* List Admin */}
        <Route path="/dashboard/listwa" element={<ListWa />}></Route>
        <Route path="/dashboard/listprogram" element={<ListProgram />}></Route>
        <Route path="/dashboard/listlayanan" element={<ListLayanan />}></Route>
        <Route path="/dashboard/listkelas" element={<ListKelas />}></Route>
        <Route path="/dashboard/listmapel" element={<ListMapel />}></Route>
        <Route path="/dashboard/listoffice" element={<ListOffice />}></Route>
        <Route path="/dashboard/listreservasi" element={<ListReservasi />}></Route>
        <Route path="/dashboard/listkeunggulan" element={<ListKeunggulan />}></Route>
        <Route path="/dashboard/listfaq" element={<ListFaq />}></Route>
        {/* Add Admin */}
        <Route path="/addcontact" element={<AddUser />}></Route>
        <Route path="/addprogram" element={<AddProgram />}></Route>
        <Route path="/addlayanan" element={<AddLayanan />}></Route>
        <Route path="/addkelas" element={<AddKelas />}></Route>
        <Route path="/addmapel" element={<AddMapel />}></Route>
        <Route path="/addoffice" element={<AddOffice />}></Route>
        <Route path="/addreservasi" element={<AddReservasi />}></Route>
        <Route path="/addkeunggulan" element={<AddKeunggulan />}></Route>
        <Route path="/addfaq" element={<AddFaq />}></Route>
        {/* Edit Admin */}
        <Route path="/edit-whatsapp/:id" element={<EditContact />}></Route>
        <Route path="/edit-program/:id" element={<EditProgram />}></Route>
        <Route path="/edit-layanan/:id" element={<EditLayanan />}></Route>
        <Route path="/edit-mapel/:id" element={<EditMapel />}></Route>
        <Route path="/edit-office/:id" element={<EditOffice />}></Route>
        <Route path="/edit-kelas/:id" element={<EditKelas />}></Route>
        <Route path="/edit-keunggulan/:id" element={<EditKeunggulan />}></Route>
        <Route path="/edit-faq/:id" element={<EditFaq />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
