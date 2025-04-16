import React from 'react';
import Card from './Card';
import './Card.css'; 
import './CardList.css';
import one from '../assets/one01.png';
import two from '../assets/two1.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five1.png';

const Content = [
    {
      id: 1,
      title: 'Create model',
      description: 'Create your model with our easy to use modeling tool.',
      icon: one, 
    },
    {
      id: 2,
      title: "Visualize 3D model",
      description: 'Visualize your 3D model with our easy to use visualization tool.',
      icon: two, 
    },
    {
      id: 3,
      title: ' Visualize 2D model',
      description: 'Visualize your 2D model with our easy to use visualization tool.',
      icon: three,
    },
    {
      id: 4,
      title: 'Visualize Map',
      description: 'Visualize your map with our easy to use visualization tool.',
      icon: four, 
    },
    {
      id: 5,
      title: 'Templates',
      description: 'With our templates you can easily finish your project in no time.',
      icon: five,
    },
  ];
  

const CardList = () => {
    const handleCardClick = (cardId) => {
        console.log(`Card with ID ${cardId} clicked!`);
      };

  return (
    <div className="app">
      <div className="header">
        <h1>Everything a 3D Software Workflow Needs</h1>
      </div>
      <div className="card-grid">
        {Content.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.icon}
            title={card.title}
            description={card.description}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
    
  )
}

export default CardList