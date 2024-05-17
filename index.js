const inputs = document.querySelectorAll('input')
console.log(inputs)


inputs.forEach(input=>{
    input.addEventListener('input', (e)=>{
          const previousError = e.target.parentElement.querySelector('.error-message');
        if (previousError) {
            previousError.remove();
            e.target.style.border = "";
        }
        if(!e.target.value.endsWith('@gmail.com')){
            const errorEle = document.createElement('p')
            errorEle.classList.add('error-message')
            errorEle.textContent = 'Please Check your email'
            errorEle.style.color = 'red'
            e.target.style.border = "1px solid red"
            e.target.parentElement.append(errorEle)
        }
    })
})