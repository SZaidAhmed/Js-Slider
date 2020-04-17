var slide = document.querySelector('.slide');
var slideNo = 1;

function nextSlide(){
    if(slideNo > 2){
        slideNo = 1;
    }
    else{
        slideNo+=1;
    }
    switches(slideNo);
}
function previousSlide(){
    if(slideNo<2){
        slideNo=3;
    }
    else{
        slideNo-=1;
    }
    switches(slideNo);
}
function switches(n){
    switch (n) {
        case 1:
            slide.style.backgroundImage="linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('1.jpg')";
            break;
        case 2:
            slide.style.backgroundImage="linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('2.jpg')";
            break;
        case 3:
            slide.style.backgroundImage="linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('3.jpg')";        
            break;
    }
}
switches(slideNo);