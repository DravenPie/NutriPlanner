import { StyleSheet, Pressable, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const LoginScreenButton = ({ title, navigateTo }) => {
    return (
        <Pressable style={styles.button} onPress={navigateTo}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        height: '16%',
        backgroundColor: '#386641',
        marginTop: '14%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: RFPercentage(2.5),
        color: 'white',
    },
    debug: {
        borderWidth: 1,
        borderColor: 'red',
    },
});

export default LoginScreenButton;
