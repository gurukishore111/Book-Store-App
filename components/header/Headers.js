import React,{useState} from 'react'
import { Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SIZES } from '../../constants/theme'
import { COLORS } from './../../constants/theme';
import { plus_icon } from './../../constants/icons';

function Headers({ profile }) {
    const myDate = new Date();
    const hrs = myDate.getHours();

    let greet="";

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
    const [greeting, setgreeting] = useState(greet);
    
    return (
        <View style={{
            flex: 1, flexDirection: "row",
            paddingHorizontal:SIZES.padding,alignItems:"center"}}>
            <View style={{flex:1}}>
                <View>
                    <Text style={{fontSize:18,color:COLORS.white,fontWeight:"bold"}}>{greeting}</Text>
                    <Text style={{ fontSize: 19, color: COLORS.white,fontWeight:"bold"}}>{profile.name}</Text>
              </View>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.primary,
                    height: 40,
                    paddingLeft: 3,
                    paddingRight: SIZES.radius,
                    borderRadius:20
            }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 30, height:30,alignItems:"center",justifyContent:"center",borderRadius:25,backgroundColor:"rgba(0,0,0,0.5)"}}>
                        <Image
                            source={plus_icon}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height:20
                            }}/>
                    </View>
                    <Text style={{marginLeft:SIZES.base,color:COLORS.white,fontSize:12}} >{profile.points} points</Text>
               </View>
            </TouchableOpacity>
       </View>
    )
}

export default Headers
