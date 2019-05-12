function Events(){};

// User Login Event (Extension Method)
Events.login = function(webUrl)
{
	let loading = true;

	Events.$('#loginInput').on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		if(loading)
		{
			document.querySelector('.loadingData').style.display="block";
		}


		let mobileNumber = document.querySelector('#mobileNumber');
		let passwordUser = document.querySelector('#passwordUser');

		api.login({

			body:{
				phone_number:mobileNumber.value,
				password:passwordUser.value
			},

			dataSelf:{
				loadingProcess:loading,
				url:webUrl,
				fetchLink:'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/accounts/login/',
				method:'POST'
			}

		})

		})
}

Events.userData = function()
{

	if
	(
		sessionStorage.getItem('token') && 
		sessionStorage.getItem('userInfo') &&
		(document.location.href.substr(document.location.href.lastIndexOf('/') + 1) != 'favorites.html') 
	)
	{
		 location.href = 'favorites.html';
	}

}


// Resets Loading
Events.resetsLoading = function()
{
	document.querySelector('.loadingData').style.display="none";
	console.log('Loading is reseted')
}

// Events Helper Functions
Events.$ = function(elementName)
{
	this.elOne = elementName;
	let elementOne =  document.querySelector(elementName);
	// Constructor Method
	let ctor = function()
	{
		// Constructor Method of Events Function
		let elementFull = document.querySelectorAll(this.elOne);
		if(elementFull.length == 1)
		{
			elementOne = document.querySelector(this.elOne)
		}else{
			elementOne = elementFull;
		}
	}

	ctor.on = function(eventName,callback)
	{
		elementOne ? elementOne.addEventListener(eventName,callback) : console.log('something went wrong on event listener');
	}

	ctor.insertAfter = function(referenceNode) {
	    elementOne.parentNode.insertBefore(referenceNode, elementOne.nextSibling);
	}

	ctor.insertBefore = function(referenceNode)
	{
		elementOne.parentNode.insertBefore(referenceNode, elementOne);
	}

	ctor.removeElement = function(){
		elementOne.parentNode.removeChild(elementOne);
	}

	return ctor;
}
