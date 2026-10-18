    import Home from "./pages/Home";
    import Login from "./pages/Login";
    import Register from "./pages/Register";
    import Booking from "./pages/Booking";
    import Useracc from "./pages/Useracc";
    import { Routes, Route } from "react-router-dom";
    import Tobook from "./pages/Tobook";
    import Test from "./pages/Test";
    import Viewmatch from "./pages/Viewmatch";
    import ProtectedRoute from "./component/ProtectedRoute";
    import About from "./pages/About";
    import Contact from "./pages/Contact";
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
        <Route path="useracc" element={<Useracc/>} />
        <Route path="booking" element={<Booking/>} />
           <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="test" element={<Test/>} />
             <Route
        path="/viewmatch/:id"
        element={
          <ProtectedRoute>
            <Viewmatch />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tobook/:id"
        element={
          <ProtectedRoute>
            <Tobook />
          </ProtectedRoute>
        }
      />

      <Route path="test" element={<Test />} />
    </Routes>
  );
}

export default App;