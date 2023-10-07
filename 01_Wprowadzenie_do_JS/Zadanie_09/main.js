const cake = "🎂";
const date  = new Date("2023");
const result = date.getUTCFullYear() - 2000;
for (let i = 1; i <= result ; i++) {
    console.log(i , " " ,cake)
}