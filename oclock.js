let userName= prompt("Lütfen İsminizi Giriniz..");
let KullanıcıAdı= document.querySelector("#myName");
KullanıcıAdı.innerHTML= userName


function SaatGöster() {
    let date= new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    const gun = new Date();
    const Günler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let gün = Günler[gun.getDay()];
    hours= (hours<10) ? "0" + hours : hours
    minutes= (minutes<10) ? "0" + minutes : minutes
    seconds= (seconds<10) ? "0" + seconds : seconds

    let Zaman = hours + ":" + minutes + ":" + seconds + " " + gun
    document.querySelector('#myClock').innerHTML = Zaman
    }
    setInterval(SaatGöster, 1000)