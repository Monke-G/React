import './checkout-header.css';
import './CheckoutPage.css';

export function CheckoutPage() {
  return (
    <>
      <title>Checkout</title>

      <div ClassName="checkout-header">
        <div ClassName="header-content">
          <div ClassName="checkout-header-left-section">
            <a href="index.html">
              <img ClassName="logo" src="images/logo.png" />
              <img ClassName="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div ClassName="checkout-header-middle-section">
            Checkout (
            <a ClassName="return-to-home-link" href="index.html">
              3 items
            </a>
            )
          </div>

          <div ClassName="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div ClassName="checkout-page">
        <div ClassName="page-title">Review your order</div>

        <div ClassName="checkout-grid">
          <div ClassName="order-summary">
            <div ClassName="cart-item-container">
              <div ClassName="delivery-date">
                Delivery date: Tuesday, June 21
              </div>

              <div ClassName="cart-item-details-grid">
                <img
                  ClassName="product-image"
                  src="images/products/athletic-cotton-socks-6-pairs.jpg"
                />

                <div ClassName="cart-item-details">
                  <div ClassName="product-name">
                    Black and Gray Athletic Cotton Socks - 6 Pairs
                  </div>
                  <div ClassName="product-price">$10.90</div>
                  <div ClassName="product-quantity">
                    <span>
                      Quantity: <span ClassName="quantity-label">2</span>
                    </span>
                    <span ClassName="update-quantity-link link-primary">
                      Update
                    </span>
                    <span ClassName="delete-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>

                <div ClassName="delivery-options">
                  <div ClassName="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  <div ClassName="delivery-option">
                    <input
                      type="radio"
                      checked
                      ClassName="delivery-option-input"
                      name="delivery-option-1"
                    />
                    <div>
                      <div ClassName="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div ClassName="delivery-option-price">FREE Shipping</div>
                    </div>
                  </div>
                  <div ClassName="delivery-option">
                    <input
                      type="radio"
                      ClassName="delivery-option-input"
                      name="delivery-option-1"
                    />
                    <div>
                      <div ClassName="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div ClassName="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div ClassName="delivery-option">
                    <input
                      type="radio"
                      ClassName="delivery-option-input"
                      name="delivery-option-1"
                    />
                    <div>
                      <div ClassName="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div ClassName="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ClassName="cart-item-container">
              <div ClassName="delivery-date">
                Delivery date: Wednesday, June 15
              </div>

              <div ClassName="cart-item-details-grid">
                <img
                  ClassName="product-image"
                  src="images/products/intermediate-composite-basketball.jpg"
                />

                <div ClassName="cart-item-details">
                  <div ClassName="product-name">
                    Intermediate Size Basketball
                  </div>
                  <div ClassName="product-price">$20.95</div>
                  <div ClassName="product-quantity">
                    <span>
                      Quantity: <span ClassName="quantity-label">1</span>
                    </span>
                    <span ClassName="update-quantity-link link-primary">
                      Update
                    </span>
                    <span ClassName="delete-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>

                <div ClassName="delivery-options">
                  <div ClassName="delivery-options-title">
                    Choose a delivery option:
                  </div>

                  <div ClassName="delivery-option">
                    <input
                      type="radio"
                      ClassName="delivery-option-input"
                      name="delivery-option-2"
                    />
                    <div>
                      <div ClassName="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div ClassName="delivery-option-price">FREE Shipping</div>
                    </div>
                  </div>
                  <div ClassName="delivery-option">
                    <input
                      type="radio"
                      checked
                      ClassName="delivery-option-input"
                      name="delivery-option-2"
                    />
                    <div>
                      <div ClassName="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div ClassName="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div ClassName="delivery-option">
                    <input
                      type="radio"
                      ClassName="delivery-option-input"
                      name="delivery-option-2"
                    />
                    <div>
                      <div ClassName="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div ClassName="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ClassName="payment-summary">
            <div ClassName="payment-summary-title">Payment Summary</div>

            <div ClassName="payment-summary-row">
              <div>Items (3):</div>
              <div ClassName="payment-summary-money">$42.75</div>
            </div>

            <div ClassName="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div ClassName="payment-summary-money">$4.99</div>
            </div>

            <div ClassName="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div ClassName="payment-summary-money">$47.74</div>
            </div>

            <div ClassName="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div ClassName="payment-summary-money">$4.77</div>
            </div>

            <div ClassName="payment-summary-row total-row">
              <div>Order total:</div>
              <div ClassName="payment-summary-money">$52.51</div>
            </div>

            <button ClassName="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
