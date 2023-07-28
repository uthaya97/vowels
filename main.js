var a=prompt("Enter Your Name");

document.write("Your Name = "+a+"<br><br>");

b=a.split("");
var c=[];

for (i=0; i<b.length; i++){
    if (b[i]=="a"||b[i]=="e"||b[i]=="i"||b[i]=="o"||b[i]=="u"){
        c.push(b[i]);
    }

}

document.write("vowels in Your Name= "+c+"<br><br>");
document.write("vowels Count in Your Name ="+c.length);






