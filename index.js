function showAnswer(response) {
    alert(response.data.answer);
}

let apiKey = "93b1062870ba3t0o0f4309f684f9efc9";
let context = "be polite and provide a detailed answer";
let prompt = "when was the first AI created";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("processing");
axios.get(apiURL).then(showAnswer);