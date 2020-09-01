var button =document.querySelector('.button');
var inputValue =document.querySelector('.inputValue');
var name =document.querySelector('.name');
var desc=document.querySelector('.desc');
var temp =document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+",us&appid=ba222c741ef9c401f0da024828143ee4&units=imperial")
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        document.getElementById('city').innerHTML = nameValue;
        document.getElementById('temp').innerHTML = tempValue;
        document.getElementById('desc').innerHTML = descValue;
    })

.catch(err => alert("Enter a valid city name"))
})

