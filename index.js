const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que te deixou feliz?",
  "Quantas pessoas eu ajudei hoje?"
];


const ask = (index = 0) => {
  console.log(questions[index]);
}
const answers = [];
ask();
process.stdin.on("data", data => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  console.log(`
  
Legal Rafa,
Hoje você aprendeu:
${answers[0]}.

O que te aborreceu e você poderia melhorar:
${answers[1]}.

O que te deixou feliz:
${answers[2]}.

Você ajudou ${answers[3]} pessoas hoje.

Volte amanhã para novas reflexões.
  `);
});