lista = [3,4,5,6,7,1];
pos = lista.length-1;
temp = lista[pos];
i = pos-1;

for(t=0;t<lista.length;t++)
console.log(lista[t]);
console.log();

while(i>=0 && temp<lista[i])
{	lista[i+1]=lista[i];
	i--;		
	}
lista[i+1] = temp;
// o "lista[0]= temp;" es otra opción

for(i=0;i<lista.length;i++)
console.log(lista[i]);
