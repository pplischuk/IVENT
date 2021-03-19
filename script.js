"use strict";

document.addEventListener('keyup', function(e){

	if(e.code === 'KeyA' && e.altKey){
		let a = document.getElementById('waitForKey');
		a.textContent ='';
		let tt = document.getElementById('tt')
		let inp = document.createElement('input');
		inp.setAttribute('placeholder', 'write smth')
		inp.setAttribute('type', 'text')
		inp.className = 'inpClass'
		inp.style.margin = '0, auto'
		tt.appendChild(inp)
	}
})



document.addEventListener('keyup', function (e){
	if(e.shiftKey && e.code === 'KeyS'){
		let inpText = document.querySelector('.inpClass').value
		let inp = document.querySelector('.inpClass')
		let a = document.getElementById('waitForKey');
		a.textContent = inpText
		inp.remove()
}
})

window.addEventListener('resize', function(e){
	let text = document.getElementById('pageResize')
	if(innerWidth < 600){
		text.textContent = 'Mobile'
	}else{
		text.textContent = 'Desktop'
	}
	
})

document.getElementById('input').oninput = function(){
	let t = document.getElementById('writeText');
	t.innerText = input.value
}

document.addEventListener('keyup', function (e){
	if(e.code === 'KeyO' && e.altKey){
		let a = document.getElementById('modalWindow')
		a.style.visibility = 'visible'
	}
})

document.addEventListener('keyup', function (e){
	if(e.code === 'KeyC' && e.altKey){
		let a = document.getElementById('modalWindow')
		a.style.visibility = 'hidden'
	}
})

document.getElementById('showModal').onclick = function(){
	let a = document.getElementById('modalWindow2')
	a.style.visibility = 'visible'
}

document.getElementById('closeModal').onclick = function(){
	let a = document.getElementById('modalWindow2')
	a.style.visibility = 'hidden'
}