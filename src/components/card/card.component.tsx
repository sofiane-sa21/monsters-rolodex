import React from 'react';

import { Monster } from '../../models/monster';

import './card.styles.css';

type CardProps = {
  monster: Monster;
};

export const Card: React.FunctionComponent<CardProps> = (
  props: CardProps
): JSX.Element => (
  <div className="card-container">
    <img
      alt="monter"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
