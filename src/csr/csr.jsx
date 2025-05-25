'use client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Manufacturing from "../pages/manufacturing/manufacturing.jsx";
import Header from "../components/header/header.jsx";
import Cases from "../pages/cases/cases.jsx";
import RotaryCrusher from "../pages/rotaryСrusher/rotaryСrusher.jsx";
import DryingCabinetsPage from "../pages/dryingCabinets/dryingCabinets.jsx";
import Isolators from "../pages/isolators/isolators.jsx";
import Footer from "../components/footer/footer.jsx";
import CatalogPage from "../pages/catalog/catalog.jsx";
import HomePageCsr from "../pages/home/homePageCsr.jsx";


export default function Csr() {
    const enLan = window.location.pathname.startsWith('/en');

    return (
        <BrowserRouter basename={enLan ? '/en' : ''}>
            <Header enLan={enLan}/>
            <Routes>
                <Route exact path="/" element={<HomePageCsr enLan={enLan}/>} />
                <Route exact path="/cases" element={<Cases enLan={enLan}/>}/>
                <Route exact path="/manufacturing" element={<Manufacturing enLan={enLan}/>}/>
                <Route exact path="/catalog" element={<CatalogPage enLan={enLan}/>}/>
                <Route exact path="/catalog/rotary-crusher" element={<RotaryCrusher enLan={enLan}/>}/>
                <Route exact path="/catalog/isolators" element={<Isolators enLan={enLan}/>}/>
                <Route exact path="/catalog/drying-cabinets" element={<DryingCabinetsPage enLan={enLan}/>}/>
            </Routes>
            <Footer enLan={enLan}/>
            {/*<RouterProvider router={router} />*/}
        </BrowserRouter>
    );
}