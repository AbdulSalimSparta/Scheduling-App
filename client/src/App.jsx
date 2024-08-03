import React from "react";
import LoginRegApp from "./Login-Register/GlassBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./Home/Home";
import ResourcePage from "./ResourcePage/ResourcePage";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./Profile/Profile";
import Cart from "./Cart/Cart";


function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginRegApp />} />
                    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="/resource" element={<ProtectedRoute><ResourcePage /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </div>
        );
}

export default App;