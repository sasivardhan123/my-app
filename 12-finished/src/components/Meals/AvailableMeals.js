import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Men shoes',
    description: 'Finest Shoe fo size 9',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Shirts for men',
    description: 'A german design!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Jeans',
    description: 'American slim fit jeans',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Apple Charger',
    description: '35W apple charger lightening cable',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Girls jeans',
    description: 'American slim fit jeans',
    price: 12,
  },
  {
    id: 'm6',
    name: 'Girls shoes',
    description: '7UK female shoes',
    price: 15.99,
  },
  {
    id: 'm7',
    name: 'Girls shirts',
    description: 'M size female Shirt',
    price: 15.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
