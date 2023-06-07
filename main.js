//Date-Time//

// const d = new Date();
// let date = d.toLocaleDateString();
// let time = d.toLocaleTimeString();
// document.getElementById("datatime").innerHTML = date + " " + time;


//Test-milliseconds//

setInterval(myTimer, 2000);
function myTimer() {
  const d = new Date();
  //console.log(d)
  let date = d.toLocaleDateString();
  let time = d.toLocaleTimeString();
  document.getElementById("datatime").innerHTML = date + " " + time;
}

//update-2minute//

// setInterval(myTimer,  120000);
// function myTimer() {
//   const d = new Date();
//   //console.log(d)
//   let date = d.toLocaleDateString();
//   let time = d.toLocaleTimeString();
//   document.getElementById("datatime").innerHTML = date + " " + time;
// }