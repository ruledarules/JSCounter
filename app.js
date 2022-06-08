// set initial count
let count = 0;

// select value and buttons
const bttns = document.querySelectorAll('.btn');
const value = document.getElementById('value');

bttns.forEach(function(all){  // adding a parameter allows to access each item
    all.addEventListener("click", function(event){  //using forEach allows us to set the event for all buttons
        const styles = event.currentTarget.classList;  // using .currentTarget allows proper interaction with the selected item/element
        if(styles.contains('decrease')){
            count --;
        }else if(styles.contains('increase')){
            count ++;
        }else{
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        } else if (count < 0){
            value.style.color = 'red';
        } if(count === 0){
            value.style.color = 'blue';
        }
        value.textContent = count;
    });
});