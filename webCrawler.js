var Algorithmia = require("algorithmia");
const apiToken = "simtfw6iJqtKENkzXPFXB89YN3d1"

main()

function main(){

	if (process.argv.length > 4) {

		console.log("[*]opção inválida, por favor execute o script com o parametro help: node webCrawler.js -h")
	
	} else if (process.argv[2] == '-h') {
		if (process.argv.length > 3){
			console.log("[*]opção inválida, por favor execute o script com o parametro help: node webCrawler.js -h")
			return;
		}
		
		help()

	} else if(process.argv[2] == '-site') {

		crawler()

	} else {
		console.log("[*]opção inválida, por favor execute o script com o parametro help: node webCrawler.js -h")
	}
}

function crawler(){
var input = [process.argv[3],1];

Algorithmia.client(apiToken)
    .algo("web/SiteMap/0.1.7?")
    .pipe(input)
    .then(function(response) {
        console.log(response.get());
    });
}

function help(){
	console.log("[*]Para usar esse script execute assim: node webCrawler.ks site <site que quer crawlar>\n\n\tExample: node webCrawler.js -site google.com")

}