//1 
var texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.";
    
    console.log(texto.length);
    console.log(texto.toLocaleUpperCase());
  
    let vogais = texto.match(/[aeiou]/gi);
           
    console.log(vogais === null ? 0 : vogais.length);
    console.log(texto.toLowerCase());
    console.log(texto.search("humanidade"));

//2
function numeros(){
    let numero= [];
    for(let i = 0; i < 100; i++){
        if(i%2 == 0){
    numero.push(i);
      }
     }
    return(numero.join(" - "))
    }