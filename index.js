function displayQuote(response) {
    new Typewriter("#quote", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
    });
  }
  
  function generateQuote(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "93b1062870ba3t0o0f4309f684f9efc9";
    let context =
    "You are an inspirational quote expert and love to write short quotes. You mission is to generate a quote and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the quote.";
    let prompt = `User instructions: Generate an inspirational quote about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let quoteElement = document.querySelector("#quote");
    quoteElement.classList.remove("hidden");
    quoteElement.innerHTML = `<div class="generating">⏳ Generating a quote about ${instructionsInput.value}</div>`;
  
    axios.get(apiURL).then(displayQuote);
  }
  
  let quoteForm = document.querySelector("#quote-form");
  quoteForm.addEventListener("submit", generateQuote);

  