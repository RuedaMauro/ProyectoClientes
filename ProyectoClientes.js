var nombreCliente;
var apellidoCliente;
var edadCliente;
var enviar;
var edad;
nombreCliente = fnombre.value;
apellidoCliente = fapellido.value;
edadCliente = fedad.value;
enviar = enviarCliente;
edad = prompt("Ingrese su edad: ");

if(edad >=18)
{
    alert("Bienvenido" + nombreCliente + " " + apellidoCliente + edadCliente);    
}
else
{
    alert("Ingrese datos validos!");
}

