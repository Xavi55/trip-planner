function initMap() 
{
    let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat:40.7128,lng:-74.0060}
  });

  let geocoder = new google.maps.Geocoder();
  
  //marker.addListener('click', toggleBounce);
  function addMarker(loc)
  {
    let marker = new google.maps.Marker(
    {
      position:loc,
      map:map,
      animation: google.maps.Animation.DROP,
    })
  }

  function getCoords(addr)
  {
    let x = addr.replace('\n','').split(',');
    //console.log(x);
    let list=[];
    for(let i in x)
    {
      geocoder.geocode({'address':x[i]}, function(res,stat)
      {
        if(stat==='OK')
        {
          //map.setCenter(res[0].geometry.location);
          //addMarker(res[0].geometry.location);
          //console.log(JSON.stringify(res[0].geometry.location));
          list.push(JSON.stringify(res[0].geometry.location));
        }
      })
    }
    console.log(list);
    //HERE
    //send this to python for processing
  }

  document.getElementById('go').addEventListener('click',function(e)
  {
    let inputs = document.getElementById('inputs');
    if(!inputs.value.length)
    {
      alert('Need Locations!');
    }
    else
    {
      let x = inputs.value;
      getCoords(x);
    }
  });

    //e.preventDefault(); stops normal textArea inputs
  }
  //addMarker(40.7128,-74.0060);


//var counter = 0;
//let val=false;
/* let timer = setInterval(function () {

    console.log("turn no. " + counter);
    marker.setAnimation(google.maps.Animation.BOUNCE);
    counter++;

}, 500); */
//marker animation code


/* function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
} */