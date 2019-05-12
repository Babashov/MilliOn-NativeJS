function UserLogin(){}
// 1-st param is: CORS Problem Resolve
UserLogin.signIn = function(url){
    let Cors = 'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/accounts/login/';
    fetch(Cors,
    
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            phone_number: "994559198063",
            password: "1234567m"
           })
    }

    )
        .then(res=>res.json())
        .then(data=>{
            console.log('iwledi:)')
            document.querySelector('.menuContainer').innerHTML = UI.servicesList();
        })
        .catch(err=>console.log(err))
}