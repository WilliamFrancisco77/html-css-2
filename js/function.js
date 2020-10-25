window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-27.648598,-48.577423),
			scrollWheel:false,
			zoom:12,
			MapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,conten){
		var latLng = {'lat':lat, 'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content: content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		infoWindow.open(map,marker);
	}

	initialize();
	addmarker(-23.607630, -46.505330, '', 'Meu endereço personalizado!');
}