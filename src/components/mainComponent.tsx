import { useState, useEffect } from "react";

interface MainProps {
  cardHolder: string;
  setCardHolder: (value: string) => void;
  cardNumber: string;
  setCardNumber: (value: string) => void;
  cardMonth: string;
  setCardMonth: (value: string) => void;
  cardYear: string;
  setCardYear: (value: string) => void;
  cardCvc: string;
  setCardCvc: (value: string) => void;
}

export default function Main({
  cardHolder,
  setCardHolder,
  cardNumber,
  setCardNumber,
  cardMonth,
  setCardMonth,
  cardYear,
  setCardYear,
  cardCvc,
  setCardCvc,
}: MainProps) {
  const [error, setError] = useState({
    cardholder: false,
    cardnumber: false,
    month: false,
    year: false,
    cvc: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReset = () => {
    setIsSubmitted(false);
    setCardHolder("");
    setCardNumber("");
    setCardMonth("");
    setCardYear("");
    setCardCvc("");
    setError({
      cardholder: false,
      cardnumber: false,
      month: false,
      year: false,
      cvc: false,
    });
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        handleReset();
      }, 5000); // Auto-return to form after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleCardHolderChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setCardHolder(value);

    if (value.trim() === "") {
      setError((prev) => ({ ...prev, cardholder: true }));
    } else {
      setError((prev) => ({ ...prev, cardholder: false }));
    }
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let value = event.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

    // Add spaces every 4 digits
    const formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;

    if (value.length <= 16) {
      setCardNumber(formattedValue);

      if (value.length === 0) {
        setError((prev) => ({ ...prev, cardnumber: true }));
      } else if (value.length < 16) {
        setError((prev) => ({ ...prev, cardnumber: true }));
      } else {
        setError((prev) => ({ ...prev, cardnumber: false }));
      }
    }
  };

  const handleCardMonthChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 2) {
      setCardMonth(value);

      const monthNum = parseInt(value);
      if (value === "" || monthNum < 1 || monthNum > 12) {
        setError((prev) => ({ ...prev, month: true }));
      } else {
        setError((prev) => ({ ...prev, month: false }));
      }
    }
  };

  const handleCardYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 2) {
      setCardYear(value);

      if (value === "" || value.length < 2) {
        setError((prev) => ({ ...prev, year: true }));
      } else {
        setError((prev) => ({ ...prev, year: false }));
      }
    }
  };

  const handleCardCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 3) {
      setCardCvc(value);

      if (value === "" || value.length < 3) {
        setError((prev) => ({ ...prev, cvc: true }));
      } else {
        setError((prev) => ({ ...prev, cvc: false }));
      }
    }
  };

  const handleAlphaInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const char = event.key;
    if (
      !/[a-zA-Z\s]/.test(char) &&
      char !== "Backspace" &&
      char !== "Delete" &&
      char !== "Tab"
    ) {
      event.preventDefault();
    }
  };

  const handleNumericInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const char = event.key;
    if (
      !/[0-9]/.test(char) &&
      char !== "Backspace" &&
      char !== "Delete" &&
      char !== "Tab"
    ) {
      event.preventDefault();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate all fields
    const newErrors = {
      cardholder: cardHolder.trim() === "",
      cardnumber: cardNumber.replace(/\s/g, "").length !== 16,
      month:
        cardMonth === "" || parseInt(cardMonth) < 1 || parseInt(cardMonth) > 12,
      year: cardYear === "" || cardYear.length !== 2,
      cvc: cardCvc === "" || cardCvc.length !== 3,
    };

    setError(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <main>
        <div className="container" role="main">
          <div className="completed-card">
            <div className="thank-card">
              <div className="checkmark">
                <img
                  className="checkmark_circle"
                  src="/iconcomplete.svg"
                  alt="Complete"
                />
              </div>

              <h1 className="thank-h1">Thank you!</h1>
              <p className="thank-p">We've added your card details</p>
              <button className="complete-btn" onClick={handleReset}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="container" role="main">
        <form id="form" className="form" onSubmit={handleSubmit}>
          <div className="form_card">
            <div className="form-name">
              <label htmlFor="cardholder">Cardholder Name</label>
              <input
                type="text"
                id="cardholder"
                name="cardholder"
                placeholder="e.g. Jane Appleseed"
                onKeyDown={handleAlphaInput}
                value={cardHolder}
                onChange={handleCardHolderChange}
                required
                aria-label="Cardholder Name"
                style={{
                  border: error.cardholder ? "1px solid hsl(0, 100%, 66%)" : "",
                }}
              />
              <div
                id="error1"
                className="error_msg"
                style={{ display: error.cardholder ? "block" : "none" }}
              >
                Can't be blank
              </div>
            </div>
          </div>

          <div className="form_card">
            <div className="form-number">
              <label htmlFor="cardnumber">Card Number</label>
              <input
                type="text"
                id="cardnumber"
                name="cardnumber"
                placeholder="e.g. 1234 5678 9123 0000"
                onKeyDown={handleNumericInput}
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
                aria-label="Card Number"
                style={{
                  border: error.cardnumber ? "1px solid hsl(0, 100%, 66%)" : "",
                }}
              />
              <div
                id="error2"
                className="error_msg"
                role="alert"
                style={{ display: error.cardnumber ? "block" : "none" }}
              >
                Wrong format, numbers only
              </div>
            </div>
          </div>

          <div className="form_card" role="group">
            <div className="form-month" role="group">
              <label htmlFor="cardmonth">
                Exp.Date (mm/yy) <span className="cvc">cvc</span>
              </label>
              <div className="flex-row">
                <div className="col">
                  <input
                    type="text"
                    id="cardmonth"
                    name="cardmonth"
                    placeholder="MM"
                    onKeyDown={handleNumericInput}
                    value={cardMonth}
                    onChange={handleCardMonthChange}
                    required
                    aria-label="Month"
                    aria-describedby="error3"
                    style={{
                      border: error.month ? "1px solid hsl(0, 100%, 66%)" : "",
                    }}
                  />
                  <div
                    id="error3"
                    className="error_msg"
                    role="alert"
                    style={{ display: error.month ? "block" : "none" }}
                  >
                    Can't be blank
                  </div>
                </div>

                <div className="col">
                  <input
                    type="text"
                    id="cardyear"
                    name="cardyear"
                    placeholder="YY"
                    onKeyDown={handleNumericInput}
                    value={cardYear}
                    onChange={handleCardYearChange}
                    required
                    aria-label="Year"
                    aria-describedby="error5"
                    style={{
                      border: error.year ? "1px solid hsl(0, 100%, 66%)" : "",
                    }}
                  />
                  <div
                    id="error5"
                    className="error_msg"
                    role="alert"
                    style={{ display: error.year ? "block" : "none" }}
                  >
                    Can't be blank
                  </div>
                </div>

                <div className="col">
                  <input
                    type="text"
                    id="cardcvc"
                    name="cardcvc"
                    placeholder="e.g. 123"
                    onKeyDown={handleNumericInput}
                    value={cardCvc}
                    onChange={handleCardCvcChange}
                    required
                    aria-label="CVC"
                    aria-describedby="error4"
                    style={{
                      border: error.cvc ? "1px solid hsl(0, 100%, 66%)" : "",
                    }}
                  />
                  <div
                    id="error4"
                    className="error_msg"
                    role="alert"
                    style={{ display: error.cvc ? "block" : "none" }}
                  >
                    Can't be blank
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="btn"
            id="submit-btn"
            type="submit"
            aria-label="Confirm"
          >
            Confirm
          </button>
        </form>
      </div>
    </main>
  );
}
