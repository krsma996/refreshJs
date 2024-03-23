
let lista = [1, 2, 3]

function transformToObjects(numberArray) {
return numberArray.map((item) =>({
    val:item,
    nikola:item,
    greet()  {
        console.log(item)
    }
}))

}
function axax(numberArray) {
   return numberArray.map(number => ({val: number}));
}

const nizovi = axax(lista);


console.log(nizovi);


  const { name: ime, age } = {
    name: "Nikola",
    age: 22
};
console.log(ime); // Output: Nikola
console.log(age); // Output: 22


const niz = [1,3,4,5,6];
const [prvi,drugi] = niz;

console.log(prvi);
console.log(drugi);


let kitica = {
    id: 1,
    kita: 33
};


function ispisi({id,kita}){
    localStorage.setItem('id',id);
    localStorage.setItem('kita',kita);
    
}

console.log(localStorage.getItem('id')); // Output: 1
console.log(localStorage.getItem('kita')); // Output: kita


const nizTest =['kita','kurac','picka'];
const nizTest2 = [1,3,4,5,6];

const kreiraniNiz = [...nizTest,{djekson:kitica}];
console.log(kreiraniNiz);

let mataruga = {
    ime: "marko",
    prezime: "mataruganovic"
}

let user =  {
    isAdmin: true,
    ...mataruga
}

console.log(user);


function saberi(a,b){
return a + b ;
}

function oduzmi (a,b){
    return a - b;
}

function izvrsvanjeOpearcija(a,b,operacijaCb){
    return operacijaCb(a,b);
}


let sabraniKurci = izvrsvanjeOpearcija(5,5,saberi);
console.log(sabraniKurci);


const setTimeNigga = setTimeout(() => {

})


console.log(setTimeNigga);

 let nikola = (a) => {
    console.log(a);
 }



function greeter(greeternF){
    greeternF();
}

let trecaKurac = (param) =>{
  const rezultatNikola = () => {
    nikola(param);
  }
  return rezultatNikola;
}

greeter(trecaKurac("kita"));



//ovo je JS clousure ili ti zatvaranje
// cuvas da funkcija unutrasnja cuva referencu na promenljivu 
function outerFunction() {
    let rezultat = "mrs govno jedno";

    function innerFunction() {
        console.log(rezultat);
    }

    return innerFunction; // Vraća se referenca na innerFunction
}


let aloBuraz = outerFunction();
console.log(aloBuraz);






const myObj = {
    name: 'Max',
    age: 28
}


const printName = (personObj) => {
    console.log(personObj.name);
}

printName(myObj);