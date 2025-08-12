

            //CAPITULO 1

// import { Text, View,  StyleSheet } from 'react-native';

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e', <- background ne gata?! css!!
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff',
//   },
// });


            //CAPITULO 2

// import { Text, View, StyleSheet } from 'react-native';

// export default function AboutScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>About screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#fff',
//   },
// });

// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ title: 'Home' }} />
//       <Stack.Screen name="about" options={{ title: 'About' }} />
//     </Stack>
//   );
// }

// import { Text, View, StyleSheet } from 'react-native';
//  import { Link } from 'expo-router'; 

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home screen</Text>
//       <Link href="/about" style={styles.button}>
//         Go to About screen
//       </Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff',
//   },
//   button: {
//     fontSize: 20,
//     textDecorationLine: 'underline',
//     color: '#fff',
//   },
// });

// import { View, StyleSheet } from 'react-native';
// import { Link, Stack } from 'expo-router';

// export default function NotFoundScreen() {
//   return (
//     <>
//       <Stack.Screen options={{ title: 'Oops! Not Found' }} />
//       <View style={styles.container}>
//         <Link href="/" style={styles.button}>
//           Go back to Home screen!
//         </Link>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   button: {
//     fontSize: 20,
//     textDecorationLine: 'underline',
//     color: '#fff',
//   },
// });


// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     </Stack>
//   );
// }
// import { Tabs } from 'expo-router';

// export default function TabLayout() {
//   return (
//     <Tabs>
//       <Tabs.Screen name="index" options={{ title: 'Home' }} />
//       <Tabs.Screen name="about" options={{ title: 'About' }} />
//     </Tabs>
//   );
// }
// import { Tabs } from 'expo-router';

// import Ionicons from '@expo/vector-icons/Ionicons';


// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: '#ffd33d',
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="about"
//         options={{
//           title: 'About',
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
// <Tabs
//   screenOptions={{
//     tabBarActiveTintColor: '#ffd33d',
//     headerStyle: {
//       backgroundColor: '#25292e',
//     },
//     headerShadowVisible: false,
//     headerTintColor: '#fff',
//     tabBarStyle: {
//       backgroundColor: '#25292e',
//     },
//   }}
// >

            //CAPITULO 3

// import { View, StyleSheet } from 'react-native';
//  import { Image } from 'expo-image'; <- isso é daqui "npx expo install expo-image"


// const PlaceholderImage = require('@/assets/images/background-image.png'); <- //importando a imagem do assets


// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={PlaceholderImage} style={styles.image} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//   },
//   image: {
//     width: 320,
//     height: 440,
//     borderRadius: 18,
//   },
// });


// import { StyleSheet, View } from 'react-native';

// import ImageViewer from '@/components/ImageViewer'; <-importando o compo

// const PlaceholderImage = require('@/assets/images/background-image.png');

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer imgSource={PlaceholderImage} /> <- coloca a imagem no lugar
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//   },
// });


// import { View, StyleSheet } from 'react-native';

// import Button from '@/components/Button'; 
// import ImageViewer from '@/components/ImageViewer';

// const PlaceholderImage = require("@/assets/images/background-image.png");

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer imgSource={PlaceholderImage} />
//       </View>
//       <View style={styles.footerContainer}>
//         <Button label="Choose a photo" /> <- aqui é o componente que a gente criou la no outro arquivo, fazendo assim ele criar dois botões com o mesmo componente;
//         <Button label="Use this photo" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//     paddingTop: 28,
//   },
//   footerContainer: {
//     flex: 1 / 3,
//     alignItems: 'center', <-adiciona unm estilo diferente!
//   },
// });


// import { View, StyleSheet } from 'react-native';

// import Button from '@/components/Button';
// import ImageViewer from '@/components/ImageViewer';

// const PlaceholderImage = require('@/assets/images/background-image.png');

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer imgSource={PlaceholderImage} />
//       </View>
//       <View style={styles.footerContainer}>
//         <Button theme="primary" label="Choose a photo" />
//         <Button label="Use this photo" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//   },
//   footerContainer: {
//     flex: 1 / 3,
//     alignItems: 'center',
//   },
// });


//CAPITULO 4

// // ...rest of the import statements remain unchanged
//  import * as ImagePicker from 'expo-image-picker'; <- IMPORTANDO DAQUI: npx expo install expo-image-picker

// export default function Index() { <-passa a imagem para o para o Launch
//   const pickImageAsync = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ['images'],
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {<- se a imagem for escolhida ele printa a mensagem
//       console.log(result);
//     } else {
//       alert('You did not select any image.');
//     }
//   };

//   // ...rest of the code remains same
// }


// import { View, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// import Button from '@/components/Button';
// import ImageViewer from '@/components/ImageViewer';

// const PlaceholderImage = require('@/assets/images/background-image.png');

// export default function Index() {
//   const pickImageAsync = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ['images'],
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       console.log(result);
//     } else {
//       alert('You did not select any image.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer imgSource={PlaceholderImage} />
//       </View>
//       <View style={styles.footerContainer}>
//         <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
//         <Button label="Use this photo" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//   },
//   footerContainer: {
//     flex: 1 / 3,
//     alignItems: 'center',
//   },
// });


// import { View, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// import { useState } from 'react';


// import Button from '@/components/Button';
// import ImageViewer from '@/components/ImageViewer';

// const PlaceholderImage = require('@/assets/images/background-image.png');

// export default function Index() {
//   const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);<- Cria uma variavelç que vai "hold" a imagem 


//   const pickImageAsync = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ['images'],
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {<- 
//       setSelectedImage(result.assets[0].uri);<-Pick the first uri from the assets array. Also, there is only one image selected at a time so you don't have to change this
//     } else {
//       alert('You did not select any image.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} /><-Pass the selected image URI to the ImageViewer component.
//       </View>
//       <View style={styles.footerContainer}>
//         <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
//         <Button label="Use this photo" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//   },
//   footerContainer: {
//     flex: 1 / 3,
//     alignItems: 'center',
//   },
// });
