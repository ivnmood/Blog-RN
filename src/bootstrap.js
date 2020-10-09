import * as Font from 'expo-font'
import {DB} from "./db";

export async function bootstrap() {

    try {
        await Font.loadAsync({
            'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
            'montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf')
        })
        await DB.init()
        console.log('Database started...')
    } catch (e) {
        console.log(e)
    }

}
