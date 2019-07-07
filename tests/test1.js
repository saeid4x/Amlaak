var babyAnimal=function(a){
    return function(b){
        var result=' i Love \t'+a+'\t and \t'+b;
        return result;
    }
}
var babyKoala=babyAnimal('Koalas');
console.log(babyKoala('elephant'));  // i love Koalas and elephent
console.log(typeof babyKoala);   //function