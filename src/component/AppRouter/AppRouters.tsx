import React, {FC} from 'react';
import {PageRoutes} from "./routes";
import {Route,Routes} from "react-router-dom";
import Header from "../Header/Header";

interface AppRoutersProps {

}

const AppRouters: FC<AppRoutersProps> = () => {
    return (
        <Routes>
            {
                PageRoutes.map((route)=>(
                    <Route key={route.path} path={route.path} element={<route.component/>}/>
                ))
            }
        </Routes>
    );
};

export default AppRouters;