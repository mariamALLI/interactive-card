import bgCardback from "../assets/images/bgcardback.png";
import bgCardfront from "../assets/images/bgcardfront.png";
import cardLogo from "../assets/images/cardlogo.svg";
import { useHead } from "@unhead/react";

interface HeaderProps {
  cardHolder: string;
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardCvc: string;
}

export default function Header({
  cardHolder,
  cardNumber,
  cardMonth,
  cardYear,
  cardCvc,
}: HeaderProps) {
  // Set the document head using useHead from @unhead/react
  useHead({
    title: `Card for ${cardHolder || "Jane Appleseed"}`,
    meta: [
      {
        name: "description",
        content: "Interactive card component with dynamic styling.",
      },
    ],
  });
  // Format card number with spaces and pad with zeros if empty
  const formatCardNumber = (number: string) => {
    if (!number) return "0000 0000 0000 0000";
    const cleaned = number.replace(/\s/g, "");
    const padded = cleaned.padEnd(16, "0");
    return padded.match(/.{1,4}/g)?.join(" ") || "0000 0000 0000 0000";
  };

  // Format cardholder name
  const formatCardHolder = (name: string) => {
    return name || "Jane Appleseed";
  };

  // Format CVC
  const formatCvc = (cvc: string) => {
    return cvc.padEnd(3, "0") || "000";
  };

  return (
    <header>
      <div className="container" role="banner">
        <div className="backcard">
          <img
            className="back-card"
            id="back-card"
            src={bgCardback}
            alt="back view card"
          />
          <h1 id="back-card-digit">{formatCvc(cardCvc)}</h1>
        </div>

        <div className="frontcard">
          <img
            className="front-card"
            id="front-card"
            src={bgCardfront}
            alt="front card view"
          />
          <img className="card-logo" src={cardLogo} alt="card logo" />
          <h1 id="front-card-digit">{formatCardNumber(cardNumber)}</h1>
          <div className="card-name-and-month">
            <h1 id="card_name">{formatCardHolder(cardHolder)}</h1>
            <h2 id="month">
              <span id="mnth">{cardMonth.padStart(2, "0") || "00"}</span> /{" "}
              <span id="year">{cardYear.padStart(2, "0") || "00"}</span>
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}
