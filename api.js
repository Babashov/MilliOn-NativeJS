function api(){}

api.login = function(loginParam)
{
	let body = 
		loginParam.dataSelf.method === 'POST' || 
		loginParam.dataSelf.method === 'PUT' ?
		JSON.stringify(loginParam.body) : '';
	if
	(
		loginParam.body.phone_number && 
		loginParam.body.password &&
		body
	)
	
	{
			

		fetch(loginParam.dataSelf.fetchLink,{

			headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },

			method:loginParam.dataSelf.method,

			body,
			

		})

			.then(res=>{

				if(res.status == 200)
				{
					res.json()			
						.then(data=>{
							sessionStorage.setItem('token',JSON.stringify(data.token))
							sessionStorage.setItem('userInfo',JSON.stringify(data.user))
							console.log(data);
							loginParam.dataSelf.loadingProcess = !loginParam.dataSelf.loadingProcess;
							location.reload();
							location.href = loginParam.dataSelf.url
						})

				}else if(res.status == 401)
				{
					// throw new Error('You don\'t have permission to access this page ');
					UI
						.Errors('warning','You don\'t have permission to access this page')
							.warning();
					Events.resetsLoading();
				}else if(res.status == 400)
				{
					UI.Errors('danger','Login | password is not correct').danger(3000);
					Events.resetsLoading();
				}

			})

			.catch(err=>{Events.resetsLoading();console.log(err)})



	}else{
		Events.resetsLoading();

		loginParam.dataSelf.loadingProcess = !loginParam.dataSelf.loadingProcess;
		
		UI.Errors('danger','Login & password can not be empty').danger(3000);
		

		document.querySelector('.loadingData').style.display="none"


	}

}

api.login.logout = function(elemLogout){
	console.log(elemLogout)
	sessionStorage.clear();
	location.reload();

}

// Fetch Services Data
api.fetchData = function(data,callback)
{
	document.querySelector('.loadingData').style.display="block";
	fetch(data.url,{

		headers: {
              'Authorization':"JWT " + JSON.parse(sessionStorage.getItem('token'))
            },

			method:data.method,

	})
	.then(res=>{

	document.querySelector('.loadingData').style.display="none";

		if(res.status == 200)
		{
			res.json()
			.then(data=>{
				callback(data)
			})
		}

		if(res.status == 401)
		{
			console.log('Permission Denied')
		}

	})
}


