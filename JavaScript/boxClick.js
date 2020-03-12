var count=0;
function countIncrease(){
    count++;
     document.getElementById('printdata').innerHTML="Number of times box clicked "+count;
};
var buttonClick=document.getElementById('clickCount');
 buttonClick.addEventListener('click',countIncrease);

