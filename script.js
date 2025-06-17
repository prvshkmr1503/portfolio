function showMessage() {
  document.getElementById("output").textContent = "You clicked the button!";
}

function runCommand() {
  const input = document.getElementById("terminalInput").value.toLowerCase();
  const output = document.getElementById("terminalOutput");

  typeLine(`> ${input}`, output, () => {
    if (input === "hello") {
      typeLine("Hello, developer!", output);
    } else if (input === "clear") {
      output.textContent = "";
    } else if (input === "date") {
      typeLine(new Date().toString(), output);
    } else {
      typeLine("Command not found.", output);
    }
  });

  document.getElementById("terminalInput").value = "";
}

function typeLine(text, outputElement, callback) {
  let i = 0;
  const interval = setInterval(() => {
    outputElement.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      outputElement.textContent += "\n";
      if (callback) callback();
    }
  }, 30); // typing speed
}
// Run command on pressing Enter
document.getElementById("terminalInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    runCommand();
  }
});
