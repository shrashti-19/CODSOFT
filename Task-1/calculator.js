const buttons=document.querySelectorAll(".btn");
const display=document.getElementById('display');
let currentInput=''
let operator='';
let firstOperand=null;
let secondOperand=null;

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const value=button.getAttribute('data-value');

        if(value==='C'){
            currentInput='';
            operator='';
            firstOperand=null;
            secondOperand=null;
            display.innerText='0';
        }else if(value==='='){
            if(operator && currentInput){
                secondOperand=parseFloat(currentInput);
                let result=0;
                if(operator==='+'){
                    result=firstOperand+secondOperand;
                }else if(operator==='-'){
                    result=firstOperand-secondOperand;
                }else if(operator==='*'){
                    result=firstOperand*secondOperand;
                }else if(operator==='/'){
                    result=firstOperand/secondOperand;
                }
                display.innerText=result;
                firstOperand=result;
                operator='';
                currentInput='';
                }
            }else if(['+','-','*','/'].includes(value)){
                if(!operator){
                    firstOperand=parseFloat(currentInput);
                    currentInput='';
                    operator=value;
                }else if(currentInput){
                    secondOperand=parseFloat(currentInput);
                    if(operator==='+'){
                        firstOperand+=secondOperand;
                    }else if(operator==='-'){
                        firstOperand-=secondOperand;
                    }else if(operator==='*'){
                        firstOperand*=secondOperand;
                    }else if(operator==='/'){
                        firstOperand/=secondOperand;
                    }
                    operator=value;
                    currentInput='';
                    display.innerText=firstOperand;
                }
            }else{
                currentInput+=value;
                display.innerText=currentInput;
            }
        });
    });