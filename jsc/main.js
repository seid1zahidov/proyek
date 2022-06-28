if(localStorage.getItem('user') === null){
    localStorage.setItem('user',JSON.stringify([]))
}
function register(){
    let username = document.getElementById('name').value
    let emails = document.getElementById('email').value
    let passwords = document.getElementById('password').value
    
    if(username === '' || emails === '' || passwords === ''){
        alert('doldur')
    }
    else{
        let basket = JSON.parse(localStorage.getItem('user'))

        basket.push({
            name:username,
            email:emails,
            password:passwords
        })
        localStorage.setItem('user',JSON.stringify(basket))
        getusers()
        alert(`${username} isdidifadeci daxil oldu`)
    }

}
function getuser(){
    let basket  = JSON.parse(localStorage.getItem('user'))

    let div = ''

    basket.forEach( x=> {
        div += `
        <ul>
            <li>email:${x.email}</li>
            <li>password: ${x.password}</li>
       </ul>   
        `
    })

    document.getElementById('listrr').innerHTML = div
}
getuser()