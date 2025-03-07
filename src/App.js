import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/auth/Login";
import Layout from "./components/Layout";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import LoginWithCode from "./pages/auth/LoginWithCode";
import Profile from "./pages/profile/Profile";
import Verify from "./pages/auth/Verify";
import ChangePassword from "./pages/changePassword/ChangePassword";
import UserList from "./pages/userList/UserList";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getLoginStatus, getUser, selectIsLoggedIn,  selectUser } from "./redux/features/auth/authSlice";
import { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

axios.defaults.withCredentials = true



const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getLoginStatus());
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn,user]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
        {/* <Provider > */}
            <Routes>
              <Route 
                path="/" 
                element={
                  <Layout>
                    <Home/>
                  </Layout> 
                }
              />
              <Route 
                path="/login" 
                element={
                    <Login/>
                }
              />
              <Route 
                path="/register" 
                element={
                    <Register />
                }
              />
              <Route 
                path="/forgot" 
                element={
                    <Forgot />
                }
              />
              <Route 
                path="/resetPassword/:resetToken" 
                element={
                    <Reset />
                }
              />
              <Route 
                path="/loginWithCode/:email" 
                element={
                    <LoginWithCode />
                }
              />
              <Route 
                path="/profile" 
                element={
                  <Layout>
                    <Profile />
                  </Layout>
                }
              />
              <Route 
                path="/verify/:verificationToken" 
                element={
                  <Layout>
                    <Verify />
                  </Layout>
                }
              />
              <Route 
                path="/changePassword" 
                element={
                  <Layout>
                    <ChangePassword />
                  </Layout>
                }
              />
              <Route 
                path="/users" 
                element={
                  <Layout>
                    <UserList />
                  </Layout>
                }
              />
            </Routes>
        {/* </Provider> */}
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
