var isim = prompt("Lütfen isminizi giriniz:")
let myName = document.getElementById("myName");
myName.textContent = isim;


function saatler(){
    var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let saat = document.getElementById("myClock")
    let d = new Date();
    var gun = gunler[d.getDay()]
    myClock.textContent = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "  " + gun
    

}
setInterval(saatler,1000);