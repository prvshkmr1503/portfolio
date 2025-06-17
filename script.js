function showMessage() {
  document.getElementById("output").textContent = "You clicked the button!";
}

function runCommand() {
  const input = document.getElementById("terminalInput").value.toLowerCase();
  const output = document.getElementById("terminalOutput");

  typeLine(`> ${input}`, output, () => {
    switch (input) {
      case "hello":
        typeLine("Hello, developer!", output);
        break;
      case "date":
        typeLine(new Date().toString(), output);
        break;
      case "whoami":
        typeLine("You are Parvesh Kumar — future top-level developer & hacker 🔥", output);
        break;
      case "sudo":
        typeLine("⚠️ Access denied: you are not root (yet).", output);
        break;
      case "ipconfig":
        typeLine("IPv4: 127.0.0.1 (localhost)", output);
        break;
      case "motivation":
        typeLine("💡 You are not behind. You're in training. Legends are made in silence.", output);
        break;
      case "clear":
        output.textContent = "";
        break;
      default:
        typeLine("❌ Command not found.", output);
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
