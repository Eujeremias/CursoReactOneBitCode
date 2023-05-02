import React, {useState} from "react"
import {View, Text, TextInput, Button} from "react-native"
import ResultImc from "./ResultImc"


export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator(){
        return setImc((weight / (height * height)).toFixed(2))
    }
    function validationImc(){ //função que irá verificar se os campos estão preenchidos
        if(weight != null && height != null){ 
            imcCalculator(); //será "invocada" quando os valores de peso e altura tiverem algum valor, que é diferente de nulo
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual");
            setTextButton("Calcular novamente");
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
    }
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 79.65"
                keyboardType="numeric"
                />
                <Button 
                onPress={()     => validationImc()}
                title={textButton}
                />
                <View>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} //Aqui estão os valores que iremos manusear no useState
                    /> 
                </View>
            </View>
        </View>
    )
}