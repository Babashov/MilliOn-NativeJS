window.addEventListener('DOMContentLoaded',event=>{


let pageNameUrl = 
(document.location.href.substr(document.location.href.lastIndexOf('/') + 1)).split('#') ?
(document.location.href.substr(document.location.href.lastIndexOf('/') + 1)).split('#') : 
(document.location.href.substr(document.location.href.lastIndexOf('/') + 1));

if(
    (sessionStorage.UsersData ? sessionStorage.UsersData.userPhoneNumber : false) && 
    (sessionStorage.UsersData ? sessionStorage.UsersData.userPassword : false) 

)
{

    login(
        {
            method:'POST',
            url:'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/accounts/login/',
            outside:{
                website_url:'services'
            },
            login:{
                phone_number:sessionStorage.UsersData ? sessionStorage.UsersData.split(',')[0] : '',
                password:sessionStorage.UsersData ? sessionStorage.UsersData.split(',')[1] : ''
            }
        },
        servicesData
    )



}else{

    loginPageHtml()

}

if
(
    pageNameUrl.length == 1 &&
    !(sessionStorage.UsersData ? sessionStorage.UsersData.userPhoneNumber : false) && 
    !(sessionStorage.UsersData ? sessionStorage.UsersData.userPassword : false) 
)
{
    loginPageHtml()
}else{


login(
    {
        method:'POST',
        url:'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/accounts/login/',
        outside:{
            website_url:'services'
        },
        login:{
            phone_number:sessionStorage.UsersData ? sessionStorage.UsersData.split(',')[0] : '',
            password:sessionStorage.UsersData ? sessionStorage.UsersData.split(',')[1] : ''
        }
    },
    servicesData
)


}


console.log(pageNameUrl)
console.log(pageNameUrl.length)


// if(pageNameUrl == 'index.html' || pageNameUrl == '')
// {
// }


let loginEvent = document.querySelector('#loginInput');


loginEvent ? loginEvent.addEventListener('click',function(e){
e.preventDefault()
e.stopPropagation();
let userPhoneNumber = document.querySelector('#mobileNumber') ? document.querySelector('#mobileNumber').value : '';
let userPassword = document.querySelector('#passwordUser') ? document.querySelector('#passwordUser').value : '';
console.log('buradi')
console.log(userPhoneNumber,userPassword)

login(
    {
        method:'POST',
        url:'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/accounts/login/',
        outside:{
            website_url:'services'
        },
        login:{
            phone_number:userPhoneNumber,
            password:userPassword
        }
    },
    servicesData
)


}) : loginPageHtml()


function loginPageHtml()
{
    return document.querySelector('.menuContainer').innerHTML = 
                            `
            <div class="navbar-links">
                    <a href="#home">Home</a>
                    <i class="fas fa-chevron-right"></i>
                    <a href="#login">Login</a>
            </div>

            <div class="menuFullContent">
                
                <div class="menuContent">
                        <h1>Profilini tamamla, bonus qazan</h1>
                        <p>
                                Pulvinar pellentesque habitant morbi tristique senectus et netus. Sed augue lacus viverra
                                vitae congue eu consequat ac. Diam donec adipiscing tristique risus nec feugiat in
                                fermentum.        
                        </p>
        
                        <form action="#">
                            <div class="formLoginInput">
                                <label for="mobileNumber">Mobil nömrə</label><br/>
                                <input type="text" id="mobileNumber">
                            </div>
        
                            <div class="formLoginInput">
                                <label for="passwordUser">Password</label><br/>
                                <input type="password" id="passwordUser">
                                <input id="loginInput" type="submit" value="Login">
                            </div>
                        </form>
                        <div class="additionalInputs">
                            <a href="#forget">Forgot your password?</a>
                            <a href="#help">Help</a>
                        </div>
                </div>

            </div>

                            `;
}



function login(loginParam,callback){

   let LoginUrl = 'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/accounts/login/';
   let servicesUrl = 'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/core/services/';
   let lastPaymentsUrl = 'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/payments/transactions/'
   let favoritesUrl = 'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/user-side/templates/';


   // const loginToken = await userLogin(LoginUrl);
   // const servicesWithToken = await fetch(servicesUrl);
   // const lastPaymentsWithToken = await fetch(lastPaymentsUrl);
   // const favoritesWithToken = await fetch(favoritesUrl);

   if
    (
    loginParam.login.phone_number && 
    loginParam.login.password && 
    loginParam.method
    )
   {

        fetch(loginParam.url,
        
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: loginParam.method,
            body: JSON.stringify(loginParam.login)
        }

        )
            .then(res=>{

                if(res.status == 200)
                {
                    res.json()

                    .then(data=>{
                        let sendDataToken = data ? data.token : false; 
                        if(sendDataToken)
                        {
                            sessionStorage.setItem("UsersData", 
                                [
                                    loginParam.login.phone_number,loginParam.login.password
                                ]
                                );
                            callback(data,loginParam.outside);
                        }else{
                            console.log('iwlemedi')
                            loginPageHtml();

                        }
                    })


                }else if(res.status == 400)
                {
                    console.log('400 Bad Request Send');
                    loginPageHtml()
                }else if(res.status == 401)
                {
                    console.log('Daxil Olmadi');
                    loginPageHtml()
                }
            })
            
            .catch(err=>console.log(err.message))

   }else{
    console.log('User Phone Number Or Password incorrect')
   }

    


}


function servicesData(loginData,outsideData)
{
    // console.log(loginData);
    fetch('https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/core/services/',{

                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':"JWT " + loginData.token
                },
                method: "GET"

            })

                .then(res=>{

                    if(res.status == 200)
                    {
                        changeHeaderMenu(loginData);
                        res.json()

                            .then(data=>{
                                console.log('Service Data Fetch Hissesdi');
                                servicesDataHtml(data,outsideData)

                            })


                    }else if(res.status == 401)
                    {
                        console.log('Services API not allowed get data')
                    }else{

                        throw new Error('Couldn\'t get data from services API ');
                    }

                })
                
                .catch(err=>console.log(err))
}


