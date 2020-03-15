import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Gestures from 'react-native-easy-gestures';
import { Input, Button } from 'react-native-elements';

export default class Main extends Component {

    stitchImages = {
        "knit": require('./assets/knit.png'), 
        "purl": require('./assets/purl.png')
    }

    state = {
        cellStitchImages: [],
        currentlySelectedMarkingStitch: "knit",
        gridWidth: 3,
        gridHeight: 3
    }

    setInitialCellStitchImages() {
        let initialCellStitchImages = []
        let totalNumberOfCells = this.state.gridHeight * this.state.gridWidth
        let defaultStitchImage = this.stitchImages["knit"]
        for(let i = 0; i < (totalNumberOfCells); i++) {
            initialCellStitchImages.push(defaultStitchImage)
        }
        this.setState({cellStitchImages: initialCellStitchImages})
    }

    markStitchInCell(cellIndex: number) {
        let newCellStitchImages = this.state.cellStitchImages
        let newImageForTappedCell = this.stitchImages[this.state.currentlySelectedMarkingStitch]
        newCellStitchImages[cellIndex] = newImageForTappedCell
        
        this.setState({
            cellStitches: newCellStitchImages
        })
    }

    setCurrentStitch(stitchName: string) {
        this.setState({currentlySelectedMarkingStitch: stitchName})
    }

    getCellsInRow(rowNumber: number) {
        let cellsInRow = []
        for(let i = 0; i < this.state.gridWidth; i++) {
            let cellIndexInTotalGrid = (rowNumber * this.state.gridWidth) + i
            cellsInRow.push(
                <TouchableOpacity 
                    style={styles.cell} 
                    onPress={() => this.markStitchInCell(cellIndexInTotalGrid)}
                    key={cellIndexInTotalGrid}
                >
                    <Image source={this.state.cellStitchImages[cellIndexInTotalGrid]} style={styles.stitchImage}/>
                </TouchableOpacity>
            )
        }
        return(
            <View style={styles.row}>
                {cellsInRow}
            </View>
        )
    }

    getRowsInGrid() {
        let rowsInGrid = []
        for(let i = 0; i < this.state.gridHeight; i++) {
            rowsInGrid.push(this.getCellsInRow(i))
        }
        return(
            <View style={styles.grid}>
                {rowsInGrid}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.gesturesContainer}>
                    <Gestures
                        rotatable={false}
                        draggable={{
                            x: true,
                            y: true,
                        }}
                        scalable={{
                            min: .5,
                            max: 3,
                        }}
                    >
                        {this.getRowsInGrid()}
                    </Gestures>
                </View>
                {/* <Input label="Width:" placeholder="0" onChangeText={(text) => this.setState({gridWidth: text})}></Input>
                <Input label="Height:" placeholder="0" onChangeText={(text) => this.setState({gridHeight: text})}></Input>
                <Button title="Done" onPress={() => this.setInitialCellStitchImages()}></Button> */}
                <View style={styles.stitchSelectionBar}>
                    <Text style={{fontWeight: "bold", textAlignVertical: "top", marginTop: 20}}>Select stitch to add: </Text>
                    <Button 
                        title="Knit" 
                        buttonStyle={{
                            borderWidth: 4,
                            borderColor: this.state.currentlySelectedMarkingStitch == 'knit' ? 'blue' : 'grey',
                            backgroundColor: 'grey',
                            margin: 5
                        }}
                        onPress={() => this.setCurrentStitch("knit")}
                    />
                    <Button 
                        title="Purl" 
                        buttonStyle={{
                            borderWidth: 4,
                            borderColor: this.state.currentlySelectedMarkingStitch == 'purl' ? 'blue' : 'grey',
                            backgroundColor: 'grey',
                            margin: 5
                        }}
                        onPress={() => this.setCurrentStitch("purl")}
                    />
                </View>
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
        borderWidth: 4,
        borderColor: "red"
    },

    gesturesContainer: {
        flex: 3,
        borderWidth: 4,
        borderColor: "green",
        width: "100%",
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden"
    },

    grid: { 
        height: 300, 
        width: 300, 
        flexDirection: 'column'
    },

    row: { 
        flex: 1, 
        flexDirection: 'row'
    },

    cell: { 
        flex: 1, 
        borderColor: 'black', 
        borderStyle: 'solid', 
        borderWidth: 2, 
        backgroundColor: 'white'
    },

    stitchImage: {
        resizeMode: "contain", 
        width: '100%', 
        height: '100%', 
        zIndex: 10
    },

    stitchSelectionBar: {
        flex: 1, 
        flexDirection: 'row',
        margin: 5,
        borderWidth: 4,
        borderColor: "purple",
        width: "100%",
        justifyContent: 'center',
    }
});