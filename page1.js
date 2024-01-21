form.addEventListener('submit',function(event){
    event.preventDefault();

    let email = document.querySelector('#email')


    if(email.value == '') {
        console.log("invalidé")
    } else {
        console.log('valide')
    }
})


