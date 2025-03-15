const respostas = [
    "Com certeza! ✨",
    "Talvez... 🤔",
    "Não, acho que não. 🙅‍♀️",
    "É possível, mas não tenho certeza. 🤔",
    "As estrelas estão alinhadas a seu favor! 🌟",
    "O futuro é incerto, mas promissor! 🔮",
    "Acho que sim! 👍",
  ]
  
  const respostaElement = document.getElementById("resposta")
  const gerarButton = document.getElementById("gerar")
  
  gerarButton.addEventListener("click", () => {
    const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)]
    respostaElement.textContent = respostaAleatoria
  })
  