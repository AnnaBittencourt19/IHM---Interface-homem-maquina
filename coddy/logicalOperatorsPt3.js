// Initialize variables
let has_license = true;
let has_space = false;
let has_experience = true;
// Calculate conditions
let can_sell_regular_pet = (has_license || has_experience) && has_space
let can_sell_exotic_pet = has_experience && has_license && has_space
let cannot_sell_any_pet = !(has_experience && has_license) || !has_space

// Don't delete the lines below
console.log("Can sell regular pet:", can_sell_regular_pet)
console.log("Can sell exotic pet:", can_sell_exotic_pet)
console.log("Cannot sell any pet:", cannot_sell_any_pet)

// se tem licença ou experiência e tem espaço, pode vender pet regular e espaço pode ter um animal normal
// se tem licença e experiência e espaço, pode vender pet exótico
// se não tem experiência ou licença ou não tem espaço, não pode vender nenhum pet
