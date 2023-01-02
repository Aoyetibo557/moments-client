import './App.css';
import Loginpage from './pages/auth/Loginpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Profile from './pages/profile/Profile';
import RequireAuth from './components/_protectedroute/RequireAuth';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/register" element={<Signup />} />

          <Route
            path="/profile"
            element={
              <RequireAuth redirectTo={"/"}>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;




// NOTES: TO SELF
// 1. I have to use the "exact" keyword in the Route component to make sure that the path is exact.
/**
 * Add Loading to the login and signup form so when the button is clicked, the loading animation will show up
 * 
 * Think about how youll add followers and following to the profile page ask chatgpt
 */