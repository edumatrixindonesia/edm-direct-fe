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
import ListKota from "./components/ListKota/ListKota";
import AddKota from "./components/CrudKota/AddKota";
import EditKota from "./components/CrudKota/EditKota";
import ListSekolah from "./components/ListSekolah/ListSekolah";
import AddSekolah from "./components/CrudSekolah/AddSekolah";
import EditSekolah from "./components/CrudSekolah/EditSekolah";
import ListPilihanProgram from "./components/ListPilihanProgram/ListPilihanProgram";
import AddPilihanProgram from "./components/CrudPilihanProgram/AddPilihanProgram";
import EditPilihanProgram from "./components/CrudPilihanProgram/EditPilihanProgram";
import ListFiturProgram from "./components/ListFiturProgram/ListFiturProgram";
import AddFiturProgram from "./components/CrudFiturProgram/AddFiturProgram";
import EditFiturProgram from "./components/CrudFiturProgram/EditFiturProgram";
import ListPromo from "./components/ListPromo/ListPromo";
import AddPromo from "./components/CrudPromo/AddPromo";
import EditPromo from "./components/CrudPromo/EditPromo";
import Home from "./Frontend/Home";
import ListKelasperKota from "./components/ListKelasperKota/ListKelasperKota";
import AddKelasperKota from "./components/CrudKelasperKota/AddKelasperKota";
import Kelaspage from "./Frontend/Kelaspage/Kelaspage";
import Mapelpage from "./Frontend/Mapelpage/Mapelpage";
import Kotapage from "./Frontend/Kotapage/kotaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route exact path="/" element={<Ambonpage />}></Route> */}
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
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
        <Route path="/dashboard/listkota" element={<ListKota />}></Route>
        <Route path="/dashboard/listsekolah" element={<ListSekolah />}></Route>
        <Route path="/dashboard/listpilihanprogram" element={<ListPilihanProgram />}></Route>
        <Route path="/dashboard/listfiturprogram" element={<ListFiturProgram />}></Route>
        <Route path="/dashboard/listpromo" element={<ListPromo />}></Route>
        <Route path="/dashboard/listkelasperkota" element={<ListKelasperKota />}></Route>
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
        <Route path="/addkota" element={<AddKota />}></Route>
        <Route path="/addsekolah" element={<AddSekolah />}></Route>
        <Route path="/addpilihanprogram" element={<AddPilihanProgram />}></Route>
        <Route path="/addfiturprogram" element={<AddFiturProgram />}></Route>
        <Route path="/addpromo" element={<AddPromo />}></Route>
        <Route path="/addkelasperkota" element={<AddKelasperKota />}></Route>
        {/* Edit Admin */}
        <Route path="/edit-whatsapp/:id" element={<EditContact />}></Route>
        <Route path="/edit-program/:id" element={<EditProgram />}></Route>
        <Route path="/edit-layanan/:id" element={<EditLayanan />}></Route>
        <Route path="/edit-mapel/:id" element={<EditMapel />}></Route>
        <Route path="/edit-office/:id" element={<EditOffice />}></Route>
        <Route path="/edit-kelas/:id" element={<EditKelas />}></Route>
        <Route path="/edit-keunggulan/:id" element={<EditKeunggulan />}></Route>
        <Route path="/edit-faq/:id" element={<EditFaq />}></Route>
        <Route path="/edit-kota/:id" element={<EditKota />}></Route>
        <Route path="/edit-sekolah/:id" element={<EditSekolah />}></Route>
        <Route path="/edit-pilihanprogram/:id" element={<EditPilihanProgram />}></Route>
        <Route path="/edit-fiturprogram/:id" element={<EditFiturProgram />}></Route>
        <Route path="/edit-promo/:id" element={<EditPromo />}></Route>
        {/* Go City By ID */}
        <Route path="/kota/:id" element={<Kotapage />}></Route>
        {/* Go Class By ID */}
        <Route path="/kelas/:id" element={<Kelaspage />}></Route>
        {/* Go Mapel By ID */}
        <Route path="/mata-pelajaran/:id" element={<Mapelpage />}></Route>
        {/* Go Kabupaten By ID */}
        <Route path="/kabupaten/:id"></Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
