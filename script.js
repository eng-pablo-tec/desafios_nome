// Lista de personagens com nome e sobrenome
const personagens = [
  "Mickey Mouse",
  "Peter Parker",
  "Clark Kent",
  "Bruce Wayne",
  "Tony Stark",
  "Harry Potter",
  "Alvo Dumbledore",
  "Homer Simpson",
  "Bart Simpson",
  "Lois Lane"
];

function novoDesafio() {
  const index = Math.floor(Math.random() * personagens.length);
  document.getElementById("personagem").innerText = personagens[index];
}

async function executarCodigo() {
  const codigo = document.getElementById("code").value;
  const consoleOutput = document.getElementById("console-output");
  consoleOutput.innerText = ""; // limpa saída anterior

  // guarda o console original
  const consoleLog = console.log;

  // redireciona console.log para a janela personalizada
  console.log = function (...args) {
    consoleOutput.innerText += args.join(" ") + "\n";
    consoleLog.apply(console, args); 
  };

  try {
    // executa o código JS como async para aguardar promises
    await eval(`(async () => { ${codigo} })()`);
  } catch (erro) {
    consoleOutput.innerText += "Erro: " + erro.message + "\n";
  }

  // restaura o console original
  console.log = consoleLog;
}
