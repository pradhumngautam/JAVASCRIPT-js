//json is javascript object notation
//used to send and recive data in any language
const myObj= {
    name: "dev",
    hobbies:["eat","sleep","code"],
    hello :function(){
        console.log("hello!");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello()
console.log(typeof myObj);
//JSON

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON); //string
console.log(sendJSON.name); //undefined
//recive JSON

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);//object
