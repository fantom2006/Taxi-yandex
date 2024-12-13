function validateInput(input, max) {
    if (parseInt(input.value) > max) {
        input.value = max; // Ограничение значения
    }
}

function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Введите оба числа!";
        return;
    }

    const result = num1 * num2 * 200;
    document.getElementById('result').textContent = `${result} KGS`;
}




function toggleText() {
    const resultElement = document.getElementById('result2');
    // Проверяем, есть ли текст, и если есть, скрываем его
    if (resultElement.textContent) {
        resultElement.textContent = '';
    } else {
        const fullText = "Для регистрации в Яндекс. Такси вы можете оставить заявку на сайте, позвонить по контактным номерам или приехать к нам в офис.";
        const part = fullText.slice(0,999); // Показываем первые 10 символов
        resultElement.textContent = part;
    }
}
function toggleText1() {
    const resultElement = document.getElementById('result3');
    // Проверяем, есть ли текст, и если есть, скрываем его
    if (resultElement.textContent) {
        resultElement.textContent = '';
    } else {
        const fullText = "Да, вы сможете работать. Для этого существует приложение Яндекс. Навигатор, которое поможет найти адрес клиента и проложит маршрут до пункта назначения.";
        const part = fullText.slice(0,999); // Показываем первые 10 символов
        resultElement.textContent = part;
    }
}
function toggleText2() {
    const resultElement = document.getElementById('result4');
    // Проверяем, есть ли текст, и если есть, скрываем его
    if (resultElement.textContent) {
        resultElement.textContent = '';
    } else {
        const fullText = "Да, конечно можете. Свяжитесь с нами и мы вам поможем перейти в наш таксопарк.";
        const part = fullText.slice(0,999); // Показываем первые 10 символов
        resultElement.textContent = part;
    }
}
function toggleText3() {
    const resultElement = document.getElementById('result5');
    // Проверяем, есть ли текст, и если есть, скрываем его
    if (resultElement.textContent) {
        resultElement.textContent = '';
    } else {
        const fullText = "Свяжитесь с нами и наши менеджеры постараются решить проблему. Если в черный список вы попали не по вашей вине, либо вы всему научились, исправились и впредь не будете нарушать правил работы в системе, то мы сделаем все возможное, чтобы помочь вам.";
        const part = fullText.slice(0,999); // Показываем первые 10 символов
        resultElement.textContent = part;
    }
}
function toggleText4() {
    const resultElement = document.getElementById('result6');
    // Проверяем, есть ли текст, и если есть, скрываем его
    if (resultElement.textContent) {
        resultElement.textContent = '';
    } else {
        const fullText = "В данном случае обязательно свяжитесь с нашим менеджером.";
        const part = fullText.slice(0,999); // Показываем первые 10 символов
        resultElement.textContent = part;
    }
}



// var map;

// const map = document.getElementById('map')

// DG.then(function () {
//     map = DG.map('map', {
//         center: [54.98, 82.89],
//         zoom: 13
//     });
// });


var locationInfo = document.getElementById('location');

DG.then(function () {
    var map,
        marker;

    map = DG.map('map', {
        center: [42.850102, 74.62379],
        zoom: 15
    });

    marker = DG.marker([42.850102, 74.62379], {
        draggable: true
    }).addTo(map);

    marker.on('drag', function(e) {
        var lat = e.target._latlng.lat.toFixed(3),
            lng = e.target._latlng.lng.toFixed(3);

        locationInfo.innerHTML = lat + ', ' + lng;
    });
});