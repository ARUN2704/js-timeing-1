let cli=new Date();
let sesion=cli.getMonth();


if(sesion<4){
	c="Summer";
}

else if(sesion<8){
	
	c="Fall";
	
}

else{
	c="Winter";
}

document.write("<h1>"+c);