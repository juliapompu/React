

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
//         <ImageViewer imgSource={PlaceholderImage} />
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
