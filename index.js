let num1 = document.getElementById('01');
let num2 = document.getElementById('02');

let bck_text = document.getElementsByClassName('main_text')[0];

let first_part = document.getElementsByClassName('first_part')[0];
let second_part = document.getElementsByClassName('second_part')[0];
let third_part = document.getElementsByClassName('third_part')[0];

let phone = document.getElementsByClassName('phone')[0];

let two_block1 = document.getElementsByClassName('second_page_block1')[0];
let two_block2 = document.getElementsByClassName('second_page_block2')[0];
let two_block3 = document.getElementsByClassName('second_page_block3')[0];

num1.onclick = function() {
  num1.style.color = "#6FCBFF";
  num2.style.color = "#414141";
  num1.style.fontSize = "2em";
  num2.style.fontSize = "1em";
  bck_text.innerHTML = 'Home page';
    first_part.style.display = 'block'; 
    second_part.style.display = 'block';
    third_part.style.display = 'block';  
    two_block1.style.display = 'none'; 
    two_block2.style.display = 'none'; 
    two_block3.style.display = 'none';
}
num2.onclick = function() {
    num2.style.color = "#6FCBFF";
    num1.style.color = "#414141";
    num1.style.fontSize = "1em";
    num2.style.fontSize = "2em";
    bck_text.innerHTML = 'Our Service';
    first_part.style.display = 'none'; 
    second_part.style.display = 'none';
    third_part.style.display = 'none';  
    two_block1.style.display = 'block'; 
    two_block2.style.display = 'block'; 
    two_block3.style.display = 'block';                      
}