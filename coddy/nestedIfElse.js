let age = parseInt(inp[0]); // Don't change this line
let height = parseInt(inp[1]); // Don't change this line
let has_adult = inp[2] === "true"; // Don't change this line
let message; 
// Write your code below
if (age >= 12){
    if(height >= 150){
        if(age < 15){
            if(!has_adult){
                message = "Sorry, you need an adult with you";
            }else{
                message ="You can ride with adult supervision!";
            }
        }
        else{
            message = "You can ride by yourself!"
        }
    }
    else{
        message = "Sorry, you're not tall enough";
    }

}
else {
    message = "Sorry, you're too young"
}

console.log(message)