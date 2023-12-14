var ride = 199;
function scuberGreetingForFeet (ride){
  // Write your code here!
  
  if (ride <= '400'){
    return 'This one is on me!';
  } else if (ride >= 2001){
    return 'I will gladly take your thirty bucks.'
  }else if (ride >= 2501){
    return 'No can do.'
  }

  //console.log(ride);
}
 
function ternaryCheckCity(NYC){
  // Write your code here!
  return NYC <= 'NYC'?'Ok, sounds good.': 'No go.'
}

function switchOnCharmFromTip(generous){
  // Write your code here!
  switch(generous){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous' :
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}
console.log(scuberGreetingForFeet);
