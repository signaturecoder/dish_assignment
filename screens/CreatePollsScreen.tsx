import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { Image, Avatar } from 'react-native-elements';
import { Text, View } from '../components/Themed';
import FormField from '../components/FormField';
import StyledButton from '../components/StyledButton';
import { getDishesData } from '../helpers/dbData';
import { IDish } from '../redux/models/dish';
import { STORAGE_KEY } from '../constants/Constant';

export default function CreatePollsScreen() {
  const [dishValues, setDishValues] = useState<IDish>({
    name: '',
    price: '',
    rating: '',
    description: '',
    photo: '',
    likes: '',
    love: '',
    favourite: ''
  })
  const [image, setImage] = useState('');
  const [cameraIconClicked, setCameraIconClicked] = useState(false);
  const [startCamera, setStartCamera] = useState(false)
  const [dishes, setDishes] = useState<IDish[]>([]);

  useEffect(() => {

    getDishesData().then(dishes => setDishes(dishes));
  }, [])

  const pickImage = () => {
    // let result: any = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    // });


    // if (!result.cancelled) {
    //     setImage(result.uri);
    // }
  };

  const handleStartCamera = () => {

  }
  const onInputChange = (value: string, fieldId: string) => {
    let newDishValues = { ...dishValues, [fieldId]: value }
    setDishValues(newDishValues);

  }

  const handleSubmit = () => {
    console.log('Dish Values', dishValues);
    dishes.push(dishValues);
    // const updateData = async () => {
    //   try {
    //     await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dishes))
    //     // Alert.alert('Data successfully saved')
    //   } catch (e) {
    //     Alert.alert('Failed to save the data to the storage')
    //   }
    // }
    // updateData();
    Alert.alert('Dish is added successfully');

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Poll</Text>
      <View>
        <View style={styles.imagePickerContainer}>
          <Entypo name="upload" size={24} color="black" onPress={pickImage} />
          {/* <Image source={{ uri: image  }} style={{ width: 100, height: 100, borderRadius: 50 }} /> */}
          {image ? <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 50 }} /> : <Avatar
            rounded
            size={100}
            source={require('../assets/images/avatar.png')}
          />
          }
          <Entypo name="camera" size={24} color="black" onPress={handleStartCamera} />
        </View>
        <View>
          <FormField
            placeholder="Dish Name"
            label="Dish Name"
            values={dishValues.name}
            onInputChange={(text: string) => onInputChange(text, "name")}
          />
          <FormField
            placeholder="Dish Price"
            label="Dish Price"
            values={dishValues.price}
            onInputChange={(text: string) => onInputChange(text, "price")}
          />
          <FormField
            placeholder="Dish Description"
            label="Dish Description"
            values={dishValues.description}
            onInputChange={(text: string) => onInputChange(text, "description")}
          />
          <FormField
            placeholder="Dish Rating"
            label="Dish Rating"
            values={dishValues.rating}
            onInputChange={(text: string) => onInputChange(text, "rating")}
          />
        </View>

        <StyledButton title="Add Poll" clicked={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imagePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5
  },
});
