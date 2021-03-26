function calculateRoute(platform, waypoint0, waypoint1) {
  var router = platform.getRoutingService(),
    parameters = {
      waypoint0: waypoint0,
      waypoint1: waypoint1,
      mode: 'fastest;scooter;traffic:enabled',
      departure: 'now'};


  // Modificacion : 
  
  router.calculateRoute(parameters,
    function (result) {
      datos = JSON.stringify(result)
      console.log(result.response.route[0].summary.distance);
    }, function (error) {
      alert(error);
    });
}