import React from 'react';
import {FavouritesPage} from "../pages/FavouritesPage";
import {HomePage} from "../pages/HomePage";
import {Route, Routes} from "react-router-dom";
import {Header} from "../components/Header";

const Navigation = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/favourites'} element={<FavouritesPage/>}/>
            </Routes>
        </>
    );
};

export default Navigation;