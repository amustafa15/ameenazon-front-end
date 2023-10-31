import './App.css';
import React from 'react'
import HomePage from './Components/HomePage Components/HomePage';
import { Routes, Route, useParams } from 'react-router-dom';
import Login from './Components/HomePage Components/Login';
import ProductPageComponent from './Components/ProductPage Components/ProductPageComponent';
import CartPage from './Components/CartPage Components/CartPage';
import CheckoutPage from './Components/CheckoutPage Components/CheckoutPage';
import Signup from './Components/HomePage Components/Signup';
import SearchResultsPage from './Components/SearchResultsPage Components/SearchResultsPage';
import SearchErrorPage from './Components/SearchResultsPage Components/SearchErrorPage';
import { AuthProvider } from './hooks/AuthContext';
import UploadProductComponent from './Components/ProductPage Components/UploadProductComponent';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductPageComponent />}/>
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/searcherror" element={<SearchErrorPage />} />
          <Route path="/upload" element={<UploadProductComponent />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
