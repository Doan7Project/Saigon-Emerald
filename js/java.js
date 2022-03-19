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

function rooms() {
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
// load json data
app.run(function($rootScope, $http) {
    $http.get("../datajson/data.json").then(function(response) {

        $rootScope.items = response.data.rooms;
        console.log($rootScope.items);
    })
})

app.controller("roomCtr", function($scope, $rootScope) {
    $scope.view = function(id) {

        // alert(ID);
        let phone = $scope.items.find(el => el.id == id);

        $scope.image = phone.image;
        $scope.smallpic1 = phone.smallpic1;
        $scope.smallpic2 = phone.smallpic2;
        $scope.smallpic3 = phone.smallpic3;

        $('#myModal').modal('show');
    }



});
// end load
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

// top function
window.onscroll = function() {
    scrollFunction()
};
var mybutton = document.getElementById('topbtn');

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        mybutton.style.transition = "all linear 0.4s";
    } else {
        mybutton.style.display = "none";
        mybutton.style.transition = "all linear 0.4s";
    }
}

function topFunction() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
var rootElement = document.documentElement;

function topFunction() {

    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// show modal booking form


function showform() {
    rootElement.scrollTo({
        top: 4200,
        behavior: "smooth"
    });
    document.getElementById('modal-form').style.display = "block";


}

function closes() {



    document.getElementById('modal-form').style.display = "none";

}




// window.onclick = function(event) {
//     if (event.target == document.getElementById('modal-form')) {
//         document.getElementById('modal-form').style.display = "none";
//     }
// }

function bookform() {
    var alForm1 = document.getElementById('r-alart-1');
    var alForm2 = document.getElementById('r-alart-2');
    var alForm3 = document.getElementById('r-alart-3');
    var alForm4 = document.getElementById('r-alart-4');
    var alForm5 = document.getElementById('r-alart-5');
    var alForm6 = document.getElementById('r-alart-6');
    var alForm7 = document.getElementById('r-alart-7');
    var txtacc = document.getElementById('accomM');
    var txtarr = document.getElementById('arriVal');
    if (txtacc.value == "") {
        txtacc.focus();
        alForm1.style.display = "block";
    } else {
        alForm1.style.display = "none";
    }



}

// function funcaccom() {
//     var alForm1 = document.getElementById('r-alart-1');
//     var alForm2 = document.getElementById('r-alart-2');
//     var alForm3 = document.getElementById('r-alart-3');
//     var alForm4 = document.getElementById('r-alart-4');
//     var alForm5 = document.getElementById('r-alart-5');
//     var alForm6 = document.getElementById('r-alart-6');
//     var alForm7 = document.getElementById('r-alart-7');
//     var txtacc = document.getElementById('accomM');
//     var txtarr = document.getElementById('arriVal');

//     if (txtacc.value == "") {
//         txtacc.focus();
//         alForm1.style.display = "block";
//     } else if (txtacc.value != "") {
//         alForm1.style.display = "none";
//     }

//     if (txtarr.value == "") {
//         alForm2.style.display = "block";
//     } else if (txtarr.value != "") {
//         alForm2.style.display = "none";
//     }


// }