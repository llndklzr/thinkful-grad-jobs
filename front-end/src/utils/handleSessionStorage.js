export default function handleSessionStorage(user){
  // user id and cookie expire time are stored in session storage.
  // this should probably be done with useContext
  sessionStorage.setItem("user", user.passport.user);
  sessionStorage.setItem("expires", new Date(user.cookie.expires));
  return
}