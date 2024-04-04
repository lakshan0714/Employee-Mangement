import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Home() {
  
  return (
    <GestureHandlerRootView>
         
      <LinearGradient colors={["#4682B4", "white"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between",alignItems:"center" }}
          >
            <AntDesign name="plus" size={24} color="black" />
            <Text style={{fontWeight:"600",fontSize:24}}> Management system </Text>
            <AntDesign name="user" size={24} color="black" />
          </View>

      <View style={{flexDirection:"row",alignItems:"center",marginTop:30,borderRadius:8}}>
         <Pressable
        
         style={styles.press}>
            <View style={{width:50,height:50,borderRadius:6,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
            <Ionicons name="people" size={24} color="black" />
            </View>
            <Text style={{marginTop:4,fontWeight:"500",fontSize:16}}>Employee Management</Text>
         </Pressable>


         
         <Pressable style={styles.press}>
            <View style={{width:50,height:50,borderRadius:6,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
            <FontAwesome5 name="list-alt" size={24} color="black" />
            </View>
            <Text style={{marginTop:4,fontWeight:"500",fontSize:16}}>Attendence&Leave Management</Text>
         </Pressable>

      </View>
      
     

      <View>
      <View style={{flexDirection:"row",alignItems:"center",marginTop:10,borderRadius:8}}>
         <Pressable style={styles.press1}>
            <View style={{width:50,height:50,borderRadius:6,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
            <Ionicons name="people" size={24} color="black" />
            </View>
            <Text style={{marginTop:4,fontWeight:"500",fontSize:16}}>Rating &performance</Text>
         </Pressable>


         
         <Pressable style={styles.press1}>
            <View style={{width:50,height:50,borderRadius:6,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
            <FontAwesome5 name="list-alt" size={24} color="black" />
            </View>
            <Text style={{marginTop:4,fontWeight:"500",fontSize:16}}>PayRoll Management </Text>
         </Pressable>

      </View>

      
      <View style={{flexDirection:"row",alignItems:"center",marginTop:10,borderRadius:8}}>
         <Pressable style={{
    backgroundColor:"#D5E5E1",
    borderRadius:10,
    height:115,
    padding:10,
    margin:5,
    alignItems:"center",
    justifyContent:"center",
    flex:1,
  }}>
            <View style={{width:50,height:50,borderRadius:6,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
            <Ionicons name="people" size={24} color="black" />
            </View>
            <Text style={{marginTop:4,fontWeight:"500",fontSize:16}}>Task Management</Text>
         </Pressable>


         
         <Pressable style={styles.press1}>
            <View style={{width:50,height:50,borderRadius:6,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
            <FontAwesome5 name="list-alt" size={24} color="black" />
            </View>
            <Text style={{marginTop:4,fontWeight:"500",fontSize:16}}>HR Profile</Text>
         </Pressable>

      </View>
      </View>

          
      








        </View>
      </LinearGradient>
    

    </GestureHandlerRootView>
   
  );
}

const styles = StyleSheet.create({
  container: { padding: 12 },
  press:{
    backgroundColor:"#D5E5E1",
    borderRadius:10,
    padding:10,
    margin:10,
    alignItems:"center",
    justifyContent:"center",
    flex:1,
  
  },

  press1:{
    backgroundColor:"#D5E5E1",
    borderRadius:10,
    padding:10,
    margin:5,
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    
  },

  icon:
  {width:40,
    height:40,
    borderRadius:6,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
    

  }
});