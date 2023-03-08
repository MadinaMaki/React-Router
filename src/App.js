import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import RouterLayout from "./components/routerLayout/RouterLayout";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Auth from "./pages/auth/Auth";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RouterLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='contacts' element={<Contact/>}/>
                    <Route path='auth' element={<Auth/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
