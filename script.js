function getFormvalue() {
    //Write your code here
	if(window.event){
		window.event.preventDefault();
	};

	const form = document.getElementById('form1')
	const firstName = form.elements["fname"].value.trim();
	const lastName = form.elements["lname"].value.trim();

	const fullName = `${firstName} ${lastName}`.trim();

	alert(fullName);

}
