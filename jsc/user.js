let ss  = document.getElementById('btn')
ss.addEventListener('click',function(e){
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value


    let basket  = JSON.parse(localStorage.getItem('user'))
    let username = e.target.previousElementSibling.previousElementSibling.value
    let emailss = e.target.previousElementSibling.value

    let exitprod = basket.find( x => x.name == username && x.email == emailss)

    if(name === '' || email === '' || exitprod === undefined){
        alert('duzgun daxil et')
    }
    else{
        alert('bomba kimi')
    }
    alert('bu userden var')
    
    // localStorage.setItem('user',JSON.parse(exitprod))

})