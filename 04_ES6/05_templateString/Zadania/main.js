const n1 = 2;
const n2 = 4;
console.log(`Suma dwóch liczb ${n1} i  ${n2} to: ${n1 + n2}`)


const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    profession: "Lord of Wallachia"
};
const whoAreYou = ({name, lastname, yearOfBirth, profession}) => {
    console.log(`My name is ${name} ${lastname}.`);
    console.log(`I am ${2023 - yearOfBirth} years old.`);
    console.log(`My profession is ${profession}.`)
}


whoAreYou(person);

