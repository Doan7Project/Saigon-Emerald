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
        .when("/room", {
            templateUrl: "room.html"

        })

});

// slides picture code
var count = 1;
setInterval(function() {
    document.getElementById('radio' + count).checked = true;
    count++;
    if (count > 4) {
        count = 1;
    }
}, 5000);
// hien va an hinh



function fuctionpic1() {
    document.getElementById('pic1').style.opacity = "1";
    document.getElementById('pic2').style.opacity = "0";

    document.getElementById('pic3').style.opacity = "0";
    document.getElementById('pic4').style.opacity = "0";;
}

function fuctionpic2() {
    document.getElementById('pic1').style.opacity = "0";
    document.getElementById('pic2').style.opacity = "1";
    document.getElementById('pic3').style.opacity = "0";
    document.getElementById('pic4').style.opacity = "0";

}

function fuctionpic3() {
    document.getElementById('pic1').style.opacity = "0";
    document.getElementById('pic2').style.opacity = "0";
    document.getElementById('pic3').style.opacity = "1";
    document.getElementById('pic4').style.opacity = "0";

}

function fuctionpic4() {
    document.getElementById('pic1').style.opacity = "0";
    document.getElementById('pic2').style.opacity = "0";
    document.getElementById('pic3').style.opacity = "0";
    document.getElementById('pic4').style.opacity = "1";

}