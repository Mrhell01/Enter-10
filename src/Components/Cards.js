import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  
  const Navigate = useNavigate();
  const NavToRazorpay = () => {
    Navigate("/razorpay")

  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div class="card" style={{ padding: 40, height: 500, width: 500 }}>
          <img
            src="https://mezha.media/wp-content/uploads/2021/12/Netflix.jpg"
            style={{ height: 900 }}
          />
          <div class="card-body">
            <h5 class="card-title">Try Netflix</h5>
            <p class="card-text">
              Netflix is a subscription-based streaming service that allows our
              members to watch TV shows and movies on an internet-connected
              device.
            </p>
            <a href="/Netflix" class="btn btn-primary" style={{}}>
              Subscribe @Rs.199
            </a>
          </div>
        </div>
        <div class="card" style={{ padding: 40, height: 500, width: 500 }}>
          <img
            src="https://images.indulgexpress.com/uploads/user/imagelibrary/2020/4/3/original/disney.jpg?w=400&dpr=2.6"
            style={{ height: 900 }}
          />
          <div class="card-body">
            <h5 class="card-title">Try Disney+ HotStar</h5>
            <p class="card-text">
              Disney+ Hotstar is an online video streaming platform owned by
              Novi Digital Entertainment Private Limited, a wholly owned
              subsidiary of Star India Private Limited.
            </p>
            <a
              // href="https://rzp.io/l/pVtShnUHC"
              onClick={NavToRazorpay}
              class="btn btn-primary"
              style={{}}
            >
              Subscribe @Rs.199
            </a>
          </div>
        </div>
        <div class="card" style={{ padding: 40, height: 500, width: 500 }}>
          <img
            src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png"
            style={{ height: 900 }}
          />
          <div class="card-body">
            <h5 class="card-title">Try Prime Video</h5>
            <p class="card-text">
              {" "}
              Prime Video is an ad-free streaming service with thousands of
              on-demand movies and shows, including several original titles you
              won't find on any other platforms.
            </p>
            <a href="/Netflix" class="btn btn-primary" style={{}}>
            Subscribe @Rs.199
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