function servicesDataHtml(data,outsideData)
{
    console.log('data bunu qaytarir')
    console.log(data)

    let liFull = '';

    for(let one in data.services)
    {
        liFull += `
        <li>
            <a href="#mobile">
                <img src="${data.services[one].icon}" alt="${data.services[one].display_name_az}">
                <span>${data.services[one].display_name_az}</span>
            </a>
        </li>
        `;
        console.log(data.services[one])
    }


    document.querySelector('.menuContainer').innerHTML = `

        <div class="navbar-links">
                    <a href="#home">Home</a>
                    <i class="fas fa-chevron-right"></i>
                    <a href="#login">Services</a>
            </div> 

            <div class="servicesList">
                <ul>
                    
                    ${liFull}

                </ul>
            </div>

    `;

    window.location = "#services";

}





})


function getFavoritesData(elemObject)
{
    return login(
        {
            method:'GET',
            url:'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/accounts/login/',
            outside:{
                website_url:'services'
            },
            login:{
                phone_number:sessionStorage.UsersData ? sessionStorage.UsersData.split(',')[0] : '',
                password:sessionStorage.UsersData ? sessionStorage.UsersData.split(',')[1] : ''
            }
        },
        getFavoritesApi
    )
}


function getFavoritesApi(loginData,outsideData)
{
    // console.log(loginData);
    fetch('https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/user-side/templates/',{

                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':"JWT " + loginData.token
                },
                method: "GET"

            })

                .then(res=>{

                    if(res.status == 200)
                    {
                        changeHeaderMenu(loginData);
                        res.json()

                            .then(data=>{
                                console.log('Service Data Fetch Hissesdi');
                                getFavoritesApiHtml(data,outsideData)

                            })


                    }else if(res.status == 401)
                    {
                        console.log('Services API not allowed get data')
                    }else{

                        throw new Error('Couldn\'t get data from services API ');
                    }

                })
                
                .catch(err=>console.log(err))
}

