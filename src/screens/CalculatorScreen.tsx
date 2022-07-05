import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonCalculator } from '../components/ButtonCalculator'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
    const [prevNumber, setPrevNumber] = useState('0')
    const [number, setNumber] = useState('100')

    const clear = () => {
        setNumber('0')
    }

    const makeNumber = (textNumber: string) => {
        if (number.includes('.') && textNumber === '.') return
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (number === '.') {
                setNumber(number + textNumber)
            }
            else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber)
            }

            else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber)
            }
            else {
                setNumber(number + textNumber)
            }
        } else {
            setNumber(number + textNumber)
        }
    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

    const deleteDigit = () => {
        setNumber(number.slice(0, -1))

    }
    useEffect(() => {
        if (number === '-') {
            setNumber('0')
        }
        if (number === '') {
            setNumber('0')
        }
    }, [number])

    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.smallResult}>
                {prevNumber}
            </Text>
            <Text style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            <View style={styles.row}>
                <ButtonCalculator action={clear} color='#9B9B9B' text='C' />
                <ButtonCalculator action={positiveNegative} color='#9B9B9B' text='+/-' />
                <ButtonCalculator action={deleteDigit} color='#9B9B9B' text='DEL' />
                <ButtonCalculator action={makeNumber} color='#FF9427' text='/' />
            </View>

            <View style={styles.row}>
                <ButtonCalculator action={makeNumber} text='7' />
                <ButtonCalculator action={makeNumber} text='8' />
                <ButtonCalculator action={makeNumber} text='9' />
                <ButtonCalculator action={makeNumber} color='#FF9427' text='X' />
            </View>

            <View style={styles.row}>
                <ButtonCalculator action={makeNumber} text='4' />
                <ButtonCalculator action={makeNumber} text='5' />
                <ButtonCalculator action={makeNumber} text='6' />
                <ButtonCalculator action={makeNumber} color='#FF9427' text='-' />
            </View>

            <View style={styles.row}>
                <ButtonCalculator action={makeNumber} text='1' />
                <ButtonCalculator action={makeNumber} text='2' />
                <ButtonCalculator action={makeNumber} text='3' />
                <ButtonCalculator action={clear} color='#FF9427' text='+' />
            </View>
            <View style={styles.row}>
                <ButtonCalculator action={makeNumber} text='0' anchor />
                <ButtonCalculator action={makeNumber} text='.' />
                <ButtonCalculator action={clear} color='#FF9427' text='=' />
            </View>
        </View>
    )
}
