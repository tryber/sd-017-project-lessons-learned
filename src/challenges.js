// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(" ");
}

// Desafio 4
function concatName(arr) {
  let concat = arr[arr.length - 1] + ", " + arr[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(nums) {
  let i2 = 0;
  let soma = 0;
  for (let index = 0; index < nums.length; index += 1) {
    if (nums[i2] < nums[index]) {
        i2 = index;
    }
} 
for (let index2 = 0; index2 < nums.length; index2 += 1) {
    if (nums[index2] === nums[i2]) {
    soma = soma + 1;
    }
  } return soma;
}

//Desafio 9

function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = (mouse) - (cat1);
  let distancia2 = (mouse) - (cat2);
  if (Math.abs(distancia1) < Math.abs(distancia2)) {
      return 'cat1'
  } else if (Math.abs(distancia2) < Math.abs(distancia1)) {
      return 'cat2'
  } else if (Math.abs(distancia1) === Math.abs(distancia2)) {
      return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let arr1 = [];
  for (let index = 0; index < arr.length; index += 1) {
      if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      arr1.push('fizzBuzz')
  } else if (arr[index] % 3 === 0 && arr[index] % 5 !== 0) {
      arr1.push('fizz')
  } else if (arr[index] % 3 !== 0 && arr[index] % 5 === 0) {
      arr1.push('buzz')
  } else if (arr[index] % 3 !== 0 && arr[index] % 5 !== 0) {
      arr1.push('bug!')
  }
  }
   return (arr1);
}

// Desafio 9
function encode(toEc) {
  let chA = toEc.replace(/a/g, 1);
  let chE = chA.replace(/e/g, 2);
  let chI = chE.replace(/i/g, 3);
  let chO = chI.replace(/o/g, 4);
  let chU = chO.replace(/u/g, 5);
  let result1 = chU;
  return result1;
}
function decode(toDec) {
  let ch1 = toDec.replace(/1/g, 'a');
  let ch2 = ch1.replace(/2/g, 'e');
  let ch3 = ch2.replace(/3/g, 'i');
  let ch4 = ch3.replace(/4/g, 'o');
  let ch5 = ch4.replace(/5/g, 'u');
  let result2 = ch5;
  return result2;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
