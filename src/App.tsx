import { useState, useEffect } from "react";
import Header from "./components/header";
import Main from "./components/mainComponent";
import CardSkeleton from "./components/CardSkeleton";
import FormSkeleton from "./components/FormSkeleton";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <CardSkeleton />
        <FormSkeleton />
      </>
    );
  }

  return (
    <>
      <Header
        cardHolder={cardHolder}
        cardNumber={cardNumber}
        cardMonth={cardMonth}
        cardYear={cardYear}
        cardCvc={cardCvc}
      />
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Main
          cardHolder={cardHolder}
          setCardHolder={setCardHolder}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardMonth={cardMonth}
          setCardMonth={setCardMonth}
          cardYear={cardYear}
          setCardYear={setCardYear}
          cardCvc={cardCvc}
          setCardCvc={setCardCvc}
        />
      </ErrorBoundary>
    </>
  );
}

export default App;
