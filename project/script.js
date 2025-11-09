let sel = document.querySelector("select");
let device = document.querySelector("#device")
let value;
  sel.addEventListener("change",function(dets){
     console.log(dets.target.value)
     device.textContent =`${ dets.target.value} Device 
      selected`;
      value = dets.target.value
  });

let container = document.querySelector('.container')
let btn = document.querySelector('.button');
btn.addEventListener('click', () => {
  if(value) {
      document.querySelector('p').innerText = "Your Choice Successfully Submitted";
      document.querySelector('.okButton').style.display = 'inline';
      document.querySelector('p').style.color = "lightgreen";
  } else {
      document.querySelector('p').innerText = "No Device Selected";
        document.querySelector('p').style.color = "red";
  }
});

document.querySelector('.okButton').addEventListener('click', () => {
  document.querySelector('p').innerHTML = '';
  document.querySelector('.okButton').style.display = 'none';
});