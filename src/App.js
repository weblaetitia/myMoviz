import React from 'react'
import './App.css'
import { Navigation } from './components/Nav'
import {Movies} from './components/Movie'

import { Container, Row } from 'reactstrap';


function App() {
  const moviesData = [
    { name: 'Star Wars : L\'ascension de Skywalkers',
      desc: 'Lorizzle ipsum dolizzle away mofo, funky fresh adipiscing yippiyo. Uhuh ... yih! own yo\' velit, aliquet volutpizzle, suscipit quis, gravida vizzle, ma nizzle. Pellentesque eget tortizzle. Sed erizzle. Fusce that\'s the shizzle dolor its fo rizzle turpizzle tempizzle boofron. Mah nizzle go to hizzle nibh izzle turpis. Crazy izzle tortizzle.',
      img: '/img/starwars.jpg',
      note: 0,
      vote: 7 }, 
      { name: 'Maléfique : Le pouvoir du mal',
      desc: 'Pellentesque fo shizzle rhoncizzle nisi. In pimpin\' habitasse platea dictumst. Da bomb dapibizzle. Dizzle tellus bling bling, owned eu, mattizzle ac, eleifend vitae, nunc.',
      img: '/img/maleficent.jpg',
      note: 0,
      vote: 4 }, 
      { name: 'Jumanji: The next level',
      desc: 'Phasellizzle dang volutpizzle mammasay mammasa mamma oo sa. Ut break yo neck, yall bizzle lorem. Donec non est. Shut the shizzle up sapizzle daahng dawg, ultricizzle nizzle, accumsan nizzle, fermentizzle quis, mofo. ',
      img: '/img/jumanji.jpg',
      note: 0,
      vote: 3 }, 
      { name: 'Once uppon a time in hollywood',
      desc: 'Dizzle shut the shizzle up hizzle. Etizzle you son of a bizzle ornare ante. Sizzle dang. Vestibulum mammasay mammasa mamma oo sa pede boofron fo shizzle mah nizzle fo rizzle, mah home g-dizzle commodo commodo. Lorizzle ipsizzle dolizzle sizzle bizzle, consectetizzle fizzle elit. For sure ac yippiyo. Quisque mi sem, daahng dawg izzle, doggy a, eleifend a, elizzle.',
      img: '/img/once_upon.jpg',
      note: 0,
      vote: 9 }, 
      { name: 'Frozen',
      desc: 'Phasellizzle dang volutpizzle mammasay mammasa mamma oo sa. Ut break yo neck, yall bizzle lorem. Donec non est. Shut the shizzle up sapizzle daahng dawg, ultricizzle nizzle, accumsan nizzle, fermentizzle quis, mofo',
      img: '/img/frozen.jpg',
      note: 0,
      vote: 2 }, 
      { name: 'Bad Boy 3',
      desc: 'Pellentesque fo shizzle rhoncizzle nisi. In pimpin\' habitasse platea dictumst. Da bomb dapibizzle. Dizzle tellus bling bling, owned eu, mattizzle ac, eleifend vitae, nunc.',
      img: '/img/badboy3.jpg',
      note: 0,
      vote: 2 }, 
      { name: 'Terminator',
      desc: 'Funky fresh dang dizzle pimpin\' nisi aliquizzle mollis. Check it out potenti. Morbi crackalackin. Vivamus neque. Owned orci. Cras maurizzle maurizzle, interdizzle yo mamma, shut the shizzle up sizzle amizzle, malesuada izzle, pizzle. Pellentesque sizzle.',
      img: '/img/terminator.jpg',
      note: 0,
      vote: 2 }
  ]
  const movieList = moviesData.map(function(movie, i) {
    return <Movies key={i}  movieName={movie.name} movieDesc={movie.desc} movieImg={movie.img} globalRating={movie.note} globalCountRating={movie.vote} />
  })

  return (
   <div>
     <Container className="mb-4">
      <Navigation />
     </Container>
    
    <Container>
      <Row>
      {movieList}
      </Row>
    </Container>
   </div>
  );
}

export default App;
