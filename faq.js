// let faqshow=document.getElementById('faq-text-show');
// let faqarrow1 =document.getElementById('faq-arrow-show');
// let faqarrow2 =document.getElementById('faq-arrow2-show');

// let data=false;


// faqarrow2.style.display ='none'

// function showData(){
//     const Active = faqshow.classList.toggle('faqtextshow');

//     if (Active) {
//         faqarrow2.style.display = 'block';
//         faqarrow1.style.display = 'none';
//     } else {
//         faqarrow2.style.display = 'none';
//         faqarrow1.style.display = 'block';
//     }
// }

const faqarrow2=document.getElementById('faq-arrow2-show')
faqarrow2.style.display='none'
function showData(element){
    console.log(element.parentElement);
    const faqitem= element.parentElement;
    const faqshow = faqitem.querySelector('#faq-text-show');
    const faqarrow1= faqitem.querySelector('#faq-arrow-show')
   

    const active= faqshow.classList.toggle('faqtextshow');
    if(active){
        faqarrow1.classList.add('rotate-down')
      
    }else{
        faqarrow1.classList.remove('rotate-down');
    }
}


//arrow 



