<script>  
      const quotes = [
        "Jeg hedder Bertram",
        "Jeg er webudvikler",
        "Jeg vil hjælpe dig",
        
      ]
      const PAUSE_DURATION = 10;

      let currentQuoteIndex = 0
      let currentText = "";
      let isAddingLetters = true;
      let pauseCounter  = 0;

      

      setInterval(() => {
            if(!isAddingLetters && currentText == "Jeg") {
              chooseNextQuote()
              isAddingLetters = true;
              pauseCounter  = 0
            } else if (currentText == quotes[currentQuoteIndex] && pauseCounter  != PAUSE_DURATION) {
              isAddingLetters = false
              pauseCounter ++
            }
            else if(isAddingLetters) addLetter()
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
  
  