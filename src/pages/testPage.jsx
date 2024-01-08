import React, { useEffect, useState } from "react";
import UserAuth from "../components/auth/userAuth";

export default function TestPage() {
  const sessionAuth = window.sessionStorage.getItem("auth")
  const [auth, setAuth] = useState(sessionAuth || "");

  useEffect(() => {
    window.sessionStorage.setItem("auth", auth);
  },[auth]);

  const testHandle = (e) => {
    setAuth(e.target.value);
  }
  const buttonHandle = () => {
    let temp = {
      name: "jo", 
      age: 27
    }
    let json = JSON.stringify(temp);
    console.log(json);
    console.log(JSON.parse(json));
    window.sessionStorage.setItem("data", json);
  }

  const {isLogin} = UserAuth();
  console.log(isLogin);

  return(
    <>
      <input type="text" onChange={testHandle}/>
      <button onClick={buttonHandle}>test</button>
    </>
  )
}