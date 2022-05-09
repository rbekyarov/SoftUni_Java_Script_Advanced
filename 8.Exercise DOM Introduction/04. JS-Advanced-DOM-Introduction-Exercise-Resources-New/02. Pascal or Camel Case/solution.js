function solve() {
  let textToConvert = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;
  let result = '';

  if(namingConvention != "Pascal Case" && namingConvention != "Camel Case"){
    document.getElementById("result").textContent = "Error!";
    return;
  }

  let array = Array.from(textToConvert.split(" "));
  let firstWord = array[0].toLowerCase();
  
  if (namingConvention == "Pascal Case") {
    result+= firstWord[0].toUpperCase();
    result += firstWord.slice(1, firstWord.length);
  } else {
    result += firstWord;
  }
  

  for(let i = 1; i < array.length; i++){
    let currentWord = array[i];
    for(let j = 0; j < currentWord.length; j++){
      if(j == 0){
        result += currentWord[j].toUpperCase();
      } else{
        result += currentWord[j].toLowerCase();
      }
    }
  }

  document.getElementById("result").textContent = result;
}