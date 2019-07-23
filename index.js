let num1 = document.getElementById('01');
let num5 = document.getElementById('05');
let bck_text = document.getElementsByClassName('main_text')[0];
let first_part = document.getElementsByClassName('first_part')[0];
let second_part = document.getElementsByClassName('second_part')[0];
let third_part = document.getElementsByClassName('third_part')[0];
num1.onclick = function() {
  bck_text.innerHTML = 'Home page';
  first_part.style.background = 'none';
  first_part.style.width = '5em';
  first_part.innerHTML = `<p>Home page</p>`;
  second_part.style.width = '10em';
  second_part.innerHTML = '';
  third_part.style.background = `url('./assets/Rectangle.png') no-repeat`;
  third_part.innerHTML = `<div class="main_info">
                        <h1>Software solutions for your business</h1>
                        <p>Let the team of highly qualified experts improve your business. Let the team of highly qualified experts improve your business</p>
                        <button class="btn read_more"> Read more</button>
                        </div>`;
}
num5.onclick = function() {
    bck_text.innerHTML = 'Our Service';
    first_part.innerHTML = '';
    first_part.style.background = `url('./assets/Rectangle1.png') no-repeat`;
    first_part.style.width = '25%';
    second_part.style.width = '30%';
    second_part.innerHTML = `<h2>Custom .Net devrlopment</h2>
                            <p>Aurius develops custom enterprise and consumer .NET and .Net Core - based software solutions of different complexity across various domains, platforms, and devices.</p> `;
    third_part.innerHTML = '';
    third_part.style.background = `url('./assets/Rectangle2.png') no-repeat`;                        
}