// Theme Toggle
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
document.body.style.background="#f8fafc";
document.body.style.color="black";
toggle.textContent="☀️";
}else{
document.body.style.background="";
document.body.style.color="white";
toggle.textContent="🌙";
}
};

// Typing Animation
const text = ["Frontend Developer","SaaS Builder","Tech Innovator"];
let index = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type(){
if(charIndex < text[index].length){
typing.textContent += text[index][charIndex];
charIndex++;
setTimeout(type,100);
}else{
setTimeout(deleteText,1500);
}
}

function deleteText(){
if(charIndex > 0){
typing.textContent = text[index].substring(0,charIndex-1);
charIndex--;
setTimeout(deleteText,50);
}else{
index = (index + 1) % text.length;
setTimeout(type,500);
}
}

type();
