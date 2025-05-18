import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer'; // Import Footer
import { ProductList } from './pages/ProductList';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { Signin } from './pages/Signin';
import { Payment } from './pages/payment';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Privacy } from './pages/Privacy';
import { AboutUs } from './pages/AboutUs';
import { OrderSuccess } from './pages/OrderSuccess';


const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen"> {/* Flexbox wrapper */}
          <Router>
            <Navbar />
           {/* Add Banner below Navbar */}
            <div className="flex-grow"> {/* Main content area */}
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/privacy" element={<Privacy />} /> 
                <Route path="/aboutus" element={<AboutUs />} /> 
                <Route path="/order-success" element={<OrderSuccess />} />
              </Routes>
            </div>
            <Footer /> {/* Footer always at the bottom */}
          </Router>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;