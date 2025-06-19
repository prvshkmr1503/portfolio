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
      case "quote":
        const quotes = [
          "Push yourself, because no one else is going to do it for you.",
          "Success is no accident. It is hard work, learning, and sacrifice.",
          "Code is like humor. When you have to explain it, it’s bad.",
          "You don’t have to be great to start, but you have to start to be great."
        ];
        const random = Math.floor(Math.random() * quotes.length);
        typeLine("🧠 " + quotes[random], output);
        break;
      case "open github":
        typeLine("Opening GitHub profile...", output, () => {
          window.open("https://github.com/prvshkmr1503", "_blank");
        });
        break;
      case "help":
        typeLine("Available commands:\nhello, date, whoami, sudo, ipconfig, motivation, quote, open github, clear", output);
        break;
      case "clear":
        output.textContent = "";
        break;
      default:
        typeLine("❌ Command not found. Type 'help' to see available commands.", output);
    }
  });

  document.getElementById("terminalInput").value = "";
}



function typeLine(text, outputElement, callback) {
  const inputBox = document.getElementById("terminalInput");
  inputBox.disabled = true;

  let i = 0;
  const interval = setInterval(() => {
    outputElement.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      outputElement.textContent += "\n";
      inputBox.disabled = false;
      inputBox.focus(); // Focus back after it's re-enabled
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
