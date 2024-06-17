let venta1, venta2, venta3, totalpagar=0, totalventas=0,salariobase=0,comision=0;

salariobase= Number (prompt("ingresa el salario base"));
venta1= Number (prompt("ingrese venta1"));
venta2= Number (prompt("ingrese venta2"));
venta3= Number (prompt("ingrese venta3"));
totalventas= venta1 + venta2 + venta3;

comision = totalventas * 0.1;

totalpagar= salariobase + comision;

alert("el total a pagar para el vendedor es: $" + totalpagar);