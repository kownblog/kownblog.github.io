var i = 0;
var txt = 'PostTime(08:24pm) Hy everybody,Thanks for visiting here, first of all, let me introduce myself,My name is KAUSHIK GUPTA,right now ,I am persuing my BCA from GIHSM.MY hobby is playing Cricket,I am a Fan of SRK & MS DHONI & love to making websites,due to my craze! PostTime(6:21pm) Let me introduce my website.This website is made with [HTML,CSS,JAVA] you all can get a option in my blog on clicking menu through which u can study C and C++ programming.In my wesbites you can read Computer skills and many good contents are also available,have a look at my website & not to forget to give the feedback! ';
var speed = 25;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
