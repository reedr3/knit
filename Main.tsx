import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Gestures from 'react-native-easy-gestures';

export default class Main extends Component {
    state = {
        cellColors: ["white", "white", "white", "white", "white", "white", "white", "white", "white"]
    }

    toggleCellColor(cellIndex: number) {
        let newCellColors = this.state.cellColors
        newCellColors[cellIndex] = this.state.cellColors[cellIndex] == "white" ? "black" : "white"

        this.setState({
            cellColors: newCellColors
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Let's knit some shit</Text>
                <Gestures>
                    <View style={{ height: 600, width: 600, flexDirection: 'column' }}>
                        <View style={{ flex: 1, flexDirection: 'row', width: 800 }}>
                            <TouchableOpacity style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: this.state.cellColors[0] }} onPress={() => this.toggleCellColor(0)} />
                            <TouchableOpacity style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: this.state.cellColors[1] }} onPress={() => this.toggleCellColor(1)} />
                            <TouchableOpacity style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: this.state.cellColors[2] }} onPress={() => this.toggleCellColor(2)} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: this.state.cellColors[3] }} onPress={() => this.toggleCellColor(3)} />
                            <TouchableOpacity style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: this.state.cellColors[4] }} onPress={() => this.toggleCellColor(4)} />
                            <TouchableOpacity style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: this.state.cellColors[5] }} onPress={() => this.toggleCellColor(5)} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: this.state.cellColors[6] }} onPress={() => this.toggleCellColor(6)} />
                            <TouchableOpacity style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: this.state.cellColors[7] }} onPress={() => this.toggleCellColor(7)} />
                            <TouchableOpacity style={{ flex: 1, margin: 2, borderColor: 'black', borderStyle: 'solid', borderWidth: 5, backgroundColor: this.state.cellColors[8] }} onPress={() => this.toggleCellColor(8)} />
                        </View>
                    </View>
                </Gestures>
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