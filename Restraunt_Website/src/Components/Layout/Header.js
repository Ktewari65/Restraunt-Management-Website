import React, { Fragment } from "react"
import classes from './Header.module.css'
//import mealsImage from '../../Assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) =>{
return(
    <Fragment>
    <header className={classes.header}>
      <h1>React Meals</h1>
    <HeaderCartButton onClick ={props.onClick}/>
    </header>
    <div className={classes['main-image']}>
        <img src='https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true'  alt="Food Items"></img>
    </div>
    </Fragment>
)
}

export default Header