import "./index.css";

export const Header = () => {
  return (
    <div>
      <header>
        <div className="content">
          <div className="first flex">
            <img src="./public/1.svg" />
            <span>30-DAY SATISFACTION GUARANTEE</span>
          </div>

          <div className="second">
            <img src="./public/2.svg"></img>
            <span>FREE DELIVERY ON ORDERS OVER $40.00</span>
          </div>

          <div className="third">
            <img src="./public/3.svg"></img>
            <span>50.000+ HAPPY CUSTOMERS</span>
          </div>

          <div className="fourth">
            <img src="./public/4.svg"></img>
            <span>100% MONEY BACK GUARANTEE</span>
          </div>
        </div>
      </header>

      <section className="clarifion">
        <div>
          <img className="clarifion-logo" src="./public/clarifionlogo.png" />
        </div>

        <div className="mcafee-norton">
          <div>
            <img className="mcafee-logo" src="./public/mcafee.png"></img>
          </div>

          <div>
            <img className="norton-logo" src="./public/norton.png"></img>
          </div>
        </div>
      </section>

      <section className="order-title">
        <h1>Wait ! Your Order In Progress.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </section>
    </div>
  );
};
