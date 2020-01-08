// function (initMap) {
//     var element = document.getElementById('map');
//     var options = {
//         zoom: 5, 
//         center: {lat: 49.589542, lng: 34.551273}
//     };

//     var myMap = new google.maps.Map(element, options);

// }

var map;
function initMap() {

    let kharkivOffice = { lat: 50.0066425, lng: 36.2380648 };
    let ofices = [
        { lat: 57.0066425, lng: 35.2380648 },
        { lat: 51.0066425, lng: 37.2380648 },
        { lat: 50.0066425, lng: 34.2380648 },
        { lat: 52.0066425, lng: 36.2380648 },
    ];

    let baOffices = [
        {
            city: 'Kharkiv',
            position: { lat: 50.006693, lng: 36.237199 },
            img: 'images/cupcake.png'
        },

        {
            city: 'Poltava',
            position: { lat: 49.588983, lng: 34.5554741 },
            img: 'images/cupcake.png'
        },
        {
            city: 'Kramatorsk',
            position: { lat: 48.9009301, lng: 36.5196854 },
            img: 'images/cupcake.png'
        },
        {
            city: 'Kyiv',
            position: { lat: 50.4637267, lng: 30.4977141 },
            img: 'images/cupcake.png'
        },
        {
            city: 'Ivano-frankovsk',
            position: { lat: 48.917688, lng: 24.702575 },
            img: 'images/cupcake.png'
        },

    ];





    // add cities to select element 

    function addCities() {
        for (let i = 0; i < baOffices.length; i++) {
            let option = $('<option/>', {
                text: baOffices[i].city,
                value: baOffices[i].position.lat + ',' + baOffices[i].position.lng,
            });
            console.log(option);
            $('#city').append(option);
        }
    }

    addCities()







    map = new google.maps.Map(document.getElementById('map'),
        {
            center: kharkivOffice,
            zoom: 15
        }


    );

    let btn = document.getElementById('changeCenter');
    btn.addEventListener('click', function () {
        let coordinate = '41.588983, 34.5554741',
            center = new google.maps.LatLng(49.588983, 34.5554741);

        map.panTo(center);
    });


    let option = $('#city').val();
    let select = getElementById('city');
    console.log(select);
    select.addEventListener('click' , function () {
        
        center = new google.maps.LatLng(select);
    });
    



    for (let i = 0; i < ofices.length; i++) {
        let marker = new google.maps.Marker({
            position: ofices[i],
            map: map,
            icon: {
                url: 'images/cupcake.png',
                origin: new google.maps.Point(0, 0),
                size: new google.maps.Size(32, 32),

            },

        });
    }


    for (let j = 0; j < baOffices.length; j++) {
        let marker = new google.maps.Marker({
            position: baOffices[j].position,
            title: baOffices[j].city,
            map: map,
            icon: {
                url: baOffices[j].img,
                origin: new google.maps.Point(0, 0),
                size: new google.maps.Size(32, 32),

            },

        });
    }



}

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}



$(document).ready(function(){
    $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: 'true',
    arrows: false,
    autoplaySpeed: '2000'
    });
  });