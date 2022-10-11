var nome ='Aldo';
var stringa ='cliente';
var numero = 3.14;

document.getElementById('concatena').innerHTML = nome + ', ' + stringa + ', ' + numero;

var riga2 = nome + ', ' + stringa + ', ' + numero ; 
document.getElementById('concatena2').innerHTML = riga2 ;

var nome2 = 'Mario' ;

document.getElementById('var').innerHTML = nome2 ;

{
    let nome2 = 'Carla' ;
    document.getElementById('let').innerHTML = nome2 ;
}

document.getElementById('final').innerHTML = nome2 ;

document.getElementById('let2').innerHTML = nome2 ;

{
    let nome2 = 'Carla'; 
    document.getElementById('let3').innerHTML = nome2 ;
}

{
    let nome2 = 'Carla';
    document.getElementById('final2').innerHTML = nome2 ;
}

//

var numero2 = 15 ;

document.getElementById('iniziale').innerHTML += numero2 ;

{
    var somma = numero2+numero2;
    document.getElementById('valore1').innerHTML += somma + ', ' + (++somma) ;
}

{
    var sottrazione = numero2 - 10;
    document.getElementById('valore2').innerHTML += sottrazione + ', ' + (--sottrazione);
}

{
    var moltiplicazione = numero2 *3;
    document.getElementById('valore3').innerHTML += moltiplicazione;
}

{
    var divisione = numero2/3;
    document.getElementById('valore4').innerHTML += divisione;
}

{
    var concatenazione = numero2 + '' + somma + '' + sottrazione + '' + moltiplicazione + '' + divisione;
    document.getElementById('valore5').innerHTML += concatenazione ;
}