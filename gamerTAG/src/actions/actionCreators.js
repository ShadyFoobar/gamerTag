export function addFriend(currentUser, newFriend){
  return {
    type: 'ADD_FRIEND',
    currentUser: currentUser,
    newFriend: newFriend
  }
}

export function addUser(firstName, lastName, id, email, status, location, age, image, style, gamertags, friends, games){
  return {
    type: 'ADD_USER',
    firstName: firstName,
    lastName: lastName,
    id: id,
    email: email,
    status: status,
    location: location,
    age: age,
    image: image,
    style: style,
    gamertags: gamertags,
    friends: friends,
    games: games
  }
}

export function removeFriend(currentUser, friendID){
  return{
    type: 'REMOVE_FRIEND',
    currentUser: currentUser,
    friendID: friendID
  }
}
