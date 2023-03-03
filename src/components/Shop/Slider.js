import { View, Text, StyleSheet } from 'react-native'
import { ImageSlider } from 'react-native-image-slider-banner'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Skeleton from '@thevsstech/react-native-skeleton';
import Skeleton from '@thevsstech/react-native-skeleton';


export default function Slider() {
    const [isLoading, setLoading] = useState(true);
    const [slider, setSlider] = useState([])
    useEffect(() => {
        axios.get('https://parind.online/parind/public/api/sliders')
            .then(async (res) => {
                const SliderData = await res.data.data
                //   console.log(SliderData);
                setSlider(SliderData);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [setSlider])

    const sliderdata = slider.map((item) => {
        return (
            { img: item.image_url }
            // console.log({img:item.image_url})
        )
    })
    
    return (
        <View style={styles.container}>
            {
                isLoading ?
                    // <Text style={styles.loading}>Loading</Text>
                    <Skeleton>
                    <Skeleton.Item  width="100%" height={260} />
                  </Skeleton> 
                    :
                    <ImageSlider
                        caroselImageStyle={styles.previewImageContainer}
                        // caroselImageContainerStyle={styles.ImgContSlider}
                        showIndicator={false}
                        // autoPlay
                        data={sliderdata} />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:"white"
        height: 210,
        width: "95%",
        alignSelf: "center",
        margin: 14
    },
    loading: {
        color: "black"
    },
    previewImageContainer: {
        borderWidth: 1,
        overflow: 'hidden',
        height: 200,
        // margin:20
    },
    ImgContSlider: {
        width: "70%",
    },


})