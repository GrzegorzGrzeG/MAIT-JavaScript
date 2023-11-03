const a = ["Zosia", "Marcin", "Kamil"] // Tablica 1
const b = ["Ala", "Puszek", "Zosia" ]// Tablica 2
const c = [...a,...b]
console.log(c)


const name = "Grzegorz";
const nameArr = [...name];
console.table(nameArr)

const fruits = ["apple", "banana"]
const vegetables = ["tomato", "cucamber"]
const mix = [...fruits, ...vegetables]
console.log(mix)


const getAverage = (...el) => {
    let sum = 0;
    el.map((el) => sum += el);

    return sum / el.length;
}
console.log(getAverage(2,4,5,6,7,79))

const state = {
    invoiceSection: false,
    availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    formStatus: "failed",
    isUserLogged: false
};

const stateCopy = {...state,
isUserLogged: true,
availableYears: state.availableYears.filter(el => el <= 1999)};
console.log(stateCopy)