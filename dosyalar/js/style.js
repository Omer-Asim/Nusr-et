window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
              var navbar=document.querySelector("#navbar");


               navbar.style.background = "black";
            }
            else{

            }
        });
