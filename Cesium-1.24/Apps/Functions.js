//Coordinate conversions

//Degrees to UTM Function

//Drawing functions ↓

//Function that creates actual Way Points
    var combinedLatLong = [];
    for (var i=0; i < UserLat.length; i++) {
         combinedLatLong.push(UserLon[i], UserLat[i]);
    }



//function to get an array of points for the polyline that makes up the Lawn Mower
//There can be different shapes of the Lawn Mower, this is a function for one such shape
    var polylineArray = [StartLong, StartLat, EndLong, EndLat];