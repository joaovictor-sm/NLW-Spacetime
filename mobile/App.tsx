import { StatusBar } from 'expo-status-bar'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurbg from './src/assets/luz.png'
import NLWlogo from './src/assets/nlw-spacetime-logo.svg'
import Stripes from './src/assets/stripes.svg'
import { styled } from 'nativewind'

const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    BaiJamjuree_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurbg}
      className="flex-1 items-center  bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="left-2 flex-1" />

      <View className="flex-1 items-center justify-center gap-6">
        <NLWlogo />
      </View>

      <View className="space-y-2">
        <Text className="text-center font-title text-2xl leading-tight text-gray-50">
          Sua cápsula do tempo
        </Text>
        <Text className="text-center font-body text-base leading-relaxed text-gray-100">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        className="rounded-full bg-green-500 px-5 py-2"
      >
        <Text className="font-alt text-sm uppercase text-black">
          Cadastrar Lembrança
        </Text>
      </TouchableOpacity>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
