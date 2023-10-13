function convertIt(){
    let inputTemp=document.getElementById("inputTemp").value;
    let inputMode=document.getElementById("tempState").value;
    let outputMode=document.getElementById("outputState").value;
    let output=document.getElementById("showHere");
    if(inputMode===outputMode){
        alert("Select Different Temprature State");
    }
    else if(inputMode=="degC" && outputMode=="degF"){
      output.innerHTML=(convertDegCeltoFer(inputTemp)).toFixed(2) +" °F"; 
    }
    else if(inputMode=="degC" && outputMode=="kelvin"){
        output.innerHTML=(convertDegCeltoKel(inputTemp)) + " K"; 
      }
    else if(inputMode=="degF" && outputMode=="degC"){
        output.innerHTML=(convertDegFertoCel(inputTemp)).toFixed(2) + "°C";
      }
    else if(inputMode=="degF" && outputMode=="kelvin"){
        let defFtodegCel=convertDegFertoCel(inputTemp);
        defFtodegCel+=273.15;
        output.innerHTML=(defFtodegCel).toFixed(2)+ " K";
      }
    else if(inputMode=="kelvin" && outputMode=="degC"){
        output.innerHTML=(convertKeltoCel(inputTemp)).toFixed(2) + " °C";
      }
      else if(inputMode=="kelvin" && outputMode=="degF"){
        output.innerHTML=(convertKeltoFer(inputTemp)).toFixed(2) + " °F";
      }
}

const convertDegCeltoFer= (temp)=>{
    return ((temp*9/5)+32);
    
}
const convertDegCeltoKel= (tempKel)=>{
    const kel=273.15;
    return (kel+Number(tempKel));
    
}
const convertDegFertoCel= (tempCel)=>{
    return ((tempCel-32)*5/9);
    
}
const convertKeltoCel= (tempKelCel)=>{
    return (tempKelCel-273.15);
    
}
const convertKeltoFer= (tempKelFer)=>{
    return (((tempKelFer-273.15)*9/5)+32);
    
}