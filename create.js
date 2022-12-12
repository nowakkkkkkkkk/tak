var wyrazy=["sowa","kaczka","wrona","jastrząb","kuropatwa","orzeł"]

function losowanieWyrazu()
{
var dlTablicy = wyrazy.length;	
var los = Math.round((dlTablicy-1)*Math.random());
wylosowanyWyraz=wyrazy[los];
return wylosowanyWyraz.length;
}


function createNew()
{
	const el = document.createElement("div");
	//el.innerText = "Hello";
	//el.innerHTML = "<img src=orzech.jpg>"
	el.className = "d1";
	el.className="literki";
	el.style.height ="100px";
	el.style.width="100px";
	el.style.border="solid 1px";
	el.style.fontSize="50px";
	el.style.left = "3px";
	el.style.float = "left";
	el.style.marginTop = "3px";
	document.querySelector("#pole").appendChild(el);
}

function delElement()
{
	var div = document.querySelector("#pole");
	var usun = div.querySelector("div");
	usun.remove();
}
function generujDiv()
{	iloscliter = losowanieWyrazu();
	console.log(wylosowanyWyraz)
	for(var i=1; i<=iloscliter; i++)
	{
		createNew()
	}
}

function sprwadzLitere()
{
	var litera = "a";
	var dlWyrazu = wylosowanyWyraz.length;
	for (var i=0; i<=(dlWyrazu-1);i++)
	{
		if(litera==wylosowanyWyraz[i]) {
			console.log("występuje");
		}
	}
}