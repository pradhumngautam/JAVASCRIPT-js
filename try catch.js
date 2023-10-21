//error handling
"use strict"
const takeError = () => {
    try{
        const name = "dev";
        name = "joe";
    }catch (error){
        console.error(error.stack);
    }
};
takeError();
//

"use strict"
const makeError = () => {
    try{
        throw new customError("this is a custom error");
    }catch (err){
        console.error(err.name);
        console.log(err.message);
        console.log(err.stack);
    }
};
makeError();

function customError(message) {
    this.message= message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;

}
//
"use strict"
const makeError = () => {
    let i=1;
    while(i<=5){
        try{
            if (i%2 !==0){
                throw new Error("odd number");
            }
            console.log("even number")
        }   catch(err){
            console.error(err.stack);
        }   finally{
            console.log(".....finally");
            i++;
        }
    }
};
makeError();