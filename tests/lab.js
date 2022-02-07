const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removeAcento (text)
{
    text = text.toUpperCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'A');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'E');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'I');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'O');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'U');
    text = text.replace(new RegExp('[Ç]','gi'), 'C');
    return text;
}

rl.question('String: ', (name) => {

  name = removeAcento(name);
  name = name.replaceAll(' ', '_');
  console.log(name);
  rl.close();
});