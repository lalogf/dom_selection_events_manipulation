document.getElementById("NameEntered").addEventListener("keyup" , function(){
	document.getElementById("NameOnButton").innerHTML= NameEntered.value;
});




document.getElementById("about").addEventListener("change", function (){
	if (document.getElementById("about").value.length > 140){
		alert("Please only use 140 characters to tell us about you")
	}
});

document.getElementById("UsId").addEventListener("change" , function (){
	if (document.getElementById("UsId").value.length <= 4){
		alert("The user name should be at least 4 characters long")
	}
})
