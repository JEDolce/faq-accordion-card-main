const btnArr = Array.from(document.getElementsByTagName('a'));
const paraArr = Array.from(document.getElementsByTagName('p'));

for(let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener('click', (e) => {
        e.preventDefault();  
    
        if (paraArr[i].classList.contains('display')) {
            paraArr[i].classList.remove('display'); 
            btnArr[i].style.fontWeight = '700';
            btnArr[i].classList.add('rotate');
        } else {
            paraArr[i].classList.add('display');
            btnArr[i].style.fontWeight = '400';
            btnArr[i].classList.remove('rotate');
        } 
    }      
)}

