var exports = module.exports ={};

exports.sortFriends = function(array, value){
  if(value === "alphAZ"){
   return array.sort(function(a, b) {
      if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
          return -1;
      if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
          return 1;
      return 0;
    });
  } else if (value === "alphZA") {
    return array.sort(function(a, b) {
       if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
           return -1;
       if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
           return 1;
       return 0;
     });
  } else if (value === "online") {
    return array.sort(function(a, b) {
       if (a.status.toLowerCase() > b.status.toLowerCase())
           return -1;
       if (a.status.toLowerCase() < b.status.toLowerCase())
           return 1;
       return 0;
     });
  } else if (value === "offline") {
    return array.sort(function(a, b) {
       if (a.status.toLowerCase() < b.status.toLowerCase())
           return -1;
       if (a.status.toLowerCase() > b.status.toLowerCase())
           return 1;
       return 0;
     });
  } else if (value === "gameAZ") {
    return array.sort(function(a, b) {
       if (a.lastName.toLowerCase() < b.lastName.toLowerCase())
           return -1;
       if (a.lastName.toLowerCase() > b.lastName.toLowerCase())
           return 1;
       return 0;
     });
  } else if (value === "gameZA") {
    return array.sort(function(a, b) {
       if (a.lastName.toLowerCase() > b.lastName.toLowerCase())
           return -1;
       if (a.lastName.toLowerCase() < b.lastName.toLowerCase())
           return 1;
       return 0;
     });
  } else {
    return array;
  }
};
