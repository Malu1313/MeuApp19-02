import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Login from './screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"

  },
  box1: {
    width:100,
    height:100,
    backgroundColor: '#c23489'
  }, box2:{
    width:100,
    height:100,
    backgroundColor: '#F5CEE3'
  }, box3:{
    width:100,
    height:100,
    backgroundColor: '#F5CEE3'
  },box4:{
    width:100,
    height:100,
    backgroundColor: '#c23489'
  },
  row:{
    flexDirection:'row'
  },
  text:{
    fontSize:"28",
    fontWeight:"bold"
  },
  input:{
    borderWidth:1,
    borderColor:'black',
    width:'80%',
    padding:10,
    marginVertical:10
  },
});
