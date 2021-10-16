function changeColor(id) {
    var selectedColor = document.getElementById(id).className;
    document.getElementById('mylist').style.color = selectedColor;
}

function addCity() {
    var city = document.getElementById('city-name').value;
    if (city) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(city));

        document.getElementById('mylist').append(li);
    }
}

function addPalestine() {
    var palestineCity = document.querySelectorAll('#mylist li');
    for (var i=0; i < palestineCity.length; i++) {
        var cityName = palestineCity[i].innerHTML;
        if(!cityName.includes('Palestine')) {
            cityName = cityName + " - Palestine";
        }
        palestineCity[i].innerHTML = cityName;
    }
}