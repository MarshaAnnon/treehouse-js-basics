// 1. Declare variables and capture input.
let adjective = prompt("Please give an adjective");
let verb = prompt("Please give an verb");
let noun = prompt("Please give an noun");

// 2. Combine the input with other words to create a story.
const sentence = `<p>Once upon a time there lived a ${adjective} cat. The ${noun} loved to ${verb} all day long</p>`

// 3. Display the story as a <p> inside the <main> element.

document.querySelector("main").innerHTML = sentence