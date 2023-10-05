import "./index.css";

export const Product = () => {
  return (
    <div className="clarifion-content">
      <section className="flex">
        <div>
          <div className="first-section">
            <img
              className="clarifion-usage"
              src="./public/clarifionimage.png"
              alt="clarifionimage"
            />

            <div className="comment-rating">
              <div className="ken-t-profile">
                <div className="profile-photo">
                  <img src="./public/ken-t-profile.png" alt="ken-t-profile" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="product-title">
            <div className="clarifion-promo">
              <span>ONE TIME ONLY </span>
              <span>special price for 6 </span>
              <br />
              <span>extra Clarifion for only </span>
              <span>$14 each </span>
              <p>
                <span className="total-price">($84.00 total!)</span>
              </p>
            </div>

            <div className="clarifion-info">
              <div className="blue-square">
                <img
                  className="clarifion-square-bg"
                  src="./public/clarifionprice.png"
                  alt="clarifionprice"
                />
              </div>

              <div className="clarifion-specs">
                <div className="title-price">
                  <span>Clarifion Air Ionizer</span>
                </div>

                <div className="rating">
                  <img src="./public/star.png" alt="star" />
                  <img src="./public/star.png" alt="star" />
                  <img src="./public/star.png" alt="star" />
                  <img src="./public/star.png" alt="star" />
                  <img src="./public/star.png" alt="star" />
                </div>

                <div className="stock">
                  <img src="./public/dot.png" alt="dot" />
                  <span>12 left in Stock</span>
                </div>

                <div className="clarifion-purifier">
                  <span>
                    Simply plug a Clarifion into any standard outlet and{" "}
                  </span>
                  <br />
                  <span>
                    replace bulky, expensive air purifiers with a simple.
                  </span>
                </div>
              </div>

              <div className="prices">
                <span>
                  <s>$180</s>
                </span>
                <span>$84</span>
              </div>
            </div>

            <div className="clarifion-checks">
              <div className="check">
                <img src="./public/check.png" alt="check" />
                <span>
                  Negative Ion Technology may{" "}
                  <strong>help with allergens</strong>
                </span>
              </div>

              <div className="check">
                <img src="./public/check.png" alt="check" />
                <span>
                  Designed for <strong>air rejuvenation</strong>
                </span>
              </div>

              <div className="check">
                <img src="./public/check.png" alt="check" />
                <span>
                  <strong>Perfect for every room</strong> in all types of
                  places.
                </span>
              </div>
            </div>

            <div className="save-percentage">
              <div className="blue-circle-percentage">
                <img src="./public/percent.svg" alt="percent" />
              </div>

              <div className="save-text">
                <span>
                  Save <span>53%</span> and get <span>6 extra Clarifision</span>{" "}
                  for only <span>$14 Each</span>.
                </span>
              </div>
            </div>

            <div className="claim-disc">
              <span>
                YES - CLAIM MY DISCOUNT{" "}
                <img src="./public/rightarrow.png" alt="rightarrow" />
              </span>
            </div>

            <div className="shipping">
              <span>Free Shipping</span>
              <img className="line" src="./public/line.svg" alt="line" />
              <img className="lock" src="./public/lock.png" alt="lock" />
              <span>Secure 256-bit SSL encryption.</span>
              <img className="line" src="./public/line.svg" alt="line" />

              <img
                className="payment-method"
                src="./public/paymentmethod.svg"
                alt="paymentmethod"
              />
            </div>

            <div className="refuse-disc">
              <span>NO THANKS, I DON'T WANT THIS.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
