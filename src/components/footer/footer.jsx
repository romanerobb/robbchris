import React from "react";
import { Link, BrowserRouter, useNavigate} from "react-router-dom";
import { Button } from "material";

function Footer() {

  const navigate = useNavigate();

    return (

        <>
        <nav>
            <br></br>
            <span> </span>
            <Button variant="outlined" color="success" href="/termsandconditions">Terms and Conditions</Button>
            <span> </span>
            <Button variant="outlined" color="error" href="/forgetpassword">Forgot Password</Button>
            <span> </span>
            <Button variant="outlined" color="warning" href="/privacypolicy">Privacy Policy</Button>
            <span> </span>
            <Button variant="outlined" color="success" href="/contact">Contact Us</Button>
            <br></br>
            <br></br>
        </nav>
        <h3>Copyright © 2024 Romane Orlando Robb</h3>
        </>
    );
  }
  
  export default Footer;