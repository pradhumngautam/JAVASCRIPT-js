const myObj = { name : "dev"};
console.log(myObj.name);

const  anotherObj ={
    alive : true,
    answer: 42,
    hobbies:["eat","sleep","code"],
    beverage: {
        morning:"coffee"
    },
    action: function(){
        return `Time for ${this.beverage.morning}`
    }
};
console.log(anotherObj.answer);
console.log(anotherObj.action());

//Object Inheritance
const vehicle = {
    wheels: 4,
    engine: function(){
        return "vrooom";
    }
};
const car = Object.create(vehicle);
car.doors= 4;
car.engine= function(){
    return "whoooosh";
}
console.log(car.engine());
console.log(car.wheels);
const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function(){
    return "shhahhh"
};
console.log(tesla.engine());
console.log(Object.keys(anotherObj));
console.log(Object.values(anotherObj));

const band = {
    vocals : "robert hentein",
    guitar : "jimmy page",
    bass   : "john paul",
    drums  : "John Bonnham"
};
delete band.drums;
console.log(band.hasOwnProperty("drums"));
//loop
for (let job in band) {
    console.log(`on ${job}, its ${band[job]}!`);
};
//destructuring Objects
const { vocals, guitar, bass, drums} = band;
console.log(guitar);
console.log(vocals);

function sings({vocals}){return `${vocals} sings` };
console.log(sings(band));



