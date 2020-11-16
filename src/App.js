import React, {Fragment} from 'react';
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";


function App(props) {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}

export default App;