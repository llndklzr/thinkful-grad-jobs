export default function isAuth(){
  const user = sessionStorage.getItem("user");
  const cookieDate = new Date(sessionStorage.getItem("expires"));
  return user && cookieDate.getTime() >= new Date().getTime();
}