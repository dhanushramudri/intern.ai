import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import styles from "./Signup.module.css";
import googleLogo from "../../Images/google.png";
import Logo from "../../Images/Logo.png";
import leftarrow from "../../Images/leftarrow.png";
import alert from "../../Images/alert.png";
import udemy from "../../Images/udemy.png";
import coursera from "../../Images/coursera.png";
import harvard from "../../Images/harvard.jpg";
import freecodecamp from "../../Images/freecodecamp.jpg";
import plussymbol from "../../Images/plussymbol.png";
function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [message, setMessage] = useState("");
  const username_ref = useRef();
  const email_ref = useRef();
  const password_ref = useRef();

  const googleSignupHandler = () => {
    console.log("google");
    alert("Google");
    // window.location = `${process.env.REACT_APP_API_ENDPOINT}/auth/google`;
  };
  // const signup = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   console.log(username);
  //   console.log(email);
  //   console.log(password);
  // };
  const signup = (e) => {
    if (loading) return;
    e.preventDefault();
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;

    if (
      email.trim() === "" ||
      password.trim() === "" ||
      username.trim() === ""
    ) {
      setMessage("Please fill out all the fields");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } else if (username.length < 6) {
      setMessage("Please enter a valid username ");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } else if (!usernamePattern.test(username)) {
      setEmail("");
      setMessage("Invalid Username");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } else if (!emailPattern.test(email)) {
      setEmail("");
      setMessage("Please enter a valid username ");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } else if (password.length < 6) {
      setMessage("Password length must be atleast 6 characters");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } else {
      setLoading(false);
      // console.log(username);
      fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setMessage(data.message);
          setLoading(false);
          setTimeout(() => {
            setMessage("");
          }, 5000);
        });
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

              <div className={styles.signup_text}>Sign Up</div>
              <div className={styles.already_button}>
                Already have an account?
                <span>
                  <Link to="/Login">Sign in here!</Link>
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
                  Sign up with Google
                </button>
              </div>
              <div className={styles.or_line_wrapper}>
                <hr />
                <span>or</span>
                <hr className={styles.hr2} />
              </div>
            </div>
            <form onSubmit={(e) => signup(e)}>
              <div className={styles.name_div}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={username}
                  ref={username_ref}
                  onChange={(e) => {
                    setUsername(username_ref.current.value);
                  }}
                  placeholder="Enter a user name"
                />
              </div>
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
              <button onClick={signup} className={styles.signup_button}>
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
                Sign up
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
            <div className={styles.signup_logo}>
              Intern <span>.ai</span>
              <div className="beta">beta</div>
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

export default SignUp;
