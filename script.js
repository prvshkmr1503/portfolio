function showMessage() {
  document.getElementById("output").textContent = "You clicked the button!";
}

function runCommand() {
  const input = document.getElementById("terminalInput").value.toLowerCase();
  const output = document.getElementById("terminalOutput");

  if (input === "hello") {
    output.textContent += "\n> hello\nHello, developer!";
  } else if (input === "clear") {
    output.textContent = "";
  } else if (input === "date") {
    output.textContent += `\n> date\n${new Date()}`;
  } else {
    output.textContent += `\n> ${input}\nCommand not found.`;
  }

  document.getElementById("terminalInput").value = "";
}
