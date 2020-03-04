
		var checkMenuSlide = false;
		var smallBox1 = false;
		var smallBox2 = false;

		$(document).ready(function(){
			
			$("#menuIcon").click(function(){

				if (checkMenuSlide == false) {

					$("nav").animate({width: 'toggle'},200);
					$("section").css("width","100%");
					$(".menuVert").animate({opacity: '0'},200);
					$(".logo").animate({height: '0px'},200);
					$("header").css("padding-left","10%");
					checkMenuSlide = true;
				}

				else if(checkMenuSlide == true){

					$("nav").animate({width: 'toggle'},200);
					$("section").css("width","77%");
					$(".menuVert").animate({opacity: '1'},500);
					$(".logo").animate({height: '50px'},500);
					$("header").css("padding-left","23%");
					checkMenuSlide = false;
				}
			});
		
		   $("#iconNav").click(function(){

			   	$("#smallBox").slideToggle();
			   	smallBox1 = true;

			   	if (smallBox1 == true) {

			   		$("#smallBox2").hide();
			   	}


		   });

		   $("#iconNav2").click(function(){

			   	$("#smallBox2").slideToggle();
			   	smallBox2 = true;

			   	if (smallBox2 == true) {

			   		$("#smallBox").hide();
			   	}


		   });

		});