(function () {

	var app = angular.module('ejemplosApp', []);



	app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {


		$scope.profesores = {};
		$scope.grafica = false;
		$scope.formulario_final = true;
		$scope.Header = 'pages/header.html';
		$scope.formulario = 'pages/form-1.html';
		$scope.pages = {
			Form_1: 'pages/form-1.html',
			Form_2: 'pages/form-2.html',
			Form_3: 'pages/form-3.html',
			Form_4: 'pages/form-4.html',
			Form_5: 'pages/form-5.html',
			Form_6: 'pages/form-6.html',
			Form_7: 'pages/form-7.html',
			Form_8: 'pages/form-8.html',
			Form_9: 'pages/form-9.html',
			Form_10: 'pages/form-10.html',
			Form_11: 'pages/form-11.html',
			Form_12: 'pages/form-12.html',
			Form_13: 'pages/form-13.html',
			Form_14: 'pages/form-14.html',
			Form_15: 'pages/form-15.html'
		};
		$scope.formularios = {
			Form_1: true,
			Form_2: false,
			Form_3: false,
			Form_4: false,
			Form_5: false,
			Form_6: false,
			Form_7: false,
			Form_8: false,
			Form_9: false,
			Form_10: false,
			Form_11: false,
			Form_12: false,
			Form_13: false,
			Form_14: false,
			Form_15: false,


		};

		$scope.personalida = {
			ansiedad: 0.0,
			depresion: 0.0,
			bipolaridad: 0.0
		};

		$scope.formData = {};


		$scope.guardar_datos = function (valido) {
			debugger
			switch (valido) {

				case "1":
					$scope.formulario = $scope.pages.Form_2;
					$scope.personalida.ansiedad = parseFloat($scope.formData.A1);
					$scope.personalida.depresion = parseFloat($scope.formData.D1);
					break;
				case "2":
					$scope.formulario = $scope.pages.Form_3;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A2)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D2)
					break;
				case "3":
					$scope.formulario = $scope.pages.Form_4;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A3)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D3)
					break;
				case "4":
					$scope.formulario = $scope.pages.Form_5;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A4)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D4)
					break;
				case "5":
					$scope.formulario = $scope.pages.Form_6;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A5)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D5)
					break;
				case "6":
					$scope.formulario = $scope.pages.Form_7;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A6)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D6)
					break;
				case "7":
					$scope.formulario = $scope.pages.Form_8;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A7)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D7)
					break;
				case "8":
					$scope.formulario = $scope.pages.Form_9;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A8)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D8)
					break;
				case "9":
					$scope.formulario = $scope.pages.Form_10;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A9)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D9)
					break;
				case "10":
					$scope.formulario = $scope.pages.Form_11;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A10)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D10)
					break;
				case "11":
					$scope.formulario = $scope.pages.Form_12;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A11)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D11)
					break;
				case "12":
					$scope.formulario = $scope.pages.Form_13;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A12)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D12)
					break;
				case "13":
					$scope.formulario = $scope.pages.Form_14;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A13)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D13)
					break;
				case "14":
					$scope.formulario = $scope.pages.Form_15;
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A14)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D14)
					break;
				case "15":
					$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A15)
					$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D15)
					break;

			}

			console.log($scope.formData);
			console.log(valido);
			console.log($scope.personalida);


		}

		$scope.guardar_grafica = function (valida) {

			$scope.grafica = true;
			$scope.formulario_final = false;

			$scope.personalida.ansiedad = parseFloat($scope.personalida.ansiedad) + parseFloat($scope.formData.A15);
			$scope.personalida.depresion = parseFloat($scope.personalida.depresion) + parseFloat($scope.formData.D15);

			console.log($scope.personalida);

			// Obtener una referencia al elemento canvas del DOM
			const $grafica = document.querySelector("#grafica");
			// Las etiquetas son las que van en el eje X. 
			const etiquetas = ["Ansiedad", "Depresion"]
			// Podemos tener varios conjuntos de datos. Comencemos con uno
			const datosVentas2020 = {
				label: "Personalidad",
				data: [$scope.personalida.ansiedad, $scope.personalida.depresion], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
				backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
				borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
				borderWidth: 1,// Ancho del borde
			};
			new Chart($grafica, {
				type: 'bar',// Tipo de gráfica
				data: {
					labels: etiquetas,
					datasets: [
						datosVentas2020,
						// Aquí más datos...
					]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}],
					},
				}
			});

		}


	}]);





})();
