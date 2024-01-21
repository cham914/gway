import React from "react";

export default function Success() {
  const [tracking, setTracking] = React.useState("");
  const GenerateTracking = () => {
    let letter_list = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
    let fig_list = "1,2,3,4,5,6,7,8,9,0";
    let letter = letter_list.split(",");
    let fig = fig_list.split(",");
    let tracking_ = "APL-";
    for (var i = 0; i < 6; i++) {
      tracking_ += letter[Math.floor(Math.random() * letter.length)];
      tracking_ += fig[Math.floor(Math.random() * fig.length)];
    }
    setTracking(tracking_);
  };

  React.useEffect(() => {
    GenerateTracking()
  }, []);
  return (
    <div>
      <nav>
        <p className="announcement">Over 5,000,000 in Offers out so far!</p>
        <div className="navbar">
          <div className="brand">
            <img src="./images/apple.jpg" height="90%" alt="" />
          </div>
        </div>
      </nav>

      <div
        style={{
          height: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center;",
        }}
        className="inst_container"
      >
        <div style={{ textAlign: "center" }}>
          <img src="./images/success.png" height="100px" alt="" />
          <br /> <br />
          <h2>Congratulations! Your Order Has Been Confirmed.</h2>
          <p style={{ fontSize: "14px" }}>
            Please take note of your order number.
          </p>
          <br />
          <h2 style={{ color: "green" }}>{tracking}</h2>
        </div>
      </div>

      <p className="announcement">© Apple Inc. All right reserved</p>
    </div>
  );
}
