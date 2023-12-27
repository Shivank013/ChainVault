import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const API_URL = "http://localhost:4000/api/v1";

export function useAuthStatus() {
  
  const {result, setResult} = useContext(AppContext);

  useEffect(() => {
    let cancelRequest = false;
    const authToken = localStorage.getItem("psg_auth_token");
    // console.log(authToken);
    axios
      .post(`${API_URL}/auth`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        if (cancelRequest) {
          return;
        }
        const { authStatus, identifier, identifierEmail, id, ac , status } = response.data;
        console.log("login krte hi y aa raha h:")
        console.log(authStatus)
        console.log(identifier)
        console.log(identifierEmail)
        console.log(id)
        console.log(ac)
        console.log(status)
        if (authStatus === "success") {
          setResult({
            isLoading: false,
            isAuthorized: authStatus,
            username: identifier,
            email: identifierEmail,
            id: id,
            ac : ac,
            status : status
          });
        } else {
          setResult({
            isLoading: false,
            isAuthorized: false,
            username: "",
            email: "",
            id: "",
            ac : "",
            status : ""
          });
        }
        // console.log(result)
      })
      .catch((err) => {
        console.log(err);
        setResult({
          isLoading: false,
          isAuthorized: false,
          username: "",
          email: "",
          id: ""
        });
      });
    return () => {
      cancelRequest = true;
    };
  }, []);
  return result;
}