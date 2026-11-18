function getFormvalue() {
    //Write your code here
	if(event){
		event.preventDefault();
	};

	const firstName = document.quesrySelector('input[name="fname"]').value.trim();
	const lastName = document.quesrySelector('input[name="lname"]').value.trim();
	if(!fname || !lname){
		alert("please enter your first and last name.");
		return;
	};

	const fullName = `${firstName} ${lastName}`.trim();

	alert(fullName);

}
