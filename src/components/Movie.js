import React from 'react';
import {Card, CardImg, CardText, CardBody} from 'reactstrap';
import { Badge } from 'reactstrap';
import { Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faVideo, faStar } from '@fortawesome/free-solid-svg-icons'

const Movies = (props) => {

  const globalCount = []
  for (var i=0; i<10; i++) {
    if (i>= props.globalCountRating) {
      globalCount.push(<FontAwesomeIcon icon={faStar} />)
    } else {
      globalCount.push(<FontAwesomeIcon  style={{color:'gold'}} icon={faStar} />)
    }
  }

  return (
    <Col xs="12" md="6" lg="4">
      <Card className="mb-3">
      <CardImg top width="100%" src={props.movieImg} alt="Card image cap" />
      <CardBody>
        <CardText>
            <p className="font-weight-bold">{props.movieName}</p>
            <p className="mb-0">Like <FontAwesomeIcon icon={faHeart} /><Badge className="ml-2" color="secondary">{props.globalRating}</Badge></p>
            <p className="mb-0">Nombre de vues <FontAwesomeIcon icon={faVideo} /><Badge className="ml-2" color="secondary">0</Badge></p>
            <p className="mb-0">Mon avis <FontAwesomeIcon icon={faStar} /><Badge className="ml-2" color="secondary">-1</Badge><Badge className="ml-2" color="secondary">+1</Badge></p>
            <p className="mb-0">Avis global {globalCount} ({props.globalCountRating})</p>
            <p>{props.movieDesc}</p>
        </CardText>
      </CardBody>
    </Card>
  </Col>
  );
};

export {Movies};