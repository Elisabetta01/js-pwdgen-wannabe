// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

const nome = prompt("Come ti chiami?");

const cognome = prompt("Qual è il tuo cognome?");

const colore = prompt("Qual è il tuo colore preferito?");

const numero = 21;

document.getElementById('password').innerHTML = `
${nome + cognome + colore + numero}`

