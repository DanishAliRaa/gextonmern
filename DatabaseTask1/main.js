
let sal;

let Names=["Danish","faraz","waheed","Manish","Danish","Manish","Banish","Janish","Banish","Janish","aakash","sanjay"];
let Department=["software","software","software","computer","electrical","electronics","mechanical","metalergy","civil","software","software","software"];
let Salary=[30,40,50,20,30,40,50,60,70,80,90,100];

document.getElementById("input1").innerHTML='empDep: <input id="in1" type="input">';
document.getElementById("input2").innerHTML='Input min:  <input id="in2" type="input">';
document.getElementById("input3").innerHTML='Input max:  <input id="in3" type="input">';
document.getElementById("input4").innerHTML='<input id="in4" type="submit" onclick="Search()" >';


function Search(){
    
let inp1=document.getElementById("in1").value;
let inp2=document.getElementById("in2").value;
let inp3=document.getElementById("in3").value;

    for(i in Names)
{
    if(inp1==Names[i] && (Salary[i]>=inp2 && Salary[i]<=inp3)){
        document.getElementById("container").innerHTML+=
        '<li style="list-style:none">' +"Name: "+Names[i]+" Department: "+Department[i]+" Salary: "+Salary[i];
    }
    if(inp1==Department[i]  && (Salary[i]>=inp2 && Salary[i]<=inp3)){
        document.getElementById("container").innerHTML+=
        '<li style="list-style:none">'+"Name: "+Names[i];
    }

}
}

