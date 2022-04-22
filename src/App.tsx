import React, {FC} from 'react';
import AppRouters from "./component/AppRouter/AppRouters";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import './App.css'

interface AppProps {

}

const App: FC<AppProps> = () => {


    return (
            <>
                <Header/>
                <AppRouters/>
                <Footer/>
            </>
    );
};

export default App;