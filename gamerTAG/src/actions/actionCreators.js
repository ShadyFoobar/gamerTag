export function addUser(firstName, lastName,  email, location, age, password, gamertags){
  return {
    type: 'ADD_USER',
    firstName: firstName,
    lastName: lastName,
    email: email,
    location: location,
    age: age,
    password: password,
    gamertags: gamertags,
  }
}

export function addFriend(currentUserID, friendID){
  return {
    type: 'ADD_FRIEND',
    currentUserID: currentUserID,
    friendID: friendID
  }
}
