function juega(){	
	function aleatorio(minimo,maximo){
		var numero = Math.floor( Math.random() * (maximo - minimo +1) + minimo);
		return numero;
	}
	var piedra = 0;
	var papel = 1;
	var tijera = 2;
	var lagarto = 3;
	var spock = 4;

	var opciones = ["Piedra","Papel","Tijera","Lagarto", "Spock"];
	var opcionUsuario;
	var opcionMaquina = aleatorio(0,4);

	opcionUsuario = prompt('¿Que eliges?\nPiedra:0\nPapel:1\nTijera:2\nLagarto:3\nSpock:4', 0);
	if(opcionUsuario > 4){
		alert("Que carajo elegistes?? no sabes leer?? las opciones son de 0 a 4.  Inútil!!!");
	}
	else{

		alert("Elegistes " + opciones[opcionUsuario]+ "\n"+ "La Maquina eligió " + opciones[opcionMaquina])
		if(opcionUsuario == piedra){
			if(opcionMaquina == piedra){
			alert("Empate!!" + "\n" + "Los 2 habéis elegido lo mismo")
			}
			else if(opcionMaquina == papel){
				alert("Perdistes!!" + "\n" + "Papel envuelve Piedra")
			}
			else if(opcionMaquina == tijera){
				alert("Ganastes!!" + "\n" + "Piedra aplasta a tijeras")
			}
			else if(opcionMaquina == lagarto){
				alert("Ganastes!!" + "\n" + "Piedra aplasta Lagarto")
			}
			else if(opcionMaquina == spock){
				alert("Perdistes!!" + "\n" + "Spock Desintegra Piedra")
			}
		}
		else if(opcionUsuario == papel){
			if(opcionMaquina == piedra){
				alert("Ganastes!!" + "\n" + "Papel envuelve Piedra")
			}
			else if(opcionMaquina == papel){
				alert("Empate!!" + "\n" + "Los 2 habéis elegido lo mismo")
			}
			else if(opcionMaquina == tijera){
				alert("Perdistes!!" + "\n" + "Tijeras cortan Papel")
			}
			else if(opcionMaquina == lagarto){
				alert("Perdistes!!" + "\n" + "Lagarto se come el Papel")
			}
			else if(opcionMaquina == spock){
				alert("Ganastes!!" + "\n" + "Papel desaprueba a Spock")
			}
		}
		else if(opcionUsuario == tijera){
			if(opcionMaquina == piedra)
			{
				alert("Perdistes!!" + "\n" + "Piedra aplasta a tijeras")
			}
			else if(opcionMaquina == papel){
				alert("Ganastes!!" + "\n" + "Tijeras cortan Papel")
			}
			else if(opcionMaquina == tijera){
				alert("Empate!!" + "\n" + "Los 2 habéis elegido lo mismo")
			}
			else if(opcionMaquina == lagarto){
				alert("Ganastes!!" + "\n" + "Tijeras decapita al Lagarto")
			}
			else if(opcionMaquina == spock){
				alert("Perdistes!!" + "\n" + "Spock aplasta Tijeras")
			}
		}
		else if(opcionUsuario == lagarto){
			if(opcionMaquina == piedra){
				alert("Perdistes!!" + "\n" + "Piedra aplasta Lagarto")
			}
			else if(opcionMaquina == papel){
				alert("Ganastes!!" + "\n" + "Lagarto se come el Papel")
			}
			else if(opcionMaquina == tijera){
				alert("Perdistes!!" + "\n" + "Tijeras decapita al Lagarto")
			}
			else if(opcionMaquina == lagarto){
				alert("Empate!!" + "\n" + "Los 2 habéis elegido lo mismo")
			}
			else if(opcionMaquina == spock){
				alert("Ganastes!!" + "\n" + "Lagarto envenena a Spock")
			}
		}
		else if(opcionUsuario == spock){
			if(opcionMaquina == piedra){
				alert("Ganastes!!" + "\n" + "Spock Desintegra Piedra")
			}
			else if(opcionMaquina == papel){
				alert("Perdistes!!" + "\n" + "Papel desaprueba a Spock")
			}
			else if(opcionMaquina == tijera){
				alert("Ganastes!!" + "\n" + "Spock aplasta Tijeras")
			}
			else if(opcionMaquina == lagarto){
				alert("Perdistes!!" + "\n" + "Lagarto envenena a Spock")
			}
			else if(opcionMaquina == spock){
				alert("Empate!!" + "\n" + "Los 2 habéis elegido lo mismo")
			}
		}
	}	
}
// funcion floor del objeto math nos redondea hacia abajo
// random nos da un % entre 0 y 1. Pero nunca 0 ni 1
//random * (max(4) - min(0) + 1) + min(0)

// 4 - 0 + 1 = 5	
// 0.1 * 5 = 0.5 + 0 = 0,5 == 0 ( Por Floor)
// 0.2 * 5 = 1 + 0 = 1 == 1
// 0.3 * 5 = 1,5 + 0 = 1,5 == 1
// 0.4 * 5 = 2 + 0 = 2 == 2
// 0.5 * 5 = 2,5 + 0 = 2,5 == 2
// 0.6 * 5 = 3 + 0 = 3 == 3
// 0.7 * 5 = 3,5 + 0 = 3,5 == 3
// 0.8 * 5 = 4 + 0 = 4 == 4
// 0.9 * 5 = 4,5 + 0 = 4,5 == 4
