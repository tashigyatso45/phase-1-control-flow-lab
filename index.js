function scuberGreetingForFeet(feets){
  let result
  if (feets<=400){
  result = 'This one is on me!'
  }
else if (feets<=2000){
result = 'That will be twenty bucks.'
}
else if (feets<=2500){
result = 'I will gladly take your thirty bucks.'
}
else if (feets>2500){
result = 'No can do.'
}
return result
}

function ternaryCheckCity(city){
return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tips){
switch(tips){
case 'generous' :
  return ("Thank you so much.");
  case 'not as generous' :
    return ('Thank you.')
    default:
      return ("Bye.")
}
  

}