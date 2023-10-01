<script>  
      const citater = [
        "Jeg er Bertram",
        "Jeg er web-udvikler",
        "Jeg vil Hjælpe dig",
        
      ]
      let IAM = citater[0]
      setInterval(() => {
            if(citater.indexOf(IAM) + 1 >= citater.length) IAM = citater[0]
            else IAM = citater[citater.indexOf(IAM) + 1]
      }, 5000)
  
  </script>
  
{IAM}
  
  