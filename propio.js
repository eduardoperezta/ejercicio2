lista = [4,5,6,7,9,3];

function printList(lista)
{
	for (i=0;i<lista.length;i++)
	console.log( i + "   " + lista[i]);
}

function printListOr(lista)
{	lista.unshift(3);
	lista.pop();
	for (i=0;i<lista.length;i++)
	console.log( i + "   " + lista[i]);
}

printList(lista);
console.log("");
printListOr(lista);
