import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import styles from "./Login.module.css";
import googleLogo from "../../Images/google.png";
import Logo from "../../Images/Logo.png";
import leftarrow from "../../Images/leftarrow.png";
import alert from "../../Images/alert.png";
import udemy from "../../Images/udemy.png";
import coursera from "../../Images/coursera.png";
import harvard from "../../Images/harvard.jpg";
import freecodecamp from "../../Images/freecodecamp.jpg";
import plussymbol from "../../Images/plussymbol.png";
import Home from "../Home";
function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [message, setMessage] = useState("");
  const username_ref = useRef();
  const email_ref = useRef();
  const password_ref = useRef();
  const [token, setToken] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const googleSignupHandler = () => {
    console.log("google");
    alert("Google");
    // window.location = `${process.env.REACT_APP_API_ENDPOINT}/auth/google`;
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);

        // Store the token in local storage
        localStorage.setItem("token", data.token);

        // Set the token in the state for rendering on the page
        setToken(data.token);

        // Navigate to the desired location after successful login
        navigate("/");
      } else {
        setMessage(data.message);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Internal Server Error");
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      {message !== "" ? (
        <div
          style={{
            height: "70px",
            width: "100%",
            position: "fixed",
            top: "0%",
            zIndex: "999",
          }}
        >
          <div className={styles.alert_modal} id="animate_loading-signup">
            <img src={alert} alt="" />
            {message}
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className={styles.login_container}>
        <div className={styles.left_container}>
          <div className={styles.left_form_container}>
            <div className={styles.left_form_container1}>
              <div className={styles.back_home_button}>
                <Link to="/">
                  <img src={leftarrow} alt="" />
                  Back to home page
                </Link>
              </div>

              <div className={styles.signup_text}>Login</div>
              {/* {token && (
                <div className={styles.token_display}>
                  Token: <span>{token}</span>
                </div>
              )} */}

              <div className={styles.already_button}>
                Don't have an account ?
                <span>
                  <Link to="/Signup">Sign up here!</Link>
                </span>
              </div>
            </div>
            <div className={styles.left_form_container2}>
              <div className={styles.google_signup_button_wrap}>
                <button
                  onClick={googleSignupHandler}
                  className={styles.google_signup_button}
                >
                  <img className={styles.googleLogo} src={googleLogo} alt="" />
                  Sign in with Google
                </button>
              </div>
              <div className={styles.or_line_wrapper}>
                <hr />
                <span>or</span>
                <hr className={styles.hr2} />
              </div>
            </div>
            <form onSubmit={(e) => login(e)}>
              <div className={styles.email_div}>
                <label htmlFor="email">Email</label>
                <input
                  ref={email_ref}
                  value={email}
                  type="email"
                  id="email"
                  placeholder="Enter a email address"
                  onChange={(e) => {
                    setEmail(email_ref.current.value);
                  }}
                />
              </div>
              <div className={styles.password_div}>
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  ref={password_ref}
                  onChange={(e) => {
                    setPassword(password_ref.current.value);
                  }}
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
              <button onClick={login} className={styles.signup_button}>
                {loading ? (
                  <Oval
                    height={20}
                    width={20}
                    color="#fff"
                    wrapperStyle={{ marginRight: "20px" }}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#ffcd70"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                ) : (
                  <></>
                )}
                Sign in
              </button>
            </form>
            <div className={styles.terms}>
              By signing up, you agree to our <span>Terms of Service</span> and
              acknowledge our <span>Privacy Policy</span>.
            </div>
          </div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.logo_container}>
            <div className={styles.logo_container_wrap}>
              <img src={Logo} alt="Logo" />
              Untangle
            </div>
          </div>
          <div className={styles.title1}>The #1 Intern Compass</div>
          <div className={styles.title2}>Your Internship Finder</div>
          <div className={styles.courses_container}>
            <img
              className={styles.images_circular}
              src={udemy}
              alt="udemy image"
            />
            <img
              className={styles.images_circular_overlaper}
              src={coursera}
              alt="coursera"
            />
            <img
              className={styles.images_circular_overlaper}
              src={harvard}
              alt="harvard"
            />
            <img
              className={styles.images_circular_overlaper}
              src={freecodecamp}
              alt="freecodecamp"
            />
            <img
              className={styles.images_circular_noborder}
              src={plussymbol}
              alt="plussymbol"
            />
            <img
              className={styles.images_circular_logo_course}
              src={Logo}
              alt="logo"
            />
          </div>
          <div className={styles.title3}>
            Explore endless internship opportunities effortlessly. Simplified
            navigation for the latest opportunities!
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
