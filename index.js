//write your code here
function stripUpperCase(string){
    let lowerCase = "";
    let lowerCaseLetter;
    for(let i = 0; i < string.length; i++){
        // lowerCaseLetter = string.charAt();
      if(string[i] !== string[i].toUpperCase()){
         lowerCase += string[i];
      }
    }
    return lowerCase;
}
console.log(stripUpperCase(`HeLlo`));