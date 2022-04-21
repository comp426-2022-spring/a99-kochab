var request = new XMLHttpRequest()
//API request 
request.open('GET', 'https://covidti.com/api/public/us/wiki/NorthCarolina', true)
request.onload = function () {
  //Access data
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) { //Catch any errors 
    data.forEach(state => {
      console.log(state.countyArray)
    })
  } else {
    console.log('error')
  }
}

request.send()