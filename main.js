var weight,height,res=0,condition;

function calculate(){

        weight=document.getElementById("weight").value;
    height=document.getElementById("height").value;
    if(weight==""||height==""){
        condition="Plz enter the details"
    }
    else
    {
    height/=100;
    height*=height;
    res=weight/height;
    document.getElementById("result").innerHTML=`Your BMI IS ${res}`;
    if(res<18.5){
        condition="You are underweight";
    }
    else if(18.5<=res<=24.9){
        condition="You are Normal";
        }      
    else if(25<=res<=29.9){
        condition="You are Overweight";
    }
    else if(res>=30){
        condition="You are obese";
    }
    }
    document.getElementById("condition").innerHTML=condition;
}

