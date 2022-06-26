import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Usuario from './Components/Usuarios/Usuario'
import Locacao from './Components/Locacao/Locacao'
import AreaComum from './Components/AreaComum/AreaComum'
import Condominio from './Components/Condominio/Condominio'
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import { UserStorage } from './UserContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/login/*" element={<Login />} />
            <Route 
              path="/*" 
              element={
                <ProtectedRoute>
                  <Home/>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/locacao/*" 
              element={
                <ProtectedRoute>
                  <Locacao/>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/apartamento/*" 
              element={
                <ProtectedRoute>
                  <Usuario/>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/areacomum/*" 
              element={
                <ProtectedRoute>
                  <AreaComum/>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/condominio/*" 
              element={
                <ProtectedRoute>
                  <Condominio/>
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
