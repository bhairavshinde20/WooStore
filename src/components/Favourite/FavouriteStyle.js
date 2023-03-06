import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
export default StyleSheet.create({
    container:{
        // flex:1,
    },
    ImageBox: {
        width: 230,
        height: 290,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        borderRadius: 20,
        marginTop: 10,
        padding: 10,
        // elevation: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        marginLeft: 8,
        marginBottom: 8
      },
      shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      MainImgBox: {
        height: 160,
        width: 145,
        // borderWidth:1,
        // borderColor:"red",
        backgroundColor: "white",
        alignSelf: "center",
        marginTop: 15,
        resizeMode: "content",
        justifyContent: "center",
        alignItems: "center"
      },
      img: {
        height: 150,
        width: 140,
      },
      name: {
        fontSize: 20,
        color: "black",
        fontFamily: "Labrada-Bold",
        marginLeft: 15
      },
      iconBox: {
        height: 40,
        width: 42,
        // borderColor: "black",
        borderRadius: 50,
        // borderWidth: 1,
        backgroundColor: "#52b372",
        marginTop: 20,
        marginLeft: 55,
        alignItems: "center",
        justifyContent: "center",
      },

})