var i = 0;
var txt = 'PostTime(08:24pm) Hy everybody,Thank for visiting here, first of all, let me introduce myself,My name is KAUSHIK GUPTA,right now ,I am persuing my BCA from GIHSM.MY hobby is playing Cricket & I am Fan of SRK & MS DHONI,due to my craze! PostTime(6:21pm) Let introduce my website.This website make with [HTML,CSS,JAVA] you  can all get some options in my blog on clicking menu through which u can read programming,dowload videoder application this app use for all video download any application,online coverter you can any images,video,file convert & also read news related to computer so, have a look my website & do-not forget to give the feedback! PostTime(09:30pm) I have also made a website on MSDHONI on which when you visit,u will see whole detail about him,his family,his career & much more. I have named this website as [MSD FAN CLUB]! PostTime(10:00pm) I am also going to make a website on comparing pics together.The idea of making this website is coming in my mind from a long time & now I am going to do work on this website very soon. People now a days rather choose a number to represent Handsomeness or Hotness but my new website will give a new direction in this process & give all of u a new & exciting way of fun & entertaiment! PostTime(10:30pm)I will made this website on my local host server & will represent to all of u as soon as possible.';
var speed = 25;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}