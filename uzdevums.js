let firstName = "Krista";
let age = 34;
let isStudent = true;
let fruits = ["orange", "banana", "kivi"];
let person = {
    personName: "Marija",
    personAge: 8,
    personIsStudent: false
};

console.log(firstName, age, isStudent);
console.log(fruits);

function myFunction() {
    let x = 5;
    console.log(x);
}
myFunction();

// let y = 10;
// function logY() {
//     console.log(y);
// }
// logY();

function task6() {
    let z = 15;
    console.log(z);
}
task6()
// Operatori 

// Izveido programmu, kas saņem divus skaitļus kā ievadi un aprēķina to summu, izmantojot saskaitīšanas operatoru (+).

console.log(6 + 9);
function aritmetics(one, two) {
    console.log(one + two);
}
aritmetics(6, 9);

// Izveido mainīgo ar nosaukumu "num" un piešķir tam vērtību 10. Palielini "num" vērtību par 5, 
//izmantojot piešķiršanas saskaitīšanas operatoru (+=)

let num = 10;
num += 5;
console.log(num)

//Plūsma (control flow)

//1. Izveido programmu, kas pārbauda, vai dots skaitlis ir pozitīvs, negatīvs vai nulle, izmantojot if-else izteiksmi. 
//Izdrukā "Pozitīvs", ja skaitlis ir lielāks par 0, "Negatīvs", ja tas ir mazāks par 0, un "Nulle", ja tas ir vienāds ar 0.

let number = 20;
let greeting = "";
if (number > 0) {
    greeting = "Pozitīvs";
} else if (number < 0) {
    greeting = "Negatīvs";
} else {
    greeting = "Nulle";
}

console.log(greeting);

//2. Izveido programmu, kas pārbauda, vai dots skaitlis dalās ar 3 un 5. Izmanto dalījuma atlikuma operatoru (%), 
//lai noskaidrotu, vai skaitlis dalās.Izdrukā "Dalās" , ja skaitlis dalās un "Nedalās" , ja skaitlis nedalās.

let number2 = 15;
if (number2 % 3 === 0 && number2 % 5 === 0) {
    console.log("Dalās");
} else {
    console.log("Nedalās");
}

//3. Izveido divus mainīgos, "x" un "y", un piešķir tiem skaitliskas vērtības. Izveido programmu, 
//kas salīdzina "x" un "y" vērtības, izmantojot lielāks par operatoru (>). Izdrukā "x ir lielāks par y", 
//ja tas ir patiess, un "x nav lielāks par y", ja tas ir nepatiess.

let x = 7;
let y = 3;
if (x > y) {
    greeting = "x ir lielāks par y";
} else {
    greeting = "x nav lielāks par y";
}

console.log(greeting);

//4. Izveido mainīgo ar nosaukumu "diena" un piešķir tam nedēļas dienas nosaukumu (piemēram, "Pirmdiena"). 
//Izmanto switch izteiksmi, lai izdrukātu ziņojumu atkarībā no dienas. 
//Piemēram, ja "diena" ir "Piektdiena", izdrukā "Nedēļas nogale ir gandrīz šeit!".

let diena = "Piektdiena";
switch (diena) {
    case "Piektdiena":
        console.log("Nedēļas nogale ir gandrīz klāt!");
        break;
    case "Pimdiena":
        console.log("Darba nedēļa klāt!");
        break;
    default:
        console.log("Nedēļas vidus!");
}
//5. Izveido programmu, kas izdrukā visus pāra skaitļus no 1 līdz 20, izmantojot for ciklu. 
//Izmanto dalījuma atlikuma operatoru (%), lai pārbaudītu, vai skaitlis ir pāra.

for (let i = 1; i <= 20; i++) {
    if (i % 2 ===0) {
        console.log(i);
    }
}

//6. Izveido mainīgo ar nosaukumu "skaitītājs" un uzstādi to uz 0. 
//Izveido programmu, kas izdrukā "Sveiki", kamēr "skaitītājs" ir mazāks par 5, izmantojot while ciklu. 
//Palielini "skaitītāju" iekšējā ciklā.

let skaitītājs = 0;
while (skaitītājs < 5) {
console.log("Sveiki")
    skaitītājs += 1;
}

//<!Funkcijas>

//1. Uzraksti funkciju ar nosaukumu "greeting", kas ņem vārdu kā parametru un izdrukā sveiciena ziņu ar šo
//vārdu. Piemēram, ja vārds ir "Jānis", funkcija izdrukās "Sveiki, Jānis!".



//2. Uzraksti funkciju ar nosaukumu "calculateArea", kas ņem taisnstūra garumu un platumu kā parametrus 
//un atgriež taisnstūra laukumu.

function calculateArea (garums, platums) {
    return (garums * platums);
}
let resultArea = calculateArea(5,6);
    console.log (("Taisnstūra laukums ir" , {resultArea}))

//3. Uzraksti funkciju ar nosaukumu "isOdd", kas ņem skaitli kā parametru un atgriež true, ja tas ir pāra
//skaitlis, un false, ja tas ir nepāra skaitlis. Izmanto dalījuma atlikuma operatoru (%), lai pārbaudītu, vai
//skaitlis ir pāra.

function is0dd (number0dd) {
    return (number0dd % 2 === 0 ? "pāra skaitlis": "nepāra skaitlis");
}
let result0dd = is0dd(19);
console.log(("Cipars ir" , {result0dd}))

//4. Uzraksti funkciju ar nosaukumu "calculateSum", kas ņem masīvu ar skaitļiem kā parametru un atgriež to summu.

function calculateSum() {
    const numbers =[1, 1, 5, 1];
    let sum =9;
    numbers.forEach (num=> {sum +- num;});
    console.log(sum);
}
calculateSum();

//5. Uzraksti funkciju, kas pārbauda vai padotais vārds sakrīt ar esošo vārdu.

const orginalName= "John Stone";
let enteredName = prompt("Enter a name");

const lowerOrginalName = orginalName.toLowerCase();
const lowerEnteredName = enteredName.toLowerCase();
console.log (lowerOrginalName ===lowerEnteredName);

if (orginalName===enteredName) {
    console.log("Names match");
} else {
    console.log ("Names do not match");
}

//. Uzraksti funkciju, kas pārbauda vai sarakstā atrodas konkrēts vārds.



