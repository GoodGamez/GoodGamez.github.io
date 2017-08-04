


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDmLYTlGC2htV-LdBWng7Oi7XX-532tx0I",
    authDomain: "kommentarer-d3016.firebaseapp.com",
    databaseURL: "https://kommentarer-d3016.firebaseio.com",
    projectId: "kommentarer-d3016",
    storageBucket: "kommentarer-d3016.appspot.com",
    messagingSenderId: "575210065496"
  };
firebase.initializeApp(config);

var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  }
);

app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    $scope.kommentar = {
    text: "",
    skribent: ""
    };
    
    $scope.addComment = function() {
        // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
        // Det sparas automatiskt i Firebase-databasen.
        $scope.kommentarer.$add($scope.kommentar);

        // Tömmer texten i kommentarfältet
        $scope.kommentar = {
            text: "",
            skribent: ""
        };
    };
  }
);
