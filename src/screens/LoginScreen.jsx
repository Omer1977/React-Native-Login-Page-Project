import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Animated, {FadeInUp, FadeInDown} from 'react-native-reanimated';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-full w-full">
      <Image
        className="h-full w-full absolute"
        source={require('../../assets/images/GridArt_b.png')}
      />
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[300] w-[90]"
          source={require('../../assets/images/GridArt_l.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[200] w-[80]"
          source={require('../../assets/images/GridArt_l.png')}
        />
      </View>
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        <View className="flex items-center mt-10">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-red-600 font-bold tracking-wider text-5xl">
            Login
          </Animated.Text>
        </View>
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput placeholder="E-mail" placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(200).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            className="w-full">
            <TouchableOpacity className="w-full bg-red-400 p-3 rounded-2xl">
              <Text className="text-2xl font-bold text-center text-white">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="flex-row justify-center">
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('SignUp')}>
              <Text className="text-red-500">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
