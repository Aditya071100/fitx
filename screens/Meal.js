import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import UserGoalBox from '../component/usermealpage';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getDatabase, ref, child, get} from 'firebase/database';

const Meal = ({gender}) => {
  const data1 = useSelector(state => state.data);
  const [usergender, setsuergender] = useState();



  useEffect(() => {
   
    const fetchmeal = async () => {
      try {
        const dbRef = ref(getDatabase());
        await get(child(dbRef, `diet`))
          .then((snapshot) => {console.log(snapshot),setMeal(snapshot.val())})
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    };
    fetchmeal();
  }, []);

  useEffect(() => {
    setsuergender('female');
  });
  console.log(gender);
  const [ meal,setMeal]=useState([
    {
      gender: 'female',
      age: 25,
      goal: 'weightloss',
      meals: [
        {
          name: 'Breakfast',
          content: ['Vegetable Upma', 'Plain Yogurt or Buttermilk'],
        },
        {
          name: 'Mid-Morning Snack',
          content: [
            'Handful of Mixed Nuts',
            'Piece of Fruit (Apple or Banana)',
          ],
        },
        {
          name: 'Lunch',
          content: [
            'Rajma Masala',
            'Steamed Rice or Whole Wheat Roti',
            'Cucumber Raita',
            'Side Salad with Mixed Greens, Tomatoes, and Cucumbers',
          ],
        },
        {
          name: 'Afternoon Snack',
          content: [
            'Roasted Chickpeas',
            'Small Bowl of Sprouts with Lemon Juice',
          ],
        },
        {
          name: 'Evening',
          content: ['Masala Chai', 'Homemade Dhokla', 'Chutney'],
        },
        {
          name: 'Dinner',
          content: [
            'Vegetable Biryani',
            'Spinach Dal',
            'Cucumber and Tomato Salad',
          ],
        },
        {
          name: 'Before Bed',
          content: ['Warm Turmeric Milk or Herbal Tea'],
        },
      ],
    },
    {
      gender: 'female',
      age: 25,
      goal: 'weightloss',
      meals: [
        {
          name: 'Breakfast',
          content: ['Vegetable Upma (Semolina Porridge) with Green Tea'],
        },
        {
          name: 'Mid-Morning Snack',
          content: ['Plain Yogurt with Chia Seeds and Fresh Fruit'],
        },
        {
          name: 'Lunch',
          content: [
            'Quinoa Salad with Roasted Vegetables',
            'Mixed Green Salad with Avocado and Lemon-Tahini Dressing',
          ],
        },
        {
          name: 'Afternoon Snack',
          content: ['Raw Almonds and Dried Apricots'],
        },
        {
          name: 'Evening',
          content: [
            'Herbal Tea',
            'Vegetable Clear Soup',
            'Whole Wheat Crackers',
          ],
        },
        {
          name: 'Dinner',
          content: [
            'Grilled Paneer (Indian Cottage Cheese)',
            'Steamed Broccoli and Carrots',
            'Brown Rice',
          ],
        },
        {
          name: 'Before Bed',
          content: ['Warm Turmeric Milk'],
        },
      ],
    },
    {
      gender: 'female',
      age: 25,
      goal: 'weightgain',
      meals: [
        {
          name: 'Breakfast',
          content: [
            'Vegetable Paratha (stuffed flatbread) with Curd (Yogurt)',
            'Boiled Egg',
            'Fruit Juice',
          ],
        },
        {
          name: 'Mid-Morning Snack',
          content: [
            'Mixed Nuts (Almonds, Cashews, and Pistachios)',
            'Banana Milkshake with Honey',
          ],
        },
        {
          name: 'Lunch',
          content: [
            'Chickpea Curry (Chole) with Basmati Rice',
            'Spinach Dal',
            'Cucumber Raita',
            'Papad (Indian lentil crisps)',
          ],
        },
        {
          name: 'Afternoon Snack',
          content: [
            'Paneer Tikka (Grilled Cottage Cheese) with Mint Chutney',
            'Fruit Salad',
          ],
        },
        {
          name: 'Evening',
          content: [
            'Vegetable Samosa',
            'Masala Chai',
            'Assorted Dry Fruits (Dates, Raisins, and Figs)',
          ],
        },
        {
          name: 'Dinner',
          content: [
            'Vegetable Biryani',
            'Mixed Vegetable Curry',
            'Curd Rice',
            'Papad (Indian lentil crisps)',
          ],
        },
        {
          name: 'Before Bed',
          content: ['Warm Milk with Turmeric and Honey', 'Handful of Walnuts'],
        },
      ],
    },
    {
      gender: 'Male',
      age: 25,
      goal: 'weightgain',
      meals: [
        {
          name: 'Breakfast',
          content: [
            'Chickpea Flour (Besan) Chilla with Paneer (Indian Cottage Cheese)',
            'Banana Shake with Almond Butter',
          ],
        },
        {
          name: 'Mid-Morning Snack',
          content: ['Mixed Nuts (Cashews, Almonds, and Pistachios)', 'Dates'],
        },
        {
          name: 'Lunch',
          content: [
            'Vegetable Pulao with Mixed Raita (Yogurt with Grated Cucumber, Carrot, and Mint)',
            'Dal Fry',
            'Salad with Avocado and Lemon-Tahini Dressing',
          ],
        },
        {
          name: 'Afternoon Snack',
          content: [
            'Paneer Tikka (Grilled Cottage Cheese) with Mint Chutney',
            'Fruit Salad with Yogurt',
          ],
        },
        {
          name: 'Evening',
          content: [
            'Peanut Butter Sandwich with Banana Slices',
            'Chickpea (Chana) Chaat with Tamarind Chutney',
          ],
        },
        {
          name: 'Dinner',
          content: [
            'Vegetable Biryani',
            'Soya Chunks Curry',
            'Mixed Vegetable Salad',
          ],
        },
        {
          name: 'Before Bed',
          content: [
            'Warm Milk with a Spoonful of Ghee',
            'Assorted Dry Fruits (Almonds, Cashews, and Raisins)',
          ],
        },
      ],
    },
    {
      gender: 'male',
      age: 25,
      goal: 'weightgain',
      type: 'nonVeg',
      meals: [
        {
          name: 'Breakfast',
          content: [
            'Egg Omelette with Vegetables',
            'Whole Wheat Toast with Butter',
            'Mango Lassi (Yogurt-based Drink)',
          ],
        },
        {
          name: 'Mid-Morning Snack',
          content: [
            'Chicken Tikka',
            'Mixed Nuts (Almonds, Cashews, and Walnuts)',
          ],
        },
        {
          name: 'Lunch',
          content: [
            'Chicken Biryani',
            'Mixed Vegetable Raita (Yogurt with Grated Vegetables)',
            'Salad with Lettuce, Tomatoes, and Cucumber',
          ],
        },
        {
          name: 'Afternoon Snack',
          content: ['Grilled Fish Fillet', 'Fruit Smoothie with Whey Protein'],
        },
        {
          name: 'Evening',
          content: ['Chicken Sandwich with Avocado and Cheese', 'Boiled Eggs'],
        },
        {
          name: 'Dinner',
          content: ['Mutton Curry', 'Jeera Rice', 'Mixed Vegetable Salad'],
        },
        {
          name: 'Before Bed',
          content: [
            'Warm Milk with a Spoonful of Honey',
            'Mixed Dry Fruits (Almonds, Cashews, and Dates)',
          ],
        },
      ],
    },
    {
      gender: 'male',
      age: 25,
      goal: 'musclebuilding',
      type: 'misex-vig-nonVeg',
      meals: [
        {
          name: 'Breakfast',
          content: [
            'Omelette with Spinach, Mushrooms, and Cheese',
            'Whole Wheat Toast',
            'Greek Yogurt with Berries',
          ],
        },
        {
          name: 'Mid-Morning Snack',
          content: [
            'Protein Shake with Whey Protein Powder',
            'Mixed Nuts (Almonds, Walnuts, and Pistachios)',
          ],
        },
        {
          name: 'Lunch',
          content: [
            'Grilled Chicken Breast',
            'Brown Rice or Quinoa',
            'Steamed Broccoli and Sweet Potato',
            'Mixed Green Salad with Olive Oil and Lemon Dressing',
          ],
        },
        {
          name: 'Afternoon Snack',
          content: [
            'Cottage Cheese (Paneer) with Bell Pepper Slices',
            'Fruit Salad',
          ],
        },
        {
          name: 'Pre-Workout Snack',
          content: ['Whole Wheat Bread with Peanut Butter', 'Banana'],
        },
        {
          name: 'Post-Workout Snack',
          content: [
            'Grilled Fish Fillet',
            'Quinoa Salad with Mixed Vegetables',
          ],
        },
        {
          name: 'Dinner',
          content: [
            'Chickpea Curry (Chole)',
            'Whole Wheat Roti',
            'Mixed Vegetable Pulao',
            'Cucumber Raita',
          ],
        },
        {
          name: 'Before Bed',
          content: ['Low-Fat Cottage Cheese (Paneer)', 'Casein Protein Shake'],
        },
      ],
    },
    {
      gender: 'male',
      age: 25,
      goal: 'musclebuilding',
      type: 'misex-vig-nonVeg',
      meals: [
        {
          name: 'Breakfast',
          content: [
            'Oatmeal with Almond Milk, Peanut Butter, and Sliced Banana',
            'Greek Yogurt with Berries',
          ],
        },
        {
          name: 'Mid-Morning Snack',
          content: [
            'Protein Shake with Soy Milk, Whey Protein Powder, and Banana',
            'Mixed Nuts (Almonds, Walnuts, and Cashews)',
          ],
        },
        {
          name: 'Lunch',
          content: [
            'Soya Chunk Curry',
            'Brown Rice or Quinoa',
            'Steamed Broccoli and Sweet Potato',
            'Mixed Green Salad with Olive Oil and Lemon Dressing',
          ],
        },
        {
          name: 'Afternoon Snack',
          content: [
            'Cottage Cheese (Paneer) with Bell Pepper Slices',
            'Fruit Salad with Chia Seeds',
          ],
        },
        {
          name: 'Pre-Workout Snack',
          content: ['Whole Wheat Bread with Peanut Butter', 'Banana'],
        },
        {
          name: 'Post-Workout Snack',
          content: [
            'Soy Milk Protein Smoothie with Tofu, Spinach, and Berries',
            'Quinoa Salad with Mixed Vegetables',
          ],
        },
        {
          name: 'Dinner',
          content: [
            'Chickpea Curry (Chole)',
            'Whole Wheat Roti',
            'Mixed Vegetable Pulao',
            'Cucumber Raita',
          ],
        },
        {
          name: 'Before Bed',
          content: [
            'Low-Fat Cottage Cheese (Paneer)',
            'Casein Protein Shake',
            'Handful of Mixed Nuts',
          ],
        },
      ],
    },
  ])
  return (
    <ScrollView>
      <View style={styles.container}>
        {meal.map((entry, index) => {
          if (entry.gender) {
            return (
              <UserGoalBox
                key={index}
                gender={entry.gender}
                meal={entry.meals}
                age={entry.age}
                goal={entry.goal}
              />
            );
          }
          return null;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
  },
});

export default Meal;
