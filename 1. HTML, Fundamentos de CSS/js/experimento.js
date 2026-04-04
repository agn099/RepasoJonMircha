function getCombinations(word) {
  let combinations = [];

  function generateCombinations(current, remaining) {
      if (remaining.length === 0) {
          combinations.push(current);
          return;
      }

      for (let i = 0; i < remaining.length; i++) {
          let newCurrent = current + remaining[i];
          let newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
          generateCombinations(newCurrent, newRemaining);
      }
  }

  generateCombinations('', word);
  return combinations;
}

// Obtener la palabra del usuario usando una ventana emergente
let userInput = prompt('Ingresa una palabra:');

// Verificar si se ingresó una palabra
if (userInput && userInput.trim().length > 0) {
  // Obtener y mostrar las combinaciones
  let combinations = getCombinations(userInput);
  console.log(`Combinaciones de "${userInput}":`, combinations);
} else {
  console.log('Ingresa una palabra válida.');
}
