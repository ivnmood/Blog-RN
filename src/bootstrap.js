import * as Font from 'expo-font'

export async function bootstrap() {
    await Font.loadAsync({
        'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf')
    })
}