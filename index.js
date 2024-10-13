function displayQuote(response) {

    new Typewriter("#quote", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}


function generateQuote(event) {
    event.preventDefault();
    
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "93b1062870ba3t0o0f4309f684f9efc9";
    let prompt = `User Instruction: Generate a quote ${promptInput.value}`;
    let context = "You are an inspirational quotes expert and you write short inspiring quotes. Your mission is to generate inspirational quotes in basic HTML. Make sure to follow user instructions."
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote)

