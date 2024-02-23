let form = document.forms.signup
let inputs = form.querySelectorAll('input')
let eror_span = document.querySelector('.eror span')
let succs = document.querySelector('.success span')

form.onsubmit = (event) => {
    event.preventDefault()
    

    let error_count = 0
    let success = 12
   

    inputs.forEach(inp => {
        let isRequest = inp.parentNode.classList.contains('req')

        if ( isRequest === true && inp.value.length === 0) {
            inp.parentNode.classList.add('error')
            error_count++
        } else {
            inp.parentNode.classList.remove('error')
            
        }

        
    });
    if(error_count > 0) {
        alert('Заполни главные критерии!')
    } else {
        submit()
    }
    eror_span.innerHTML = error_count


    

    inputs.forEach(inpu => {
        if (inpu.value.length === 0) {
            success--
        } else {
           
        }
    })

    succs.innerHTML = success
    
 
  

}

    



function submit(form) {
    let fm = new FormData(form)

    let user = {}

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}



