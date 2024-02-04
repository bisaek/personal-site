<script>  
      const quotes = [
        "Jeg hedder Bertram",
        "Jeg er webudvikler",
        "Jeg vil hjælpe dig",
        
      ]
      let currentQuoteIndex = 0
      let currentText = "";
      let shouldAddLetter = true;

      setInterval(() => {
            if(!shouldAddLetter && currentText == "") {
              chooseNextQuote()
              shouldAddLetter = true;
            } else if (currentText == quotes[currentQuoteIndex]) shouldAddLetter = false
            else if(shouldAddLetter) addLetter()
            else removeLetter()
      }, 50)

      function chooseRandomQuote() {
        
      }

      function chooseNextQuote() {
        
      }

      function addLetter() {
        
      }

      function removeLetter() {
        
      }
  
  </script>
  
{currentText}
  
  