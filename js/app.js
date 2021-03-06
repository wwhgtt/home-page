angular.module("ljaWebHomePage",[
	"ngRoute",
	"ngMessages",
	"controllers.HomePage",
	"directives.navgps",
	"directives.jobList",
	"controllers.jobList",
	"controllers.test",
	"services.common"
])
.config(function(
	$routeProvider,
	$locationProvider
){   
	$routeProvider
		.when("/",{
			templateUrl:"template/Home-page.html",
			controller:"HomePage"
		}).when("/join",{
			templateUrl:"template/joinus.html",
			controller:"jobList"
		}).when("/test",{
			templateUrl:"template/test.html",
			controller:"test"
		})
	 $locationProvider.html5Mode(true);
}) 