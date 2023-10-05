import "./index.css";

export const Cart = () => {
  return (
    <div className="content">
      <section className="cart-steps">
        <div className="margin-steps flex">
          <div className="green-circle">
            <img src="./public/check.svg" />
          </div>

          <div className="padding-steps">
            <span>Step 1 : Cart Review</span>
          </div>
        </div>

        <div className="margin-steps flex">
          <div className="green-circle">
            <img src="./public/check.svg" />
          </div>

          <div className="padding-steps">
            <span>Step 2 : Checkout</span>
          </div>
        </div>

        <div className="margin-steps flex">
          <div className="blue-circle">
            <p>3</p>
          </div>

          <div className="padding-steps">
            <span className="bold">Step 3 : Special Offer</span>
          </div>
        </div>

        <div className="flex">
          <div className="outline-circle">
            <p>4</p>
          </div>

          <div className="padding-steps">
            <span>Step 4 : Confirmation</span>
          </div>
        </div>
      </section>
    </div>
  );
};
