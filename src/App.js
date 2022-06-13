import { useState } from "react";
import axios from "axios";
import "./App.css";
import { QuoteCard } from "./components/QuoteCard";

const quote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left",
};

function App() {
  const [simpsonQuote, setSimpsonQuote] = useState(quote);
  console.log(simpsonQuote);
  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => setSimpsonQuote(data[0]));
  };
  return (
    <div className="App">
      <QuoteCard
        quote={simpsonQuote.quote}
        character={simpsonQuote.character}
        image={simpsonQuote.image}
      />
      <button type="button" onClick={getQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;
