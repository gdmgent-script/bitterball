// let i = 7;
// let untill = 100;
// let valueOne = 3;
// let valueTwo = 5;

let i = parseInt(prompt('Startwaarde'));
let untill = parseInt(prompt('Eindwaarde'));
let valueOne = parseInt(prompt('Eerste waarde deelbaar'));
let valueTwo = parseInt(prompt('Tweede waarde deelbaar'));

for(i; i<untill; i++){
    if(i%valueOne === 0 && i%valueTwo === 0){
        document.write('bitterbal <br>');
    }else if(i % valueOne === 0){
        document.write('bitter <br>');
    }else if(i%valueTwo === 0){
        document.write('bal <br>');
    }else{
        document.write(i + '<br>');
    }
}