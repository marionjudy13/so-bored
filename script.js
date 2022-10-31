console.log('I am working!');

fetch('http://www.boredapi.com/api/activity/')
  .then((response) => response.json())
  .then((data) =>  {
      console.log(data.activity);
      document.getElementById('activity').innerHTML = 
            `${data.activity}`
        
});


fetch("https://api.nasa.gov/planetary/apod?api_key=4D3DfuIitOHR4LyC1lsQYo70iFPpJ67oDXG4TJw0")
  .then(res => res.json())
  .then(data => {
    console.log(data.hdurl)
    document.body.style.backgroundImage = `url('${data.hdurl}')`;
  })
  .catch(err => {
    console.log('error ${err}')
  });