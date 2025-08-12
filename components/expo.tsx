// import { ImageSourcePropType, StyleSheet } from 'react-native';
// import { Image } from 'expo-image';

// type Props = {
//   imgSource: ImageSourcePropType;
// };

// export default function ImageViewer({ imgSource }: Props) {
//   return <Image source={imgSource} style={styles.image} />;
// }

// const styles = StyleSheet.create({
//   image: {
//     width: 320,
//     height: 440,
//     borderRadius: 18,
//   },
// });


//BOTÃO
//componente para o botão onde a gente depos chama la no index.tsx
// import { StyleSheet, View, Pressable, Text } from 'react-native';

// type Props = {
//   label: string;
// };

// export default function Button({ label }: Props) {
//   return (
//     <View style={styles.buttonContainer}>
//       <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
//         <Text style={styles.buttonLabel}>{label}</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   buttonContainer: {
//     width: 320,
//     height: 68,
//     marginHorizontal: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 3,
//   },
//   button: {
//     borderRadius: 10,
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   buttonLabel: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });


//BOTAO
// import { StyleSheet, View, Pressable, Text } from 'react-native';
// import FontAwesome from '@expo/vector-icons/FontAwesome'; <- ELE EXPORTA DA "FontAwesome" PRA GENTE

// type Props = {
//   label: string;
//   theme?: 'primary'; <- adiciona o tema "prop"
// };

// export default function Button({ label, theme }: Props) {
//   if (theme === 'primary') { <- esse paragrafo inteiro "Conditionally render the primary themed button."
//     return (
//       <View
//         style={[
//           styles.buttonContainer,
//           { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
//         ]}>
//         <Pressable
//           style={[styles.button, { backgroundColor: '#fff' }]}
//           onPress={() => alert('You pressed a button.')}>
//           <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
//           <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
//         </Pressable>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.buttonContainer}>
//       <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
//         <Text style={styles.buttonLabel}>{label}</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   buttonContainer: {
//     width: 320,
//     height: 68,
//     marginHorizontal: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 3,
//   },
//   button: {
//     borderRadius: 10,
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   buttonIcon: {
//     paddingRight: 8,<- Conditionally render the primary themed button.
//   },
//   buttonLabel: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

