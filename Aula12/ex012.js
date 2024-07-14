let time = new Date;
let hours = time.getHours();
let minutes = time.getMinutes().toString().padStart(2, '0');
console.log(`Agora são ${hours}:${minutes}h.`)
if (hours <=12) {
    console.log("Bom Dia!")
}
else if (hours <= 18) {
    console.log("Boa Tarde!")
}
else {
    console.log("Boa Noite!")
}
