<script>  
      const quotes = [
        "Jeg hedder Bertram",
        "Jeg er webudvikler",
        "Jeg vil hjælpe dig",
        
      ]
      let currentQuoteIndex = 0
      let currentText = "";
      let shouldAddLetter = true;
      let waited = 0;

      setInterval(() => {
            if(!shouldAddLetter && currentText == "Jeg") {
              chooseNextQuote()
              shouldAddLetter = true;
              waited = 0
            } else if (currentText == quotes[currentQuoteIndex] && waited != 10) {
              shouldAddLetter = false
              waited++
            }
            else if(shouldAddLetter) addLetter()
            else removeLetter()
      }, 50)

      function chooseRandomQuote() {
        currentQuoteIndex = Math.floor(Math.random() * quotes.length)
      }

      function chooseNextQuote() {
        if(currentQuoteIndex == quotes.length - 1) currentQuoteIndex = 0
        else currentQuoteIndex++
      }

      function addLetter() {
        currentText = quotes[currentQuoteIndex].slice(0, currentText.length + 1)
      }

      function removeLetter() {
        currentText = quotes[currentQuoteIndex].slice(0, currentText.length - 1)
      }
  
  </script>
  
{currentText}
  
  