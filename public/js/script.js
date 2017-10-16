function getDocumentLink(){
	var index = document.getElementById("index").value;
	if ((+index) === parseInt(index, 10)){
		window.location.href="/documents/"+index;
	}else{
		alert("please enter an integer");
	}

}