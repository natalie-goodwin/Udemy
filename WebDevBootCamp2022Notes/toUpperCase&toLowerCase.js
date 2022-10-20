var name = prompt("Write your name"); //prompts a name
var firstChar = name.slice(0,1); //slice to pull out first letter
var upperCaseFirstChar = firstChar.toUpperCase();//we want to only upper case first letter at greeting
var restOfName = name.slice(1, name.length); //we isolate rest of name
var lowerCaseRestOfName = restOfName.toLowerCase(); //we lowercase the rest of name; this covers all risk of person capitalizing other parts of name
var capitalisedName = upperCaseFirstChar + lowerCaseRestOfName; //concatenate first letter with rest of name
alert("Hello " + capitalisedName); //greet person with corrected name
