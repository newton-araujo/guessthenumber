//Update Page
function updateGame() {
    location.reload(true);
}


//Logic Game
    let listGuess = [];
    let attemps = 0

function verification() {
    let genarationNumber = Math.floor(Math.random() * 100) + 1; 


    function verificationNumber(number) {
        let guess = document.getElementById('guess');
        let inputNumber = document.getElementById('number').value;
        let attemp = document.getElementById('attemp')
        let result = document.getElementById('result')
        let submit = document.getElementById('submit')
        let msgGuess = document.getElementById('msgGuess')


        if (inputNumber === '') {
            msgGuess.innerHTML = '<p style ="color: red"> Enter a number </p>'
            attemps = -1
        }

        if (number === Number(inputNumber)){
            result.innerHTML = `<p style="color:green">YOU WON</p>`;
            submit.disabled = true;
        } else if (number !== Number(inputNumber)) {
            listGuess.push(inputNumber)
            guess.textContent = listGuess.join(', ')
            attemps += 1
            attemp.textContent = attemps

            if(attemps === 10) {
                result.innerHTML = `<p style="color:red">YOU LOSE</p>`
                submit.disabled = true
            } if (attemps === 4) {
                if (number < 50) {
                    msgGuess.innerHTML = '<p style = "color:Blue"> The number is less than 50 </p>'
                } else {
                    msgGuess.innerHTML = '<p style = "color:Blue"> The number is greater than 50 </p>'
                }
            }
        }

    }

    verificationNumber(genarationNumber)
    console.log(listGuess)
}