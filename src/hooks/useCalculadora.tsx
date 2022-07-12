import { useEffect, useRef, useState } from "react"

enum Operadores {
    sumar, restar, multiplicar, dividir, potencia, raizCuadrada, factorial, inverso
}

export const useCalculadora = () => {
    const [prevNumber, setPrevNumber] = useState('0')
    const [number, setNumber] = useState('100')

    const ultimaOperacion = useRef<Operadores>()

    const clear = () => {
        setNumber('0')
        setPrevNumber('0')
    }
    const changeNumber = () => {
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        } else {
            setPrevNumber(number)
            setNumber('0')
        }
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

    const btnDividir = () => {
        changeNumber()
        ultimaOperacion.current = Operadores.dividir
    }
    const btnMultiplicar = () => {
        changeNumber()
        ultimaOperacion.current = Operadores.multiplicar
    }
    const btnSumar = () => {
        changeNumber()
        ultimaOperacion.current = Operadores.sumar
    }
    const btnRestar = () => {
        changeNumber()
        ultimaOperacion.current = Operadores.restar
    }

    const btnPotencia = () => {
        changeNumber()
        ultimaOperacion.current = Operadores.potencia
    }

    const btnRaizCuadrada = () => {
        ultimaOperacion.current = Operadores.raizCuadrada
        calcular()
    }

    const btnFactorial = () => {
        ultimaOperacion.current = Operadores.factorial
        calcular()
    }

    const btnInverso = () => {
        ultimaOperacion.current = Operadores.inverso
        calcular()
    }

    const calcularPotencia = (num1: number, num2: number) => {
        setNumber(`${num2 ** num1}`)
        setPrevNumber('0')
    }

    const calcularInverso = (num: number) => {
        setPrevNumber(`1/${num}`)
        setNumber(`${1 / num}`)
    }

    const calcularFactorial = (num: number) => {
        let factorial = 1
        let esNegativo = false
        if (num < 0) {
            esNegativo = true
        }
        for (let i = 1; i <= Math.abs(num); i++) {
            factorial *= i
        }
        setNumber((esNegativo) ? `-${factorial}` : `${factorial}`)
        setPrevNumber(`${num}!`)
    }

    const calcularRaizCuadrada = (num: number) => {
        if (num < 0) {
            setNumber('ERROR')
            setPrevNumber(`0`)
            return
        }
        setNumber(`${num ** (1 / 2)}`)
        setPrevNumber(`√${num}`)
    }


    const calcular = () => {
        const num1 = Number(number)
        const num2 = Number(prevNumber)
        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumber(`${num1 + num2}`)
                setPrevNumber('0')
                break;
            case Operadores.restar:
                setNumber(`${num2 - num1}`)
                setPrevNumber('0')
                break
            case Operadores.multiplicar:
                setNumber(`${num2 * num1}`)
                setPrevNumber('0')
                break
            case Operadores.dividir:
                setNumber(`${num2 / num1}`)
                setPrevNumber('0')
                break

            case Operadores.potencia:
                calcularPotencia(num1, num2)
                break

            case Operadores.raizCuadrada:
                calcularRaizCuadrada(num1)
                break

            case Operadores.factorial:
                calcularFactorial(num1)
                break

            case Operadores.inverso:
                calcularInverso(num1)
                break
        }
    }
    useEffect(() => {
        if (number === '-') {
            setNumber('0')
        }
        if (number === '') {
            setNumber('0')
        }
    }, [number])

    return {
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
    }
}
