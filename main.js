let salBruto = document.querySelector('#salBruto')
let calcular = document.querySelector('#calcular')
let print = document.querySelector('#print')
let selectTable = document.querySelector('#selectTable')
let content_main = document.querySelector('#content_main')
let recalcular = document.querySelector('#recalcular')

let faixa01 = 0
let faixa02 = 0
let faixa03 = 0
let faixa04 = 0

let descFaixa01 = 0
let descFaixa02 = 0
let descFaixa03 = 0
let descFaixa04 = 0

let tetoFaixa = 0
let tetoInss = 0


 //====Funções

 function tabelaCalcInss(salBruto){
    descFaixa01 = faixa01 * 0.075
    descFaixa02 = (faixa02 - faixa01) * 0.09
    descFaixa03 = (faixa03 - faixa02) * 0.12
    descFaixa04 = (faixa04 - faixa03) * 0.14     

    tetoFaixa = descFaixa01 + descFaixa02 + descFaixa03 + descFaixa04

    if(salBruto < faixa01){
        tetoInss = salBruto * 0.075                                            
    }else if(salBruto < faixa02){
        tetoInss =   ((salBruto - faixa01) * 0.09) + descFaixa01
    }else if(salBruto < faixa03){
        tetoInss =   ((salBruto - faixa02) * 0.12) + descFaixa02 + descFaixa01
    }else if(salBruto < faixa04){
        tetoInss =   ((salBruto - faixa03) * 0.14) + descFaixa03 + descFaixa02 + descFaixa01
    }else if(salBruto > faixa04){
        tetoInss =   tetoFaixa
    }
 }
const imprimir = n =>  print.innerHTML += `${n}<br>`
const pulaLinha = () => print.innerHTML += `<br>`
const real = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function SBisValid(n){
    if(Number(n) > 0){
        return true
    }else{
        return print.innerHTML = `O campo de Remuneração não pode ser vazio ou negativo` , print.style.color ='red'
    }
}

