// <!Uzdevumi>
// <!JavaScript pamati (mainīgie, datu tipi)>

//1. Definē mainīgo ar nosaukumu "vārds", "vecums", "irStudents" un piešķir tiem vērtību. 
//Izdrukā mainīgā vērtību uz konsoles.

let firstName = "Krista";
let age = 34;
let isStudent = true;

console.log(firstName, age, isStudent);

//2. Definē mainīgo ar nosaukumu "augļi" un piešķir tam masīvu ar augļiem. Izdrukā masīvu uz konsoles.

let fruits = ["orange", "banana", "kivi"];
console.log(fruits);

//3. Definē mainīgo ar nosaukumu "persona" un piešķir tam objektu ar īpašībām, piemēram, vārds, vecums un vai ir students.

let person = {
    personName: "Marija",
    personAge: 8,
    personIsStudent: false
};
console.log(person);

//4. Izveido funkciju, kurā definē mainīgo ar nosaukumu "x" un piešķir tam vērtību 5. Izdrukā "x" vērtību funkcijā.

function task4() {
    let x = 5;
    console.log(x);
}
task4();

// 5. Ārpus funkcijas definē mainīgo ar nosaukumu "v" un piešķir tam vērtību 10. Izdrukā "v" vērtību funkcijā.

let V = 10;
function task5() {
    console.log(V);
}
task5();

// 6. Izveido funkciju, kurā definē mainīgo un piešķir tam vērtību.Izdrukā mainīgā vērtību funkcijā un ārpus tās.

function task6() {
    let OO = 15;
    console.log(OO);
}
task6()

//7. Izveido mainīgo ārpus funkcijas un piešķir tam vērtību.Funkcijā definē mainīgo ar to pašu nosaukumu 
//un piešķir tam citu vērtību.Izdrukā mainīgā vērtību funkcijā.

let value = 30;
function task7() {
    let value = 28;
    console.log(value);
}
task7()

// <!Operatori >

// !== nomaina vērtību uz pretējo

//1. Izveido programmu, kas saņem divus skaitļus kā ievadi un aprēķina to summu, izmantojot saskaitīšanas operatoru (+).

console.log(6 + 9);
function aritmetics(one, two) {
    console.log(one + two);
}
aritmetics(6, 9);

//2. Izveido mainīgo ar nosaukumu "num" un piešķir tam vērtību 10. Palielini "num" vērtību par 5, 
//izmantojot piešķiršanas saskaitīšanas operatoru (+=)

let num = 10;
num += 5;
console.log(num)

// <!Plūsma (control flow)>

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
    if (i % 2 === 0) {
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

//1. Uzraksti funkciju ar nosaukumu "sveiciens", kas ņem vārdu kā parametru un izdrukā sveiciena ziņu ar šo
//vārdu. Piemēram, ja vārds ir "Jānis", funkcija izdrukās "Sveiki, Jānis!".

const ffName = "Krista";
const texts1 = "Sveiki, ";
const texts2 = "!";
console.log(texts1 + ffName + texts2);

//2. Uzraksti funkciju ar nosaukumu "calculateArea", kas ņem taisnstūra garumu un platumu kā parametrus 
//un atgriež taisnstūra laukumu.

function calculateArea(garums, platums) {
    return (garums * platums);
}
let resultArea = calculateArea(5, 6);
console.log(("Taisnstūra laukums ir", resultArea))

//3. Uzraksti funkciju ar nosaukumu "isOdd", kas ņem skaitli kā parametru un atgriež true, ja tas ir pāra
//skaitlis, un false, ja tas ir nepāra skaitlis. Izmanto dalījuma atlikuma operatoru (%), lai pārbaudītu, vai
//skaitlis ir pāra.

function is0dd(number0dd) {
    return (number0dd % 2 === 0 ? "pāra skaitlis" : "nepāra skaitlis");
}
let result0dd = is0dd(19);
console.log(("Cipars ir", result0dd))

//4. Uzraksti funkciju ar nosaukumu "calculateSum", kas ņem masīvu ar skaitļiem kā parametru un atgriež to summu.

function calculateSum() {
    const numbers = [1, 1, 5, 1];
    let sum = 9;
    numbers.forEach(num => { sum + - num; });
    console.log(sum);
}
calculateSum();

//5. Uzraksti funkciju, kas pārbauda vai padotais vārds sakrīt ar esošo vārdu.

function chechName(giveName) {
    let curentName = "Vika";
    return giveName == curentName ? "Vārdi sakrīt" : "Vārdi nesakrīt"
}
let checkResult = chechName("Bille");
console.log(checkResult);

//6. Uzraksti funkciju, kas pārbauda vai sarakstā atrodas konkrēts vārds.//

//1.variants

let str = "Vilma, Sarmīte, Otto";
let str2 = "Otto";
console.log(str.lastIndexOf(str2) >= 0);

//2.variants

const data = {
    categories: [
        "specialword",
        "word1",
        "word2"
    ]
}
console.log(data.categories.includes("specialword"))
console.log(data.categories.includes("non-exist"))

//3.variants

const saraksts = ["Kika", "Lika", "Nika",];
console.log(saraksts.includes("Mika"));

//4.variants

const inventory = [
    { name: "appless" },
    { name: "bananass" },
    { name: "cherriess" },
];
function FindWord(word) {
    return word.name === "bananass";
}
console.log(inventory.find(FindWord));

//5.variants

const sarakstā = ["appl", "banan", "cherr"];
function FindWord(word) {
    return word === "banan";
}
console.log(sarakstā.find(FindWord));

//6.variants

const sarakstos = ["zini", "mini", "esi"];
function FindWordIn(word) {
    if (word === "esi") {
        return true;
    }
}
console.log(sarakstos.find(FindWordIn));

//7.variants

const findWord = [`suns`, `zivs`, `vilks`];
const vaiIr = function (vardi, arr) {
const find = (element) => element === vardi;
console.log(arr.findIndex(find));
};
vaiIr(`vau`, findWord);
vaiIr(`suns`, findWord);