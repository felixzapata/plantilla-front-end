var nombreProyectoOSeccionProyecto = function(){

	var priv = {

		obj :  null,        

		metodoPrivado1 : function(obj) {            

		},

		metodoPrivado2 : function(obj) {            

		}

	};

	var pub = {        

		bloquePublico1 : {

			metodo1BloquePublico:function(){

			},

			metodo1BloquePublico:function(){

			}

		},                

		init : function(){

		    	priv.metodoPrivado1(); // ejemplo llamada metodo privado

				pub.bloquePublico1.metodo1BloquePublico(); // ejemplo llamada metodo publico            

		                       

		}

	};

	return { // métodos que queramos devolver como públicos

		init: pub.init

	}

}();

jQuery(document).ready(function() {    

	nombreProyectoOSeccionProyecto.init();
	
})