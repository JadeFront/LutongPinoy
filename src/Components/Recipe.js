import React from 'react';
import './Recipe.css'
import { useState } from 'react';

const Recipe = () => {
    const [recipes, setRecipes] = useState([
        {dish: 'Sinigang', description: ' composed of pork and vegetables boiled in a clear sour broth.', img: './images/sinigang-baboy.jpg'},
        {dish: 'Adobong Baboy', description: 'made by stewing pork in soy sauce, vinegar, sugar and aromatics.', img: './images/adobong-baboy.jpg'},
        {dish: 'Bibingka', description: 'made out of rice flour and coconut milk cooked in a clay pot.', img: './images/bibingka.jpg'},
        {dish: 'Bicol Express', description: 'Bicol express is a stew made with coconut milk and wild chilies', img: './images/bicol-express.jpg'},
        {dish: 'Champorado', description: 'chocolate rice porridge that uses glutinous rice and cocoa powder. ', img: './images/champorado.jpg'},
        {dish: 'Giniling', description: 'is a stew traditionally made of ground pork and veggies.', img: './images/giniling.jpg'},
        {dish: 'Maja Blanca', description: 'is a gelatin-like consistency made primarily from coconut milk.', img: './images/maja-blanca.jpg'},
        {dish: 'Pinakbet', description: 'made with a variety of mixed vegetables flavored with bagoóng. ', img: './images/pinakbet.jpg'},
        {dish: 'Puto Bumbong', description: 'is a Filipino purple rice cake steamed in bamboo tubes.', img: './images/puto-bumbong.webp'},
        {dish: 'Palabok', description: ' rice noodle dish with a rich pork and shrimp sauce', img: './images/palabok.jpg'},
        {dish: 'Sisig', description: ' it is composed of minced pork, chopped onion, and chicken liver.', img: './images/sisig.jpg'},
        {dish: 'Sopas', description: 'is a soup dish filled with shredded chicken meat and elbow macaroni noodles. ', img: './images/sopas.jpg'},
        {dish: 'Tortang Talong', description: 'eggplant omelette made by pan-frying a charred eggplant doused in egg.', img: './images/tortang-talong.jpg'},
        {dish: 'Turon', description: 'fried spring rolls filled with ripe saba banana, jackfruit, and brown sugar.', img: './images/turon.jpg'},
        {dish: 'Ube Halaya', description: 'a sweet pudding-like jam made with grated purple yam and sweet coconut milk.', img: './images/ube-halaya.jpg'},
        {dish: 'Leche Flan', description: 'is a dessert made-up of eggs and milk with a soft caramel on top. ', img: './images/lecheflan.jpg'}
    ])
  return (
    <div className='main-container' id='recipe'>
        
        {recipes.map((recipe) => (
            
                <div className='recipe-container'>
                    <div className='card-container'>
                        <img className='card-image' src={recipe.img}/>
                        <h2 className='card-title'>{recipe.dish}</h2>
                        <p className='card-description'>{recipe.description}</p>
                        <button className='card-button'>Full Recipe</button>
                    </div>
                </div>
        ))}
    </div>
  )
}

export default Recipe