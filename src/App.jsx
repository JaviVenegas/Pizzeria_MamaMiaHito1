import React from 'react';
import Nav from './componentes/Nav';
import Home from './componentes/Home';
import Footer from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
        <>
            <Nav/>
            <Home/>
            <Footer/>
        </>
    );
};

export default App;
