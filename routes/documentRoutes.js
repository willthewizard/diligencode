var router = require('express').Router();
var fs = require('fs');


router.get('/:id', function(req, res) {
	// core functionality
	var documentsIndex = req.params.id-1;	//document array index is the document id -1
	var documentsArray = JSON.parse(fs.readFileSync('./assets/documents/document.json', 'utf8')).documents;
	console.log(documentsArray[documentsIndex]);
	if(documentsArray[documentsIndex]==undefined){
		res.render('error');
	}else{	
				var documentTemplate = fs.readFileSync('./assets/documents/documentTemplate.html','utf8');
					var returnedHTMLDocument = documentTemplate.replace("documentToken",documentsArray[documentsIndex])

			res.send(returnedHTMLDocument);
		}
});

module.exports = router;
