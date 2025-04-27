    
let navMenu=document.getElementById('menubar');
let navList=document.getElementById('nav-bar')

navList.style.left='-800px';

navMenu.addEventListener('click',navMenuShow);
 
 function navMenuShow(){
    console.log('click');
    
    if(navList.style.left == '-800px'){
        navList.style.left = '0px'
    }else{
        navList.style.left ='-800px'
    }
 }