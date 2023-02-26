// setTimeout(function(){ 
// 	const fancybox = new Fancybox([
// 			{src: "#back-popup"}
// 	]);
// }, 20000);

function get_cookie(cookie_name) {
var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

if (results)
	return (unescape(results[2]));
else
	return null;
}


var visit = get_cookie("lawyer_visited");
$(document).mouseleave(function (event) {
	if (get_cookie("lawyer_visited") != '1'){
		event = event || window.event;
		if (event.clientY < 0 || event.clientY < 3) {
				
			const fancybox = new Fancybox([
					{src: "#back-popup"}
			]);

			var date1 = new Date();
			date1.setDate(date1.getDate() + 7);
			date1 = date1.toUTCString();
			document.cookie = "lawyer_visited=1;expires=" + date1;

			}
	}
});