import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    text: string,
    color?: string,
    anchor?: boolean,
    action: (textNumber: string) => void
}

export const ButtonCalculator = ({ text, color = '#2D2D2D', anchor = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (anchor) ? 150 : 70
            }}>
                <Text style={{ ...styles.textButton, color: (color === '#9B9B9B') ? 'black' : 'white' }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
