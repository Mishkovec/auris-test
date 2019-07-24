let num1 = document.getElementById('01');
let num5 = document.getElementById('05');
let bck_text = document.getElementsByClassName('main_text')[0];
let first_part = document.getElementsByClassName('first_part')[0];
let second_part = document.getElementsByClassName('second_part')[0];
let third_part = document.getElementsByClassName('third_part')[0];
let phone = document.getElementsByClassName('phone')[0];
phone.onclick = function(){
  phone.innerHTML = `<i class="fas fa-phone-alt"></i> 375 29 222 22 22`;
}
num1.onclick = function() {
  bck_text.innerHTML = 'Home page';
  first_part.style.background = 'none';
  first_part.style.width = '5em';
  first_part.innerHTML = `<p>Home page</p>`;
  first_part.style.width = '5em';
  first_part.style.marginLeft = '-3%';
  second_part.style.width = '19em';
  second_part.innerHTML = '';
  second_part.style.marginTop = '0';
  third_part.style.background = `url('./assets/Rectangle.png') no-repeat`;
  third_part.innerHTML = `<div class="main_info">
                        <h1>Software solutions for your business</h1>
                        <p>Let the team of highly qualified experts improve your business. Let the team of highly qualified experts improve your business</p>
                        <button class="btn read_more"> Read more</button>
                        </div>`;
  third_part.style.width = '80em';
  third_part.style.marginTop = '2.3em';
}
num5.onclick = function() {
    bck_text.innerHTML = 'Our Service';
    first_part.innerHTML = '';
    first_part.style.background = `url('./assets/Rectangle1.png') no-repeat`;
    first_part.style.width = '34%';
    first_part.style.marginTop = '3%';
    first_part.style.marginLeft = '5%';
    second_part.style.width = '33%';
    second_part.style.marginTop = '20%';
    second_part.innerHTML = `<h2>CUSTOM <span class = 'blue'>.NET</span> DEVELOPMENT</h2>
                            <p>Aurius develops custom enterprise and consumer .NET and .Net Core - based software solutions of different complexity across various domains, platforms, and devices.</p> `;
    third_part.innerHTML = '';
    third_part.style.width = '27em';
    third_part.style.marginTop = '8%';
    third_part.style.background = `url('./assets/Rectangle2.png') no-repeat`;                        
}