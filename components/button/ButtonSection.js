import React from 'react'
import { Image, View,Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SIZES } from '../../constants/theme'
import { COLORS } from './../../constants/theme';
import { claim_icon,card_icon,point_icon } from './../../constants/icons';

function ButtonSection() {

    const LineDivider = () => {
        return (
            <View style={{ width: 1, paddingVertical: 18 }}>
                <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
            </View>
        )
    }
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding }}>
            <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius }}>
                {/* Claim */}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Claim")}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={claim_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, fontSize:14, color: COLORS.white }}>Claim</Text>
                    </View>
                </TouchableOpacity>

                {/* Divider */}
                <LineDivider />

                {/* Get Point */}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Get Point")}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={point_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, fontSize:14, color: COLORS.white }}>Get Point</Text>
                    </View>
                </TouchableOpacity>

                {/* Divider */}
                <LineDivider />

                {/* My Card */}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("My Card")}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={card_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, fontSize:14, color: COLORS.white }}>My Card</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ButtonSection
