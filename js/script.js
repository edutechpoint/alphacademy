function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction2() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction3() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction4() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


  $('#owl-staff').owlCarousel({
    loop: true,
    dots: false,
    responsiveClass: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout:1000,
    
    responsive: {
      0: {
        items: 1
      },

      700: {
        items: 2
      },

      1223: {
        items: 4
      }
    }
  });
  $('#owl-message').owlCarousel({
    loop: true,
    dots: false,
    responsiveClass: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout:2000,
    nav:true,
    navText : ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
    
    
    responsive: {
      0: {
        items: 1,
        nav: false
      },

      1223: {
        items: 1
      }
    }
  });

  var ti=document.getElementsByClassName("thumbnailimage")[0];
  var ti1=document.getElementsByClassName("thumbnailimage")[1];
  var ti2=document.getElementsByClassName("thumbnailimage")[2];
  
  var imb=document.getElementsByClassName("imagemodelbox")[0];
  var mi=document.getElementById("modelimage");
  var cbtn=document.getElementById("closeBtn");
  
  
  ti.onclick=function(){
      imb.style.display="block";
      mi.src=this.src;
      
  }
  ti1.onclick=function(){
      imb.style.display="block";
      mi.src=this.src;
  }
  ti2.onclick=function(){
      imb.style.display="block";
      mi.src=this.src;
  }
  cbtn.onclick=function(){
      imb.style.display="none";
  } 





  
