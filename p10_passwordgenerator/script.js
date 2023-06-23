let alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','I','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let BigAlpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','i','o','p','q','r','s','t','u','v','w','x','y','z'];
let Number=['1','2','3','4','5','6','7','8','9','0'];

let symbol=['!','@','#','$','%','^','&','*','(',')','-','+','/','{','}','[',']',':',';'];


let password='';


for(i=0;i<3;i++){
    password+=alphabet[Math.floor(Math.random()*26)];

}
for(i=0;i<3;i++){
    password+=BigAlpha[Math.floor(Math.random()*26)];

}
for(i=0;i<2;i++){
    password+=Number[Math.floor(Math.random()*Number.length)];

}
for(i=0;i<2;i++){
    password+=symbol[Math.floor(Math.random()*symbol.length)];

}
let password2=password.split("");
console.log(password2.length);

let generatePass=document.getElementById("generatePass");
let passwordout=document.getElementById("randompassword");

generatePass.addEventListener('click',()=>{
    generatePassword();
});
function generatePassword(){
    let newPass='';
    for( let i=0;i<password.length;i++){
            newPass+=password2[Math.floor(Math.random()*password2.length)];
    }
    console.log(newPass);
    passwordout.innerHTML=`NEW PASSWORD IS ${newPass}`;
    // passwordout.innerHTML=`NEW PASSWORD IS ${password}`;
}


console.log(password);