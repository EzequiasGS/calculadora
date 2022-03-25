
function insert(numeros){
  let numero = document.getElementById('resultado').innerHTML; 
  document.getElementById('resultado').innerHTML =  numero + numeros ;
}
        
function clean(){
  document.getElementById('resultado').innerHTML = '';
  
}

function back(){
  let apagar = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = apagar.substring(0, apagar.length -1);
}


function calcular(){
  let resultado = document.getElementById('resultado').innerHTML;
  if (resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
  }else{
    document.getElementById('resultado').innerHTML = 'Vazio';
  }
}

