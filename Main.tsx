import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import Gestures from 'react-native-easy-gestures';

export default class Main extends Component {

    purlImg = require('./assets/purl.png')
    knitImg = require('./assets/knit.png')

    state = {
        cellStitchImages: [this.knitImg, this.knitImg, this.knitImg, this.knitImg, this.knitImg, this.knitImg, this.knitImg, this.knitImg, this.knitImg],
        currentStitch: "knit"
    }

    placeStitchInCell(cellIndex: number) {
        let newCellStitchImages = this.state.cellStitchImages
        newCellStitchImages[cellIndex] = (this.state.currentStitch == 'knit' ? this.knitImg : this.purlImg)
        
        this.setState({
            cellStitches: newCellStitchImages
        })
    }

    setCurrentStitch(stitchName: string) {
        this.setState({currentStitch: stitchName})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Let's knit some shit</Text>
                <Gestures rotatable={false}>
                    <View style={{ height: 600, width: 600, flexDirection: 'column' }}>
                        <View style={{ flex: 1, flexDirection: 'row'}}>
                            <TouchableOpacity 
                            style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: 'white'}} 
                            onPress={() => this.placeStitchInCell(0)}>
                                <Image source={this.state.cellStitchImages[0]} style={{resizeMode: "contain", width: '100%', height: '100%', zIndex: 10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: 'white' }} 
                            onPress={() => this.placeStitchInCell(1)}>
                                <Image source={this.state.cellStitchImages[1]} style={{resizeMode: "contain", width: '100%', height: '100%', zIndex: 10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: 'white' }} 
                            onPress={() => this.placeStitchInCell(2)}>
                                <Image source={this.state.cellStitchImages[2]} style={{resizeMode: "contain", width: '100%', height: '100%', zIndex: 10}}/>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity 
                            style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: 'white' }} 
                            onPress={() => this.placeStitchInCell(3)}>
                                <Image source={this.state.cellStitchImages[3]} style={{resizeMode: "contain", width: '100%', height: '100%', zIndex: 10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: 'white' }} 
                            onPress={() => this.placeStitchInCell(4)}>
                                <Image source={this.state.cellStitchImages[4]} style={{resizeMode: "contain", width: '100%', height: '100%', zIndex: 10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: 'white' }} 
                            onPress={() => this.placeStitchInCell(5)}>
                                <Image source={this.state.cellStitchImages[5]} style={{resizeMode: "contain", width: '100%', height: '100%', zIndex: 10}}/>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity 
                            style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: 'white' }} 
                            onPress={() => this.placeStitchInCell(6)}>
                                <Image source={this.state.cellStitchImages[6]} style={{resizeMode: "contain", width: '100%', height: '100%', zIndex: 10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: 'white' }} 
                            onPress={() => this.placeStitchInCell(7)}>
                                <Image source={this.state.cellStitchImages[7]} style={{resizeMode: "contain", width: '100%', height: '100%', zIndex: 10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: 'white' }} 
                            onPress={() => this.placeStitchInCell(8)}>
                                <Image source={this.state.cellStitchImages[8]} style={{resizeMode: "contain", width: '100%', height: '100%', zIndex: 10}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Gestures>
                <Button title="Knit stitch" color={this.state.currentStitch == 'knit' ? 'blue' : 'grey'} onPress={() => this.setCurrentStitch("knit")}/>
                <Button title="Purl stitch" color={this.state.currentStitch == 'purl' ? 'blue' : 'grey'} onPress={() => this.setCurrentStitch("purl")}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});