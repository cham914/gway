
export default function Home() {

    function go_to_q1 () {
        var q1 = document.getElementById('q1');
      var loader = document.getElementById('loading');
      var modal = document.getElementById('myModal');
      
        modal!.style.display = 'block'
        loader!.classList.remove('hide')
        setTimeout(()=> {
            loader!.classList.add('hide')
            q1!.classList.remove('hide')
        }, 2000)
      
      };
      
      function go_to_q2 () {
        var q1 = document.getElementById('q1');
        var q2 = document.getElementById('q2');
        var loader = document.getElementById('loading');
        q1!.classList.add('hide');
        loader!.classList.remove('hide')
        setTimeout(()=> {
            loader!.classList.add('hide')
            q2!.classList.remove('hide')
        }, 2000)
      }
      
      function go_to_q3 () {
        var q2 = document.getElementById('q2');
        var q3 = document.getElementById('q3');
        var loader = document.getElementById('loading');
        
        q2!.classList.add('hide');
        loader!.classList.remove('hide')
        setTimeout(()=> {
            loader!.classList.add('hide')
            q3!.classList.remove('hide')
        }, 2000)
      }
      
      function go_to_q4 () {
        var q3 = document.getElementById('q3');
        var q4 = document.getElementById('q4');
        var loader = document.getElementById('loading');
        q3!.classList.add('hide');
        loader!.classList.remove('hide')
        setTimeout(()=> {
            loader!.classList.add('hide')
            q4!.classList.remove('hide')
        }, 2000)
      }
      
      function go_to_q5 () {
        var q4 = document.getElementById('q4');
        var q5 = document.getElementById('q5');
        var loader = document.getElementById('loading');
        q4!.classList.add('hide');
        loader!.classList.remove('hide')
        setTimeout(()=> {
            loader!.classList.add('hide')
            q5!.classList.remove('hide')
        }, 2000)
      }
      
      function leave_q5 () {
        var q5 = document.getElementById('q5');
        var loader = document.getElementById('submit-loading');
        q5!.classList.add('hide')
        loader!.classList.remove('hide')
        setTimeout(()=> {
            window.location.replace("/choose")
        }, 5000)
      }
      
  return (
    <div>
            <nav>
        <p className="announcement">Over 5,000,000 Apple products in Offers out so far!</p>
        <div className="navbar">
          <div className="brand">
            <img src="./images/apple.jpg" height="90%" alt=""/>
          </div>
        </div>
      </nav>
    

<div className="container">

<div id="myModal" className="modal">
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%", width:"100%"}}>
    <div id="q1" className="survey-notify hide" style={{"backgroundColor": "white", "maxWidth": "400px", "margin": "0 auto;"}}>

        <p>Question 1 out of 5</p> <br/>
        <p>How often do you use Apple product</p>
        <button onClick={go_to_q2} className="survey-btn"> At least once a day</button>
        <button onClick={go_to_q2} className="survey-btn"> At least once a week</button>
        <button onClick={go_to_q2} className="survey-btn"> At least once a month</button>
        <button onClick={go_to_q2} className="survey-btn"> Almost never</button>
        <br/>

      </div>
      

  <div id="loading" className="survey-notify hide" style={{"backgroundColor": "white", "maxWidth": "400px", "margin": "0 auto;"}}>
  <div className="loader"></div>
    </div>

    <div id="submit-loading" className="survey-notify hide" style={{"backgroundColor": "white", "maxWidth": "400px", "margin": "0 auto;"}}>
        <p style={{"fontWeight": "bold"}}>Submitting Answsers</p>
        <br/>
        <div className="loader"></div>
        <br/>
        <p>Checking products in stock....</p>
          </div>

  
  <div id="q2" className="survey-notify hide" style={{"backgroundColor": "white", "maxWidth": "400px", "margin": "0 auto;"}}>
    <p>Question 2 out of 5</p> <br/>
    <p>When is the last time you bought a product from Apple</p>
    <button onClick={go_to_q3} className="survey-btn"> Within the day</button>
    <button onClick={go_to_q3} className="survey-btn"> Within the last week</button>
    <button onClick={go_to_q3} className="survey-btn"> Within the last month</button>
    <button onClick={go_to_q3} className="survey-btn"> More than a month ago</button>
    <br/>
  </div>

   
   <div id="q3" className="survey-notify hide" style={{"backgroundColor": "white", "maxWidth": "400px", "margin": "0 auto;"}}>
    <p>Question 3 out of 5</p> <br/>
    <p>Which device do you use most often to shop online</p>
    <button onClick={go_to_q4} className="survey-btn">iPhone / iPad</button>
    <button onClick={go_to_q4} className="survey-btn"> Computer</button>
    <button onClick={go_to_q4} className="survey-btn"> Smartphone</button>
    <br/>
  </div>


  
  <div id="q4" className="survey-notify hide" style={{"backgroundColor": "white", "maxWidth": "400px", "margin": "0 auto;"}}>
    <p>Question 4 out of 5</p> <br/>
    <p>What is your least favorite part about shopping at Apple</p>
    <button onClick={go_to_q5} className="survey-btn"> It's too addictive</button>
    <button onClick={go_to_q5} className="survey-btn"> Price too high</button>
    <button onClick={go_to_q5} className="survey-btn"> Shipping takes too long</button>
    <button onClick={go_to_q5} className="survey-btn"> None of the above</button>
    <br/>
  </div>


  <div id="q5" className="survey-notify hide" style={{"backgroundColor": "white", "maxWidth": "400px", "margin": "0 auto;"}}>
    <p>Question 5 out of 5</p> <br/>
    <p>Would you recommend Apple to friends</p>
    <button onClick={leave_q5} className="survey-btn"> Yes i would</button>
    <button onClick={leave_q5} className="survey-btn"> Probably</button>
    <button onClick={leave_q5} className="survey-btn"> No i would not</button>
    <button onClick={leave_q5} className="survey-btn"> Not sure</button>
    <br/>
  </div>
  </div>
</div>




      <div className="survey-notify">
        <p>
          <span style={{"color": "red", "fontWeight": "bold"}}> Congratulations! </span>
          You've been chosen to receive a brand new free item. To claim, simply
          answer a few quick questions regarding your experience with us
        </p>
        <br/>
        <p>
          <span style={{"color": "red", "fontWeight": "bold"}}> Attention: </span> This
          survey offer expires on within 24hrs.
        </p>

        <button style={{"maxWidth": "150px", "backgroundColor": "#000"}} onClick={go_to_q1} className="survey-btn"> Start survey</button>

      </div>

      <ul className="crumbs">
        <li className="crumbs_i"><a href="https://www.babtech.com/">Home</a></li>
        <li className="crumbs_i">
          <a href="https://www.babtech.com/category/giveaways/" rel="category tag">Giveaways</a>
        </li>
        <li className="crumbs_i">
          <a href="https://www.babtech.com/category/general/" rel="category tag">News</a>
        </li>
        <li className="crumbs_i">The 28th Weekly iPhone 14 pro max and other Apple products Giveaway</li>
      </ul>
      <h2 className="entry-title padding--04 flipboard-title">
        The 28th Weekly iPhone 14 Pro Max and other Apple products Giveaway
      </h2>

      <div className="entry-meta padding--04 margin--16auto">
        <a href="#" title="Posts by BabTech Staff" rel="author">Apple Inc. Staff</a>
        - January 10, 2023
      </div>

      <div className="product-images">
        
          <div className="mySlides">
            <img src="./images/iphone.jfif" style={{"width": "100%"}}/>
          </div>
      


        

      </div>

      <p>
        This is a weekly giveaway. We give away Apple products and 10 gift cards (worth $200 each) every 2nd week to our followers. 10 winners will receive an iphone, iwatch or macbook each if they qualify
      </p>
      <h3>The Entering Rules</h3>
      <p>1. You need to answer the surveys and share this link with 5 other friends</p>
      <p>2. After sharing the link with 5 friends, send us the proof (picture) via our instagram</p>
      <h3>The Winners</h3>
      <p>- There will be 10 winners in total</p>
      <p>- Announcement of winners on monday 12:00 (UTC +3)/24:07</p>

      <h3>Prize & Awarding</h3>
      <p>- Each winner will receive any iphone or apple product that they choose if they qualify</p>
      <p>- Prizes will be sent to the winners within 24hrs once the winner list is published</p>

      <h3>Additional Rules</h3>
      <p>By entering our contest, in case of winning, you agree that your name may be places on the list of winners, which will be publicly available</p>

      <h3>Terms and Conditions</h3>
      <p>Note: You do not have to buy any products, goods, etc. to enter our contest. Participation is free.</p>

      <div className="review">
        <div style={{"border": "thin solid grey", "padding": "10px"}}>
        <h2>Leave a review</h2>
        <p>Name</p>
        <input type="text"/>
        <p>Message</p>
        <textarea name="" id="" ></textarea>
        <p>Upload Image</p>
        <input type="file" name="" id=""/>
        <button style={{"width": "150px"}}>Submit Review</button>
    </div>
  <br/><br/>
        <h2>Reviews</h2>
        <br/>
        
        <div style={{"border": "thin solid grey", "marginBottom": "20px"}}>
          <div className="comments">
            <div style={{"display": "flex", "alignItems": "center"}}>
              <div className="dp">
                <img src="./images/m1.jpg" alt=""/>
              </div>
              <div>
                <p style={{"fontWeight": "bold"}}>Amina Nur</p>
                <p style={{"fontSize": "13px", "color": "rgb(172, 172, 172)"}}>
                  30 December 2023
                </p>
              </div>
            </div>
  <hr/>
            <div className="comment-txt">
              <p>
                I won a MacBook Pro for next to nothing, really cheap to enter and brilliant odds! Highly recommend!.
              </p>
            </div>
            <div className="photo">
              <div>
                <img src="./images/p6.jfif" alt=""/>
              </div>
            </div>
          </div>
        </div>
        

          
          <div style={{"border": "thin solid grey", "marginBottom": "20px"}}>
            <div className="comments">
              <div style={{"display": "flex", "alignItems": "center"}}>
                <div className="dp">
                  <img src="./images/m3.webp" alt=""/>
                </div>
                <div>
                  <p style={{"fontWeight": "bold"}}>Irfan Ashraf</p>
                  <p style={{"fontSize": "13px", "color": "rgb(172, 172, 172)"}}>
                    01 December 2023
                  </p>
                </div>
              </div>
    <hr/>
              <div className="comment-txt">
                <p>
                  Incredible, can't rate these guys highly enough! Won an Xbox Series X, Samsung 4K 65" TV and and Elite series 2 controller!! I was kept perfectly updated on the progress of deliveries and it all arrived very quickly. Kieran was so friendly and really made the whole experience special. Thanks again!
                </p>
              </div>
              <div className="photo">
                <div>
                  <img src="./images/m6.jpg" alt=""/>
                </div>
              </div>
            </div>
          </div>
          

            
        <div style={{"border": "thin solid grey", "marginBottom": "20px"}}>
            <div className="comments">
              <div style={{"display": "flex", "alignItems": "center"}}>
                <div className="dp">
                  <img src="./images/m2.jpg" alt=""/>
                </div>
                <div>
                  <p style={{"fontWeight": "bold"}}>Aidan Ajiad</p>
                  <p style={{"fontSize": "13px", "color": "rgb(172, 172, 172)"}}>
                    01 October 2023
                  </p>
                </div>
              </div>
    <hr/>
              <div className="comment-txt">
                <p>
                  The whole survey was done in a fun professional manner all the way throughout. The set up of the survey is laid out very simply and easy to follow to win the prizes and very happy and fortunate to be the winner of their first ever give away! My prize got to me in 2 days from being told I won this! Extremely fast!! Will definitely be doing these more regularly!!
                </p>
              </div>
              <div className="photo">
                <div>
                  <img src="./images/p1.webp" alt=""/>
                </div>
              </div>
            </div>
          </div>
          

            
        <div style={{"border": "thin solid grey", "marginBottom": "20px"}}>
            <div className="comments">
              <div style={{"display": "flex", "alignItems": "center"}}>
                <div className="dp">
                  <img src="./images/m4.jpg" alt=""/>
                </div>
                <div>
                  <p style={{"fontWeight": "bold"}}>Alicia</p>
                  <p style={{"fontSize": "13px", "color": "rgb(172, 172, 172)"}}>
                    12 July 2023
                  </p>
                </div>
              </div>
    <hr/>
              <div className="comment-txt">
                <p>
                  Awesome! I was lucky enough to win a brand new iPhone.
                  Would definitely recommend entering any of their competitions.

                </p>
              </div>
              <div className="photo">
                <div>
                  <img src="./images/p4.jfif" alt=""/>
                </div>
              </div>
            </div>
          </div>
          
            
        <div style={{"border": "thin solid grey", "marginBottom": "20px"}}>
            <div className="comments">
              <div style={{"display": "flex", "alignItems": "center"}}>
                <div className="dp">
                  <img src="./images/m5.jpg" alt=""/>
                </div>
                <div>
                  <p style={{"fontWeight": "bold"}}>Ghazaar Fuaad</p>
                  <p style={{"fontSize": "13px", "color": "rgb(172, 172, 172)"}}>
                    01 June 2023
                  </p>
                </div>
              </div>
    <hr/>
              <div className="comment-txt">
                <p>
                  It’s good so far as I’m new to it, I recommend to anyone to use Giveaway. Fingers crossed for anyone who wins.
                </p>
              </div>
              <div className="photo">
                <div>
                  <img src="./images/p3.jfif" alt=""/>
                </div>
              </div>
            </div>
          </div>
          


      </div>
    </div>
    </div>
  )
}
