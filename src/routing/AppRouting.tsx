import React from 'react';
import Header from "../components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharactersPage from "../pages/CharactersPage";
import EpisodePage from "../pages/EpisodePage";
import SeeLater from "../pages/SeeLater";

export const AppRouting = () => {
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<CharactersPage/>}/>
                <Route path="/episodes" element={<EpisodePage/>}/>
                <Route path="/seeLater" element={<SeeLater/>}/>
            </Routes>


        </BrowserRouter>
    );
};