calcular.addEventListener('click', () => {

    print.innerHTML = '' 

    calcular.style.display ='none'
    recalcular.style.display='block'

    let salarioBruto = Number(salBruto.value)

    let inssBase = Number(salBruto.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    //==========Datas==========
    function tableDate(){
if(selectTable.value == 2024){
            return "2024"
        }
    }

    //==========FAIXAS=========
    //====Faixa01
    function innsFaixa01(){
        imprimir("Periodo Calculado: " + selectTable.value)                       
        imprimir("Valor Bruto Informado: " + inssBase) 
        let inssDesc = real(tetoInss)
        imprimir("Valor do INSS: "+ inssDesc) 

        //Memoria de Calculo
        pulaLinha()
        imprimir("Como foi calculado:") 
        imprimir("Faixa 1: " + inssBase + " x 7.5%  + = " + inssDesc)
        
        pulaLinha()
        imprimir("Total Contribuição INSS: " + inssDesc + " = ( " + inssDesc + " + 0,00 + 0,00 + 0,00)") 
     }
     //====Faixa02
     function innsFaixa02(){
        imprimir("Periodo Calculado: " + selectTable.value)                        
        imprimir("Valor Bruto Informado: " + inssBase) 
        let inssDesc = real(tetoInss)
        imprimir("Valor do INSS: "+ inssDesc) 

        //Memoria de Calculo
        pulaLinha()
        imprimir("Como foi calculado:") 
        imprimir("Faixa 1: " + real(faixa01) + " x 7.5% = "+ real(descFaixa01))
        imprimir("Faixa 2: (" + inssBase + " - " + real(faixa01) + ") x 9% = " + real((salarioBruto - faixa01) * 0.09))

        pulaLinha()
        imprimir("Total Contribuição INSS: " + real(inssDesc) + " = (" + real(descFaixa01) + " + " + real((salarioBruto - faixa01) * 0.09) + " + 0,00 + 0,00)")      
     }
    //====Faixa03
    function innsFaixa03(){
        imprimir("Periodo Calculado: " + selectTable.value)                        
        imprimir("Valor Bruto Informado: " + inssBase) 
        let inssDesc = real(tetoInss)
        imprimir("Valor do INSS: "+ inssDesc) 

        //Memoria de Calculo
        pulaLinha()
        imprimir("Como foi calculado:") 
        imprimir("Faixa 1: " + real(faixa01) + " x 7.5% = "+ real(descFaixa01))
        imprimir("Faixa 2: (" + real(faixa02) + " - " + real(faixa01) + ") x 9% = " + real(descFaixa02))
        imprimir("Faixa 3: ( " + real(inssBase) + " - " + real(faixa02) + ") x 12% = " + real((salarioBruto - faixa02) * 0.12))

        pulaLinha()
        imprimir("Total Contribuição INSS: " + real(inssDesc) + " = (" + real(descFaixa01) + " + " + real(descFaixa02) + " + " + real((salarioBruto - faixa02) * 0.12) + " + 0,00)")           
    } 
    //====Faixa04
    function innsFaixa04(){
        imprimir("Periodo Calculado: " +selectTable.value) 
        imprimir("Valor Bruto Informado: " + inssBase) 
        let inssDesc = real(tetoInss)
        imprimir("Valor do INSS: "+ inssDesc) 

        //Memoria de Calculo
        pulaLinha()
        imprimir("Como foi calculado:") 
        imprimir("Faixa 1: " + real(faixa01) + " x 7.5% = "+ real(descFaixa01))
        imprimir("Faixa 2: (" + real(faixa02) + " - " + real(faixa01) + ") x 9% = " + real(descFaixa02))
        imprimir("Faixa 3: (" + real(faixa03)+ " - " + real(faixa02) + ") x 12% = " + real(descFaixa03))
        imprimir("Faixa 4: ( " + real(inssBase) + " - " + real(faixa03) + ") x 14% = " + real((salarioBruto - faixa03) * 0.14))

        pulaLinha()
        imprimir("Total Contribuição INSS: " + real(inssDesc) + " = (" + real(descFaixa01) + " + " + real(descFaixa02) + " + " + real(descFaixa03) + " + " + real((salarioBruto - faixa03) * 0.14) + ")") 
    }
    function innsFaixaTeto(){
        imprimir("Periodo Calculado: " + selectTable.value) 
        imprimir("Valor Bruto Informado: " + inssBase) 
        print.innerHTML += `Valor do INSS R$ ${tetoFaixa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</br>` 
                
        //Memoria de Calculo
        pulaLinha()
        imprimir("Como foi calculado:") 
        imprimir("Faixa 1: " + real(faixa01) + " x 7.5% = "+ real(descFaixa01))
        imprimir("Faixa 2: (" + real(faixa02) + " - " + real(faixa01) + ") x 9% = " + real(descFaixa02))
        imprimir("Faixa 3: (" +real(faixa03) + " - " + real(faixa02) + ") x 12% = " + real(descFaixa03))
        imprimir("Faixa 4: ( " + real(faixa04) + " - " + real(faixa03) + ") x 14% = " + real(descFaixa04))

        pulaLinha()
        imprimir("Total Contribuição INSS: " + real(tetoInss) + " = (" + real(descFaixa01) + " + " + real(descFaixa02) + " + " + real(descFaixa03) + " + " + real(descFaixa04) + ")") 
    }

     if(SBisValid(salBruto.value)){
    //=============InicioTabelaINSS=============
        
        //INSS 2024    


            faixa01 = 1412
            faixa02 = 2666.68
            faixa03 = 4000.03
            faixa04 = 7786.02

            tabelaCalcInss(salarioBruto)

            //faixa01 ate 1412
            if(salarioBruto > 0 && salarioBruto <= faixa01){
                innsFaixa01()
            }                   
            //faixa02 ate 2266.68
            else if(salarioBruto > faixa01 && salarioBruto <= faixa02){
                innsFaixa02()                   
            }
            //faixa03 ate 4000.03
            else if(salBruto.value > faixa02 && salBruto.value <= faixa03){
                innsFaixa03()
            }
            //faixa04 ate 7786.02
            else if(salBruto.value > faixa03 && salBruto.value <= faixa04){
                innsFaixa04()              
            }
            //faixaTeto depois 7786.02
            else if(salBruto.value > faixa04){
                innsFaixaTeto()
            }                        
        }                      
        //=============FimTabelaINSS=============
    }
)

recalcular.addEventListener('click', () => {

        location.reload();

})
