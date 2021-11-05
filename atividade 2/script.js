//questão 1
function concatenar(){
    let palavra1 = "Aprendendo ";
    let palavras = "strings em JavaScript";
    let frase = palavra1.concatenar(palavras);
    return(frase);
    }

//questão 2
function stringConcat(){
    let palavra1 = "palavra1";
    let palavra2 = "palavra2";
    let palavra3 = "palavra3";   
    let frase1 = "Esta é a frase com a ";
    let frase2 = "Esta é a frase com a ";
    let frase3 = "Esta é a frase com a ";
            
     console.log(frase1.concat(palavra1));
     console.log(frase2.concat(palavra2));
     console.log(frase3.concat(palavra3));
    }

//questão 3
function array(){
    let vetor = ["a", "b", "a", "a", "c", "b"];
    let ordenado = vetor.sort();
    console.log(ordenado);
    let reverse = ordenado.reverse();
    console.log(reverse);
  }