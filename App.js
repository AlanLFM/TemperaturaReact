
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
const App=()=>{
 
  const [count,setCount]=useState("0");
  const [count2,setCount2]=useState("0");
  const [count3,setCount3]=useState("0");
  const [temp,setTemp]=useState(" ");
  const [temp2,setTemp2]=useState(" ");
  const [temp3,setTemp3]=useState(" ");

  //Aqui pongo toda la tabla de botones de numeros
  const onPressAC=()=> setCount(prevCount=>prevCount=" 0")
  const onPress0=()=> setCount(prevCount=>prevCount+0)
  const onPress=()=> setCount(prevCount=>prevCount+1)
  const onPress2=()=> setCount(prevCount=>prevCount+2)
  const onPress3=()=> setCount(prevCount=>prevCount+3)
  const onPress4=()=> setCount(prevCount=>prevCount+4)
  const onPress5=()=> setCount(prevCount=>prevCount+5)
  const onPress6=()=> setCount(prevCount=>prevCount+6)
  const onPress7=()=> setCount(prevCount=>prevCount+7)
  const onPress8=()=> setCount(prevCount=>prevCount+8)
  const onPress9=()=> setCount(prevCount=>prevCount+9)
  const onPressmm=()=> setCount(prevCount=>prevCount*-1)
  const onPressp=()=> setCount(prevCount=>prevCount+".")
  //Aqui van los conversores
  const onPressF=()=> setCount(prevCount=>(prevCount*9/5)+32)
  const onPressFK=()=> setCount3(prevCount3=>(prevCount-32)*(5/9)+273.15)
  
  const onPressC=()=> setCount(prevCount=>(prevCount-32)*(5/9))
  

  var Fa="°Fahrenheit";
  var Cel="°Celsius";
  var K="°Kelvin";

  function F(){
    // Cambio a Fah
    setTemp(prevTemp=>prevTemp=Fa)
    setTemp3(prevTemp3=>prevTemp3=K)
    setTemp2(prevTemp2=>prevTemp2=Cel)
    //Numero
    setCount3(prevCount3=>(count-32)*(5/9)+273.15)
    setCount2(prevCount2=>(count-32)*5/9)
  }
  function Kf(){
    // calmbio a Kalvos
  setTemp(prevTemp=>prevTemp=K)
  setTemp2(prevTemp2=>prevTemp2=Fa)
  setTemp3(prevTemp3=>prevTemp3=Cel)
  //Numero
  setCount3(prevCount3=>count-273.15)
  setCount2(prevCount2=>(count-273.15)*(9/5)+32)
  }function C(){
    // Cambia a celsius
  setTemp(prevTemp=>prevTemp=Cel)
  setTemp2(prevTemp2=>prevTemp2=Fa)
  setTemp3(prevTemp3=>prevTemp3=K)
  //Numero
  
  var c=parseFloat(count)
  
  setCount3(prevCount3=>(c)+273.15)
  setCount2(prevCount2=>(count*9/5)+32)
  }
  function AC(){
    setCount(prevCount=>prevCount=" ")
    setCount2(prevCount2=>prevCount2=" ")
    setCount3(prevCount3=>prevCount3=" ")
  }
  

  return (
        <View style={styles.container}>
          <Text style={styles.h2}>Temperatura en {temp}</Text>
          <Text style={styles.h1}>{count}</Text>
      
          <View style={styles.subcontainer}>
              

              <TouchableOpacity style={styles.btn}
                onPress={onPress}>
                <Text style={styles.h1}>1</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.btn}
                onPress={onPress2}>
                <Text style={styles.h1}>2</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.btn}
                onPress={onPress3}>
                <Text style={styles.h1}>3</Text>
              </TouchableOpacity>
   
              <TouchableOpacity style={styles.btn}
              onPress={()=>{AC()}}>
              <Text style={styles.text}>AC</Text>
              </TouchableOpacity>
        </View>
   
              <View style={styles.subcontainer}>
              <TouchableOpacity style={styles.btn}
                onPress={onPress4}>
                <Text style={styles.h1}>4</Text>
              </TouchableOpacity>
          
              <TouchableOpacity style={styles.btn}
                onPress={onPress5}>
                <Text style={styles.h1}>5</Text>
              </TouchableOpacity>
          
              <TouchableOpacity style={styles.btn}
                onPress={onPress6}>
                <Text style={styles.h1}>6</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}
                onPress={onPressmm}>
                <Text style={styles.text}>+/-</Text>
              </TouchableOpacity>
            </View>              
        
        
          <View style={styles.subcontainer}>     
              <TouchableOpacity style={styles.btn}
                onPress={onPress7}>
                <Text style={styles.h1}>7</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}
                onPress={onPress8}>
                <Text style={styles.h1}>8</Text>
              </TouchableOpacity>
          
              <TouchableOpacity style={styles.btn}
                onPress={onPress9}>
                <Text style={styles.h1}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}
                onPress={()=>{F()}}>
                <Text style={styles.text}>°F</Text>
              </TouchableOpacity>
            </View>
          
            <View style={styles.subcontainer}>
            <TouchableOpacity style={styles.btn}
                onPress={onPressp}>
                <Text style={styles.text}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}
                onPress={onPress0}>
                <Text style={styles.h1}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}
                onPress={()=>{C()}}> 
                <Text style={styles.text}>°C</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}
                onPress={()=>{Kf()}}>
                <Text style={styles.text}>°K</Text>
              </TouchableOpacity>
          </View>
          <Text style={styles.text}>Temperatura en {temp2}</Text>
          <Text style={styles.text}>{count2}</Text>
          <Text style={styles.text}>Temperatura en {temp3}</Text>
          <Text style={styles.text}>{count3}</Text>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74b9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer:{
    height: 100,
    width:'100%',
    paddingHorizontal: 0,
    flexDirection:'row',
    backgroundColor: '#2e86de',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btn:{
    width: 75,
    height:75,
    justifyContent: 'center',//Texto dentro del elemento 
    alignItems: 'center',
    backgroundColor: '#a29bfe',
    borderBottomColor: '#fffff',
  },
  count:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center', 
    fontWeight: 'bold',
  },
  h1:{
    fontSize: 60,
    color: '#2C3A47',
  },
  h2:{
    fontSize: 45,
    color: '#2C3A47',
  },
  text:{
    fontSize: 20,
    color: '#dfe6e9',
  },
  span:{
    display: 'block',
 },

});

export default App;