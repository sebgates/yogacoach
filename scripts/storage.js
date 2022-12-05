function writeLocalStorage() {
		//write the Name to Local Storage
		localStorage.setItem("username", document.getElementById("username").value);
		//write the Age to Local Storage
		localStorage.setItem("userid", document.getElementById("userid").value);
		//write the Email to Local Storage
		localStorage.setItem("email", document.getElementById("email").value);
        //write the Password to Local Storage
        localStorage.setItem("passid", document.getElementById("passid").value);
        //write the Address to Local Storage
        localStorage.setItem("address", document.getElementById("address").value);
		//write the Country to Local Storage
		localStorage.setItem("country", document.getElementById("country").value);
		//write the ZIP/POST code to Local Storage
		localStorage.setItem("zip", document.getElementById("zip").value);
		//write the Message to Local Storage
		localStorage.setItem("message", document.getElementById("message").value);

		//allow the browser to go to the next webpage 
		return true;

	
}

function readLocalStorage() {

//Read the Name from local storage and display on the thank you page
document.getElementById("username").innerHTML = localStorage.getItem("username");
//Read the Age from local storage and display on the thank you page
document.getElementById("userid").innerHTML = localStorage.getItem("userid");
//Read the Email from local storage and display on the thank you page
document.getElementById("email").innerHTML = localStorage.getItem("email");
//Read the Password from local storage and display on the thank you page
document.getElementById("passid").innerHTML = localStorage.getItem("passid");
//Read the Address from local storage and display on the thank you page
document.getElementById("address").innerHTML = localStorage.getItem("address");
//Read the Country from local storage and display on the thank you page
document.getElementById("country").innerHTML = localStorage.getItem("country");
//Read the ZIP/POST code from local storage and display on the thank you page
document.getElementById("zip").innerHTML = localStorage.getItem("zip");
//Read the Message from local storage and display on the thank you page
document.getElementById("message").innerHTML = localStorage.getItem("message");

}
