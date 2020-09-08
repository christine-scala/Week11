var button =document.querySelector('.button');
var inputValue =document.querySelector('.inputValue');
var name =document.querySelector('.name');
var desc=document.querySelector('.desc');
var temp =document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+",us&appid=(YOUR API KEY HERE)&units=imperial")
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var iconValue = data['weather'][0]['icon'];

        document.getElementById('city').innerHTML = nameValue;
        document.getElementById('temp').innerHTML = tempValue;
        document.getElementById('desc').innerHTML = descValue;
        document.getElementById('icon').src = `http://openweathermap.org/img/w/${iconValue}.png`
    })

.catch(err => alert("Enter a valid city name"))
})

