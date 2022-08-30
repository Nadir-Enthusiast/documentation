function watch() {
    var date= new Date();
    document.getElementById("clock").innerHTML = " "  + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    setTimeout(watch, 1000)
} 

watch()
