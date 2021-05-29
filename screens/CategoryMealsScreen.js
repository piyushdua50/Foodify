import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/Dish-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => {
        // console.log("state", state);
        return state.meals.filteredMeals
    });

    const displayedMeals = availableMeals.filter((meal) =>
        meal.categoryIds.indexOf(catId) >= 0
    );

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>No meals found. May be check your filters?</DefaultText>
            </View>
        );
    };

    // console.log("Meals are-------", displayedMeals);

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedId = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedId.title
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryMealsScreen;
