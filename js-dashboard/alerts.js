alert1 = document.getElementById("alert1");
		alert2 = document.getElementById("alert2");
		alert3 = document.getElementById("alert3");

		closeAlert1 = document.getElementById("closeAlert1");
		closeAlert2 = document.getElementById("closeAlert2");
		closeAlert3 = document.getElementById("closeAlert3");

		function alerts(){

			setTimeout(function(){

				alert1.style.display = "flex";	

			},2000);

			setTimeout(function(){

				alert2.style.display = "flex";	

			},3000);

			setTimeout(function(){

				alert3.style.display = "flex";	

			},4000);

			closeAlert1.onclick = (function(){

				alert1.style.display = "none";
			});

			closeAlert2.onclick = (function(){

				alert2.style.display = "none";
			});

			closeAlert3.onclick = (function(){

				alert3.style.display = "none";
			});
		}