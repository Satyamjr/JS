const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')
 
//we use setInterval because it run automatically after the given time here 
// which is 1000 which is equal to 1sec
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);