function getFavoritesApiHtml(data,outsideData)
{
    return document.querySelector(".menuContainer").innerHTML = 

    `
        <div class="favoritesList">
                <div class="leftSide">
                    <div class="profileInfo">
                        <span class="profileName">Tural Məmmədov</span>
                        <span class="notifyData">
                            <i class="far fa-bell"></i> 
                            <span class="notifications">3</span>
                        </span>
                        <span class="userBonus">1200 bonus</span>
                    </div>

                    <div class="menuNavbar">
                        <ul>
                            <li>
                                <div class="selectedMenuLeft"></div>
                                <a class="selected" href="#home">Ana səhifə</a>
                            </li>
                            <li><a href="#payment">Birbaşa ödə</a></li>
                            <li><a href="">Kartlar</a></li>
                            <li><a href="">Ödənişlər</a></li>
                            <li><a href="">Bonuslar</a></li>
                            <li><a href="">Favoritlər</a></li>
                            <li><a href="">Profil</a></li>
                        </ul>
                    </div>
                </div>
            
                <div class="menuRightSide">
                    <h2>Favoritlər</h2>
                    <div class="rightPayments">
                        <ul>
                            <li class="borderSelected"><i class="fas fa-shopping-bag"></i><span>Shopping</span></li>
                            <li><i class="far fa-credit-card"></i><span>Credit payment</span></li>
                            <li><i class="fas fa-tv"></i><span>Computer loan</span></li>
                            <li><i class="fas fa-mobile-alt"></i><span>Computer loan</span></li>
                        </ul>
                    </div>

                    <div class="rightTablePayments">
                        <div class="lastPayment">
                            <h3>Son ödənişlər</h3>
                            <span class="rightOptions"></span>
                            <table id="tablePayments">
                                <tr>
                                    <th>Ad</th>
                                    <th>Kod</th>
                                    <th>Tarix</th>
                                    <th>Məbləğ</th>
                                    <th>TransactionID</th>
                                </tr>

                                <tr>
                                    <td>Cinema</td>
                                    <td>7818</td>
                                    <td>08.04.2016</td>
                                    <td>18 AZN</td>
                                    <td>214156589</td>
                                    <td><button>Ödə</button></td>
                                </tr>
                                <tr>
                                    <td>Azercell</td>
                                    <td>0506783211</td>
                                    <td>08.04.2016</td>
                                    <td>5 AZN</td>
                                    <td>9122342300</td>
                                    <td><button>Ödə</button></td>
                                </tr>

                                <tr>
                                    <td>Unibank</td>
                                    <td>4567</td>
                                    <td>08.04.2016</td>
                                    <td>230 AZN</td>
                                    <td>487621148</td>
                                    <td><button>Ödə</button></td>
                                </tr>

                                <tr>
                                    <td>Cinema</td>
                                    <td>7818</td>
                                    <td>08.04.2016</td>
                                    <td>18 AZN</td>
                                    <td>214156589</td>
                                    <td><button>Ödə</button></td>
                                </tr>
                                <tr>
                                    <td>Azercell</td>
                                    <td>0506783211</td>
                                    <td>08.04.2016</td>
                                    <td>5 AZN</td>
                                    <td>9122342300</td>
                                    <td><button>Ödə</button></td>
                                </tr>
    
                                <tr>
                                    <td>Unibank</td>
                                    <td>4567</td>
                                    <td>08.04.2016</td>
                                    <td>230 AZN</td>
                                    <td>487621148</td>
                                    <td><button>Ödə</button></td>
                                </tr>

                                <tr>
                                    <td>Cinema</td>
                                    <td>7818</td>
                                    <td>08.04.2016</td>
                                    <td>18 AZN</td>
                                    <td>214156589</td>
                                    <td><button>Ödə</button></td>
                                </tr>
                                <tr>
                                    <td>Azercell</td>
                                    <td>0506783211</td>
                                    <td>08.04.2016</td>
                                    <td>5 AZN</td>
                                    <td>9122342300</td>
                                    <td><button>Ödə</button></td>
                                </tr>
    
                                <tr>
                                    <td>Unibank</td>
                                    <td>4567</td>
                                    <td>08.04.2016</td>
                                    <td>230 AZN</td>
                                    <td>487621148</td>
                                    <td><button>Ödə</button></td>
                                </tr>


                            </table>
                        </div>
                    </div>

                </div>


    `
}




function changeHeaderMenu(resData)
{
    console.log('changeHeaderMenu yeri bawladi')
    console.log(resData)
    return document.querySelector(".fullContainer").innerHTML = 
    `
         <div class="fulHeader">
                        <div class="logo">
                            <img src="assets/img/logo2.png" alt="MilliOn" class="logoHeader">
                        </div>
                        <div class="rightSide">
                            <ul class="rightMenuIcons">
                                <li 
                                    onclick="getFavoritesData(this)"
                                    style="cursor:pointer;color:white;margin-top:10px;">
                                    ${resData.user.first_name} ${resData.user.last_name}
                                </li>
                                <li>
                                    <a href="#search">
                                        <i class="fas fa-search"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#phone">
                                        <i class="fas fa-phone"></i>
                                    </a>
                                </li>
                                <li>
                                        <select class="languageSelect">
                                            <option value="Azerbaijan">AZ</option>
                                            <option value="English">EN</option>
                                            <option value="Russian">RU</option>
                                        </select>
                                </li>
                                <li>
                                    <a href="logout">
                                            <i class="fas fa-sign-in-alt"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#navbar">
                                        <i class="fas fa-bars"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
            </div>

    `;
}