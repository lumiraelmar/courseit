const tarjeta = document.querySelector(".card-wrapper-js");
const usuario = document.querySelector(".username-js");
const avatar = document.querySelector(".card-img-js");
const nombre = document.querySelector(".real-name-js");
const ciudad = document.querySelector(".location-js");
const publicRepos = document.querySelector(".public-repos-js");
const followers = document.querySelector(".followers-js");
const input = document.querySelector(".input-js");
const button = document.querySelector(".button-js");
const horror = document.querySelector(".error-js");

async function getData() {
	try {
		//chequear si ingresaste algo
		if (input.value.length === 0) {
		return;
		} 
		else {
			let username = input.value;
			//traer la data del username ingresado
			const data = await fetch(`https://api.github.com/users/${username}`);
			const info = await data.json();
			input.value = null;		
			//chequear si el usuario existe 
			if (info.login == undefined) {
				//si el usuario no existe: 
				horror.innerHTML = "El usuario no existe, o tenes altos typos."
				tarjeta.style.display = "none";
			}
			else {
			//si el usuario existe agregar la informacion especifica a la seccion del html correspondiente
				usuario.innerHTML = info.login;
				usuario.href = `https://github.com/${username}`;
				avatar.src = info.avatar_url;
				nombre.innerHTML = info.name;
				ciudad.innerHTML = info.location;
				publicRepos.innerHTML = info.public_repos;
				followers.innerHTML = info.followers;
				tarjeta.style.display = "flex";
			}
		}
	} catch(error) {
    console.log("Ocurrió un error");
    console.log(error);
    
    horror.innerHTML = "Ocurrió un error. Intente más tarde."
  }
}

function enter() {
	if (event.which == 13 || event.keyCode == 13) {
		return getData();
  }
    return;
	}


button.addEventListener("click", getData);
input.addEventListener("keydown", enter);