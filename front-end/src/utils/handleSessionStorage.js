export default function handleSessionStorage(user){
  sessionStorage.setItem("user", user.passport.user);
  sessionStorage.setItem("expires", new Date(user.cookie.expires));
  console.log("HANDLED")
  return
}