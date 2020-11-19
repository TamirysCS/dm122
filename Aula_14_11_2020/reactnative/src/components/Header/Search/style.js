import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../../styles';

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    inputSearch: {
        height: 40,
        padding: 10,
        width: '90%',
        fontSize: fonts.big,
        color: colors.white
    },

    icon: {
        fontSize: fonts.big,
        color: colors.white
    }
})

export default style
