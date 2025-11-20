// Get the number grade from the user
let numGrade = inp;

// Convert input to a number
numGrade = parseInt(numGrade);

// Determine the letter grade using a switch statement
let letterGrade;

switch (true) {
// Write your code here
    case numGrade >= 90 && numGrade <= 100:
        letterGrade = "A"
        break;
    case numGrade >= 80 && numGrade <= 89:
        letterGrade = "B"
        break;
    case numGrade >= 70 && numGrade <= 79:
        letterGrade = "C"
        break;
    case numGrade >= 60 && numGrade <= 69:
        letterGrade = "D"
        break;
    case numGrade >= 0 && numGrade <= 59:
        letterGrade = "F"
        break;
    default:
        letterGrade = "Invalid grade"
}

// Print the letter grade
console.log(`Letter grade: ${letterGrade}`);