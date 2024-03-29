// Utility Functions
function log(text){
	return console.log(text)
}
function $(element_id){
	if (typeof element_id == "string")
	{
		var len = element_id.length
		if (element_id[0] == ".")
		{
			return document.getElementsByClassName(element_id.slice( 1, len))
		}
		else if (element_id[0] == "#")
		{
			return document.getElementById(element_id.slice( 1, len))
		}
		else
		{
			return document.getElementsByTagName(element_id)
		}
	}
	else
	{
		console.log("ERROR: element_id is not a string")
	}
}
// function _(element_id){
// 	var ele_obj = {}
// 	fastdom.measure(function(){
// 			if (typeof element_id == "string")
// 			{
// 				if (element_id[0] == "." || element_id[0] == "#")
// 				{
// 					var style = window.getComputedStyle(document.querySelector(element_id))
// 					ele_obj.width = style.getPropertyValue('width')
// 					ele_obj.height =  style.getPropertyValue('height')
// 					ele_obj.opacity = style.getPropertyValue('opacity')
// 				}
// 			}
// 			else
// 			{
// 				console.log("ERROR: element_id is not a string")
// 			}
// 	})
// 	return ele_obj
// }
function animateElement(element, animation, timing){
			Velocity(element, animation, timing)
}


// Variable Setup


// Listeners

//Init Animations
fastdom.mutate(function(){

animateElement($("body"), {backgroundColor: '#DDDDDD'}, 4400)
animateElement($(".initials"), {color:'#ffffff'}, 4000)
animateElement($("#name"), {color: '#222222', letterSpacing: '9px', opacity: '0.8'}, 4400)
animateElement($("#subhead"), {color: '#444444', opacity: '0.7'}, 5000)
})
setTimeout(function(){
	fastdom.mutate(function(){


				animateElement($("footer"), {backgroundColor: '#222222', opacity: '1.0'}, 140)

				setTimeout(function(){
					animateElement($(".img-gal"), {height: '100%'}, 100)
				}, 400)
				setTimeout(function(){
					animateElement($(".img-gal"), {opacity: '1.0'}, 240)
				}, 100)


	}) }, 4500);

