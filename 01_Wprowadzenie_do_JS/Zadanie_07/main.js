const biggestCities = ["Tokio", "Delhi", "Szanghaj", "São Paulo", "Meksyk"];

function f(a,b){
    return a.length - b.length;
}
biggestCities.sort(f)
console.log(biggestCities[biggestCities.length - 1])