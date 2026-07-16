import { Routes, Route, Link } from "react-router-dom";

// useState
import Counter from "./components/useState/Counter";
import StudentForm from "./components/useState/StudentForm";
import ToggleTheme from "./components/useState/ToggleTheme";
import PasswordVisibility from "./components/useState/PasswordVisibility";
import ShoppingCart from "./components/useState/ShoppingCart";

// useEffect
import ComponentLoaded from "./components/useEffect/ComponentLoaded";
import Timer from "./components/useEffect/Timer";
import DigitalClock from "./components/useEffect/DigitalClock";
import ApiFetch from "./components/useEffect/ApiFetch";
import TitleChanger from "./components/useEffect/TitleChanger";

// Event Handling
import ButtonClick from "./components/eventHandling/ButtonClick";
import InputField from "./components/eventHandling/InputField";
import FormSubmission from "./components/eventHandling/FormSubmission";
import MouseEventsComponent from "./components/eventHandling/MouseEvents";
import KeyboardEvents from "./components/eventHandling/KeyboardEvents";

// Router
import Home from "./components/router/Home";
import About from "./components/router/About";
import Contact from "./components/router/Contact";
import Navbar from "./components/router/Navbar";
import Services from "./components/router/Services";
import Dashboard from "./components/router/Dashboard";
import Profile from "./components/router/Profile";
import Settings from "./components/router/Settings";
import StudentDetail from "./components/router/StudentDetail";
import StudentList from "./components/router/StudentList";
import NotFound from "./components/router/NotFound";

// Navigation
import Login from "./components/navigation/Login";
import NavDashboard from "./components/navigation/NavDashboard";
import NavHome from "./components/navigation/NavHome";
import AddStudent from "./components/navigation/AddStudent";
import ViewStudents from "./components/navigation/ViewStudents";
import MultiPageNavbar from "./components/navigation/MultiPageNavbar";
import MpaHome from "./components/navigation/MpaHome";
import MpaAbout from "./components/navigation/MpaAbout";
import MpaServices from "./components/navigation/MpaServices";
import MpaContact from "./components/navigation/MpaContact";
import ProductsPage from "./components/navigation/ProductsPage";
import ProductDetails from "./components/navigation/ProductDetails";
import AdminLayout from "./components/navigation/AdminLayout";
import AdminStudents from "./components/navigation/AdminStudents";
import AdminCourses from "./components/navigation/AdminCourses";

// Fetch API
import FetchUsers from "./components/fetchApi/FetchUsers";
import FetchPosts from "./components/fetchApi/FetchPosts";
import FetchTodos from "./components/fetchApi/FetchTodos";
import FetchProducts from "./components/fetchApi/FetchProducts";
import CrudApp from "./components/fetchApi/CrudApp";

// Mini Project
import MiniProject from "./components/miniProject/MiniProject";

const navStyle = {
  padding: "10px",
  backgroundColor: "#1a1a2e",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px",
};

function App() {
  return (
    <div>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/student/1" style={linkStyle}>Student</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/mpa" style={linkStyle}>Multi-Page</Link>
        <Link to="/products" style={linkStyle}>Products</Link>
        <Link to="/admin" style={linkStyle}>Admin</Link>
        <Link to="/fetch-users" style={linkStyle}>Users</Link>
        <Link to="/fetch-posts" style={linkStyle}>Posts</Link>
        <Link to="/fetch-todos" style={linkStyle}>Todos</Link>
        <Link to="/fetch-products" style={linkStyle}>Store</Link>
        <Link to="/crud" style={linkStyle}>CRUD</Link>
        <Link to="/mini-project" style={linkStyle}>Mini Project</Link>
      </nav>

      <Routes>
        {/* Section 1: useState */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/student-form" element={<StudentForm />} />
        <Route path="/toggle-theme" element={<ToggleTheme />} />
        <Route path="/password-visibility" element={<PasswordVisibility />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />

        {/* Section 2: useEffect */}
        <Route path="/component-loaded" element={<ComponentLoaded />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/digital-clock" element={<DigitalClock />} />
        <Route path="/api-fetch" element={<ApiFetch />} />
        <Route path="/title-changer" element={<TitleChanger />} />

        {/* Section 3: Event Handling */}
        <Route path="/button-click" element={<ButtonClick />} />
        <Route path="/input-field" element={<InputField />} />
        <Route path="/form-submission" element={<FormSubmission />} />
        <Route path="/mouse-events" element={<MouseEventsComponent />} />
        <Route path="/keyboard-events" element={<KeyboardEvents />} />

        {/* Section 4: React Router */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* Student Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        {/* Dynamic Routing */}
        <Route path="/students" element={<StudentList />} />
        <Route path="/student/:id" element={<StudentDetail />} />

        {/* Section 5: Navigation */}
        <Route path="/login" element={<Login />} />
        <Route path="/nav-dashboard" element={<NavDashboard />} />
        <Route path="/nav-home" element={<NavHome />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/view-students" element={<ViewStudents />} />

        {/* Multi Page Application */}
        <Route path="/mpa" element={<MultiPageNavbar />}>
          <Route index element={<MpaHome />} />
          <Route path="about" element={<MpaAbout />} />
          <Route path="services" element={<MpaServices />} />
          <Route path="contact" element={<MpaContact />} />
        </Route>

        {/* Product Navigation */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<p>Select a section</p>} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="courses" element={<AdminCourses />} />
        </Route>

        {/* Section 6: Fetch API */}
        <Route path="/fetch-users" element={<FetchUsers />} />
        <Route path="/fetch-posts" element={<FetchPosts />} />
        <Route path="/fetch-todos" element={<FetchTodos />} />
        <Route path="/fetch-products" element={<FetchProducts />} />
        <Route path="/crud" element={<CrudApp />} />

        {/* Mini Project */}
        <Route path="/mini-project" element={<MiniProject />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
