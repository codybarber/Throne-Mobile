angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {


        navigator.geolocation.getCurrentPosition(function (pos) {
          console.log('Got pos', pos);
          $scope.pos = pos;
          // $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          // $scope.loading.hide();
          var mapOptions = {
            center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = new google.maps.Map($element[0], mapOptions);
          var marker = new google.maps.Marker({
            map: map,
            position: { lat: pos.coords.latitude, lng: pos.coords.longitude }
          });
          $scope.onCreate({map: map});
        }, function (error) {
          alert('Unable to get location: ' + error.message);
        });




        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  };
});
