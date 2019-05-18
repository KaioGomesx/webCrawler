var Algorithmia = require("algorithmia");
const apiToken = "your api key" //vá ao site do algorithmia pra pegar sua api key

const paramter = process.argv[2]

const help = () => {
	console.log("[*]Para usar esse script execute assim: node webCrawler.ks site <site que quer crawlar>\n\n\tExample: node webCrawler.js -site google.com")
}

const siteMap = () => {
	const input = [paramter,1];

	Algorithmia.client(apiToken)
    	.algo("web/SiteMap/0.1.7?")
    	.pipe(input)
    	.then(response =>  {
        	console.log(response.get());
    });
}

if (paramter === "-h") {help()} else {siteMap()}
