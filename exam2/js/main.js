;(function($){
    "use strict";
    $(window).on('load', (function(){
            var map;
            var mapContainer = $('#map')[0];
            var mapCenter = {lat: 49.568583, lng: 34.585416};
        
            map = new google.maps.Map(mapContainer, {
                  center: mapCenter,
                  zoom: 16,
                  disableDefaultUI: true
            });
        
            var marker = new google.maps.Marker({
                  position: mapCenter,
                  map: map,
                  icon: "img/favicon.png"
            });
    }));
})(jQuery);