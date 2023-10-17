let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let clearbtn = document.querySelector('#clear');
let erasebtn = document.querySelector('#erase');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150,150,150,0.87)";
});

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn);
        if(!btn.id.match('erase')){
            //display the current input number
            realTimeScreenValue.push(btn.value);
            currentInput.innerHTML = realTimeScreenValue.join('');
            
            //evalute the realtimescreen input 
            if(btn.classList.contains('number-button')){
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
                console.log(realTimeScreenValue);
            }
        }
        // When the earse button is pressed
        if(btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }
        // When the evalute is pressed
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
            console.log("evalueted")
        }
        // To prevent undefined error in screen
        // if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
        //     answerScreen.innerHTML = 0
        // }
    })
});