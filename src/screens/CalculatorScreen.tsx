import { useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonCalculator } from '../components/ButtonCalculator'
import { useCalculadora } from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'


export const CalculatorScreen = () => {
    const {
        number,
        prevNumber,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        btnDividir,
        makeNumber,
        calcular,
        positiveNegative,
        deleteDigit,
        btnPotencia,
        btnRaizCuadrada,
        btnFactorial,
        btnInverso,
        clear
    } = useCalculadora()



    return (
        <View style={styles.calculatorContainer}>
            {
                (prevNumber !== '0') && (
                    <Text style={styles.smallResult}>
                        {prevNumber}
                    </Text>
                )
            }
            <Text style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>
            <View style={styles.row}>
                <ButtonCalculator action={btnPotencia} color='#9B9B9B' text='x^y' />
                <ButtonCalculator action={btnInverso} color='#9B9B9B' text='1/x' />
                <ButtonCalculator action={btnFactorial} color='#9B9B9B' text='n!' />
                <ButtonCalculator action={btnRaizCuadrada} color='#FF9427' text='√' />
            </View>
            <View style={styles.row}>
                <ButtonCalculator action={clear} color='#9B9B9B' text='C' />
                <ButtonCalculator action={positiveNegative} color='#9B9B9B' text='+/-' />
                <ButtonCalculator action={deleteDigit} color='#9B9B9B' text='DEL' />
                <ButtonCalculator action={btnDividir} color='#FF9427' text='/' />
            </View>

            <View style={styles.row}>
                <ButtonCalculator action={makeNumber} text='7' />
                <ButtonCalculator action={makeNumber} text='8' />
                <ButtonCalculator action={makeNumber} text='9' />
                <ButtonCalculator action={btnMultiplicar} color='#FF9427' text='X' />
            </View>

            <View style={styles.row}>
                <ButtonCalculator action={makeNumber} text='4' />
                <ButtonCalculator action={makeNumber} text='5' />
                <ButtonCalculator action={makeNumber} text='6' />
                <ButtonCalculator action={btnRestar} color='#FF9427' text='-' />
            </View>

            <View style={styles.row}>
                <ButtonCalculator action={makeNumber} text='1' />
                <ButtonCalculator action={makeNumber} text='2' />
                <ButtonCalculator action={makeNumber} text='3' />
                <ButtonCalculator action={btnSumar} color='#FF9427' text='+' />
            </View>
            <View style={styles.row}>
                <ButtonCalculator action={makeNumber} text='0' anchor />
                <ButtonCalculator action={makeNumber} text='.' />
                <ButtonCalculator action={calcular} color='#FF9427' text='=' />
            </View>
        </View>
    )
}
