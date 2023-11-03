const names = ["Jan", "Piotr", "Pawel"]
const [jan, piotr, pawel] = names;
console.log(jan)
console.log(piotr)
console.log(pawel)

const generateRandomNumbers = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        let n = Math.floor(Math.random() * 5);
        arr.push(n);
    }
    const[first,,third] = arr;
    console.log(first + " : " + third)
    return arr;
}
console.log(generateRandomNumbers())

const cat = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
};

const showAnimal = ({name, age : catAge, getVoice}) => {
    console.log(`Kot ${name} ma ${catAge} lat i robi ${getVoice()}`);
}
showAnimal(cat)
