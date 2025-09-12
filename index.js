function scuberGreetingForFeet(ride){
  let result
  if (ride <= 400) {
    result = "This one is on me!"
  }
  else if (ride > 400 && ride < 2000) {
    result = "That will be twenty bucks."
  }
  if (ride > 2000 && ride <= 2500) {
    result = "I will gladly take your thirty bucks."
  }
  else if (ride > 2500){
    result = "No can do."
  }
  return result
}

function ternaryCheckCity(city){
  let destination
  if (city === 'NYC'){
    destination = 'Ok, sounds good.'
  }

  else {
    destination = 'No go.'
  }
  return destination
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip){
    case 'generous':
    response = "Thank you so much.";
    break;

    case 'not as generous':
    response = "Thank you.";
    break;

    default:
    response = "Bye.";
  }
  return response;
}