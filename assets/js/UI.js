function UI(){}

UI.fullStaticHeader = function(signIn,selectedLang,signInIcon){

    let staticHeader = `
    
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

    return document.querySelector('.fullContainer').innerHTML = staticHeader;

}

UI.fullStaticFooter = function(){
    let staticFooter = `
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

    return document.querySelector('.footer').innerHTML = staticFooter;
}

UI.prototype.userLogin = function(signed = false){
    signed == true ? console.log('Login Olundu qaqaw') : console.log('Hmm Login Olunmuyub Helem:)');
    let output = `
    
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
                                <input type="submit" value="Login" onclick="UserLogin.signIn();event.preventDefault()">
                            </div>
                        </form>
                        <div class="additionalInputs">
                            <a href="#forget">Forgot your password?</a>
                            <a href="#help">Help</a>
                        </div>
                </div>

            </div>

    `;

    return document.querySelector('.menuContainer').innerHTML = output;
}

UI.servicesList = function(){
    let output = `
    
    <div class="navbar-links">
    <a href="#home">Home</a>
    <i class="fas fa-chevron-right"></i>
    <a href="#login">Services</a>
</div>

<div class="servicesList">
<ul>
    <li><a href="#mobile"><img src="assets/img/not_found.png" alt="Not Found"><span>Mobile</span></a></li>
    <li><a href="#banks"><img src="assets/img/not_found.png" alt="Not Found"><span>Banks</span></a></li>
    <li><a href="#utility_services"><img src="assets/img/not_found.png" alt="Not Found"><span>Utility Services</span></a></li>
    <li><a href="#entertaiment"><img src="assets/img/not_found.png" alt="Not Found"><span>Entertaiment</span></a></li>
    <li><a href="#insurance"><img src="assets/img/not_found.png" alt="Insurance"><span>Insurance</span></a></li>

    <li><a href="#mobile"><img src="assets/img/not_found.png" alt="Not Found"><span>Mobile</span></a></li>
    <li><a href="#banks"><img src="assets/img/not_found.png" alt="Not Found"><span>Banks</span></a></li>
    <li><a href="#utility_services"><img src="assets/img/not_found.png" alt="Not Found"><span>Utility Services</span></a></li>
    <li><a href="#entertaiment"><img src="assets/img/not_found.png" alt="Not Found"><span>Entertaiment</span></a></li>
    <li><a href="#insurance"><img src="assets/img/not_found.png" alt="Insurance"><span>Insurance</span></a></li>

    <li><a href="#mobile"><img src="assets/img/not_found.png" alt="Not Found"><span>Mobile</span></a></li>
    <li><a href="#banks"><img src="assets/img/not_found.png" alt="Not Found"><span>Banks</span></a></li>
    <li><a href="#utility_services"><img src="assets/img/not_found.png" alt="Not Found"><span>Utility Services</span></a></li>
    <li><a href="#entertaiment"><img src="assets/img/not_found.png" alt="Not Found"><span>Entertaiment</span></a></li>
    <li><a href="#insurance"><img src="assets/img/not_found.png" alt="Insurance"><span>Insurance</span></a></li>

</ul>
</div>

    
    `;

    return output;
}