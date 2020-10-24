
window.addEventListener("keypress", function(event){
	event.preventDefault();
	let colorArray = ['#00A6A6', '#880044', '#293132', '#201E50', '3F292B', '#006D77'];
	let currentValue = '';
		let arrayIndex = Math.floor(Math.random() * colorArray.length);
			color = colorArray[arrayIndex];
			backgroundColor = '';
			if(currentValue != arrayIndex){
				if(backgroundColor != color){
				document.getElementsByTagName('BODY')[0].style.backgroundColor = color;
				backgroundColor = color;
				}
			}else if (currentValue == arrayIndex){
				console.log('newIndex', arrayIndex);
				document.getElementsByTagName('BODY')[0].style.backgroundColor = '#293132';
			}	

				currentValue = arrayIndex;
					
				
})




// document.addEventListener("keypress", function(event) {
//   if (event.keyCode == 13) {
//     alert('hi.');
//   }
// })