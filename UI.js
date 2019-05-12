function UI(){};

// Static HTML Pages
UI.headerPageHTML = function(headerData){

	let liUser = 
	headerData ? headerData.userInfo ? 
	' <li style="color:white;margin-top:10px;cursor:pointer;"><a onclick="event.preventDefault(); Events.userData(this)"> ' + headerData.userInfo.first_name + ' ' + headerData.userInfo.last_name + '</a></li><div class="userShowInfo"> <a onclick="event.preventDefault();api.login.logout(this)">Logout</a> </div>' 
	: '<li><a href="logout"><i class="fas fa-sign-in-alt"></i></a></li> ' 
	: '<li><a href="logout"><i class="fas fa-sign-in-alt"></i></a></li> ' ;


	document.querySelector('.fullContainer').innerHTML = 

		`
			<div class="fulHeader">
                        <div class="logo">
                            <img src="assets/img/logo2.png" alt="MilliOn" class="logoHeader">
                        </div>
                        <div class="rightSide">
                            <ul class="rightMenuIcons">
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

                            	${liUser}

                                
                                <li>
                                    <a href="#navbar">
                                        <i class="fas fa-bars"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
            </div>

		`

};

UI.footerPageHTML = function(){

	document.querySelector('.footer').innerHTML = 
	`

		<div class="footerMenuList">
                <ul>
                    <li><a href="#info">Info</a></li>
                    <li><a href="#about">Şirkət haqqında</a></li>
                    <li><a href="#mission">Missiyamız</a></li>
                    <li><a href="#vision">Uzunmüddətli məqsədlərimiz</a></li>
                    <li><span>All rights reserved 2019 &copy; MilliÖn</span></li>
                </ul>
                <ul>
                    <li><a href="#support">Support</a></li>
                    <li><a href="#faq">F.A.Q</a></li>
                    <li><a href="#details">Bizim üstünlüklərimiz</a></li>
                    <li><a href="#feedback">Sayt vasitəsilə müraciət</a></li>
                    <li><a href="#propofus">Bizlə işləməyin üstünlüyü</a></li>
                </ul>
                <ul>
                    <li><a href="#request">Request</a></li>
                    <li><a href="#offer">Offer</a></li>
                    <li><a href="#interg">Integration</a></li>
                    <li><a href="#complaint">Complaint</a></li>
                </ul>
                <ul>
                    <li><a href="#career">Career</a></li>
                    <li><a href="#vacancies">Vacancies</a></li>
                    <li><a href="#internprograms">Internship programs</a></li>
                </ul>
                <ul>
                    <li><a href="#additional">Additional</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#promotions">Promotions</a></li>
                    <li><a href="#bonuses">Bonuses</a></li>
                </ul>
            </div>

	`;

};



// Login Page
UI.loginPageHTML = function(){
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

// Services HTML
UI.servicesPageHTML = function(data)
{
    let liFull = '';

	for(let one in data.services)
    {
    	let img = data.services[one].icon ? data.services[one].icon : 'assets/img/not_found.png'
        liFull += `
        <li>
            <a href="#mobile">
                <img src="${img}" alt="${data.services[one].display_name_az}">
                <span>${data.services[one].display_name_az}</span>
            </a>
        </li>
        `;
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

}

// Favorites HTML
UI.favoritesPageHTML = function(data)
{
	let liFull = '';
	for(let one in data.dataCollection.templates)
	{
		let img = data.dataCollection.templates[one].png_icon ? data.dataCollection.templates[one].png_icon : 'assets/img/not_found.png';
		liFull += `

            <li>
            	<img 
            		src="${img}" 
            		alt="${data.dataCollection.templates[one].template_name}"/>
            		<span>${data.dataCollection.templates[one].template_name}</span>
            </li>


		`
	}

	document.querySelector('.menuContainer').innerHTML = `

		<div class="favoritesList">
                <div class="leftSide">
                    <div class="profileInfo">
                        <span class="profileName">${data.userInfo.first_name} ${data.userInfo.last_name}</span>
                        <span class="notifyData">
                            <i class="far fa-bell"></i> 
                            <span class="notifications">${data.userInfo.notifications_count}</span>
                        </span>
                        <span class="userBonus">${data.userInfo.bonus} bonus</span>
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
                        	${liFull}
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
            </div>

            
        <div class="bannerList">
                <div class="banner">
                    <img src="assets/img/banner1.jpg" alt="Banner1">
                </div>
    
                <div class="banner">
                    <img src="assets/img/banner2.jpg" alt="Banner2">
                </div>
    
                <div class="banner">
                    <img src="assets/img/banner3.jpg" alt="Banner3">
                </div>
    
    
        </div>


	`;
}


// Errors HTML

UI.Errors = function(className,errorMessage)
{
	// Constructor Method
	let ctor = function(){};

	ctor.warning = function(){
		console.warn(errorMessage);
	}

	ctor.success = function(){
		console.log(errorMessage);
	}

	ctor.danger = function(removeTime){
		console.error(errorMessage);
		let divEl = document.createElement('div');
		divEl.className = className;
		divEl.id = "errors";
		let divElText = document.createTextNode(errorMessage);
		divEl.appendChild(divElText);
		if(document.querySelector('#errors') == null)
			Events.$('.menuContent h1').insertBefore(divEl);

		setTimeout(function(){
			Events.$('.danger').removeElement();
		},removeTime)
	}

	return ctor;
}