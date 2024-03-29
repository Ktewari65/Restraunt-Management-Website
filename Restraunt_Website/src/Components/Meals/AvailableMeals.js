import { Fragment } from 'react';
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from '../MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


  const AvailableMeals = props =>{

    const meals = DUMMY_MEALS.map(item =>
        <MealItem  key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        id={item.id}
      />
      
    )
   
    return(
            
    <Fragment>
         <Card>
            <ul className={classes.meals}>{meals}</ul>
           
            </Card>
    </Fragment>

        

    )
  }

  export default AvailableMeals