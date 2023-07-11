import { useState, useEffect } from "react";


function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://quotes.rest/qod?category=inspire",
          {
            headers: {
              "X-TheySaidSo-Api-Secret": process.env.REACT_APP_API_KEY
            }
          }
        );
        const data = await response.json();
        const newQuote = data.contents.quotes[0].quote;
        setQuote(newQuote);
      } catch (error) {
        console.log("Error: " + error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Today's Quote:</h2>
      <p>{quote}</p>
    </div>
  );
}




export default Quote;
