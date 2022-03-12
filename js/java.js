/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    // hide menubar when lick


function home() {
    document.getElementById("mySidebar").style.left = "-100%";
}

function supgarden() {
    document.getElementById("mySidebar").style.left = "-100%";
}

function homesuppool() {
    document.getElementById("mySidebar").style.width = "-100%";
}

function delgarden() {
    document.getElementById("mySidebar").style.left = "-100%";
}

function delocean() {
    document.getElementById("mySidebar").style.left = "-100%";
}

function bunggarden() {
    document.getElementById("mySidebar").style.left = "-100%";
}

function bungocean() {
    document.getElementById("mySidebar").style.left = "-100%";
}

function service() {
    document.getElementById("mySidebar").style.left = "-100%";
}

function loCation() {
    document.getElementById("mySidebar").style.left = "-100%";
}
// end menubar lick

function openNav() {
    // document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.left = "0";

}

function closeNav() {
    document.getElementById("mySidebar").style.left = "-100%";

}

// Code for single page
let app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"

        })

});

// slides picture code
<<<<<<< HEAD
var count = 1;
setInterval(function() {
    document.getElementById('radio' + count).checked = true;
    count++;
    if (count > 4) {
        count = 1;
    }
}, 5000);

var countd = 1;
setInterval(function() {
    document.getElementById('r-radio' + countd).checked = true;
    countd++;
    if (countd > 3) {
        countd = 1;
    }
}, 3000);
=======
app.run(function($rootScope, $http) {

    $http.get("../datajson/data.json").then(function(response) {
        $rootScope.items = response.data.gallery;
        console.log($rootScope.items);
    })
})
app.controller("homeCtr", function($scope, $rootScope) {


});
>>>>>>> e99d977a9785b86e65fed358a75a888bd12c6081
