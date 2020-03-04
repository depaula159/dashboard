		
	var ctx = document.getElementsByClassName("line-chart");

		// tipo data e opções

		var chartGraph = new Chart(ctx, {

			type: 'line',
			data: {

				labels: ["jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
				datasets: [

					{
						label: "Gráfico vendas mensais | 2019",
						data: [0,4,14,10,16,17,11,9,12,14,15,12],
						borderWidth: 6,
						borderColor: 'rgb(400,200,100)',
						backgroundColor: 'transparent'
					},

					{
						label: "Gráfico vendas mensais | 2020",
						data: [5,10,12,8,16,16,11,10,2,15,15,20],
						borderWidth: 6,
						borderColor: 'rgb(100,199,100)',
						backgroundColor: 'transparent'
					},

				],
			},

			options:{

				title:{

					display: true,
					fontSize: 20,
					text: "Relatório de vendas 2019-2020"
				},
			
				labels:{

					fontStyle: "bold"
				},

			},
		});
