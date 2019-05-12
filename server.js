let defaultPageSession = 'services.html';
// Static Files
UI.headerPageHTML();
UI.loginPageHTML(); // Default loading login Page
UI.footerPageHTML();

// Events
Events.login(defaultPageSession);



(function()
{
	let pageUrl = document.location.href.substr(document.location.href.lastIndexOf('/') + 1);
	if(sessionStorage.getItem('token') && pageUrl  == 'index.html')
	{
		 location.href = defaultPageSession;
		
	}
})();