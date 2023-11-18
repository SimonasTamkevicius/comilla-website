import { useContext, useState, useEffect, createContext } from "react";
import axiosInstance from "../../utils/axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
      loggedIn: false,
      _id: "",
      email: ""
    });
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const token = getCookie("accessToken");
      const _id = getCookie("_id");
      const email = getCookie("email");

      if (token) {
        setUser({
          loggedIn: true,
          _id: _id,
          email: email
        });
      }
      setLoading(false);
    }, []);
  
    const loginUser = (token, _id, email) => {
      // Set the token and role in cookies instead of state
      setCookie("accessToken", token, { path: "/" });
      setCookie("_id", _id, { path: "/" });
      setCookie("email", email, { path: "/" });
  
      setUser({
        loggedIn: true,
        _id: _id,
        email: email
      });
      setLoading(false);
    };
  
    const logoutUser = () => {
      // Clear the cookies
      deleteCookie("accessToken");
      deleteCookie("_id");
      deleteCookie("email");
  
      setUser({
        loggedIn: false,
        _id: "",
        email: ""
      });
    };

    const updateUser = (data) => {
      console.log(data);
      if (data.email) {
        setCookie('email', data.email,{path:'/'});
      }

      setUser((prevUser) => ({
        ...prevUser,
        ...data
      }));  
    };
  
    const contextData = {
      user,
      loginUser,
      logoutUser,
      updateUser
    };
  
    return (
      <AuthContext.Provider value={contextData}>
        {loading ? <p>loading...</p> : children}
      </AuthContext.Provider>
    );
  };
  
  // Helper function to set a cookie
  function setCookie(name, value, options) {
    options = {
      path: "/",
      ...options,
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie =
      encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (const optionKey in options) {
      updatedCookie += "; " + optionKey;
      const optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

  // Helper function to delete a cookie
  function deleteCookie(name) {
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
  
  
  // Helper function to get a cookie
  function getCookie(name) {
    const matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }  

export const useAuth = ()=> {return useContext(AuthContext)}

export default AuthContext;