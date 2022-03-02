import React from 'react';

import { Monster } from '../../models/monster';
import { Card } from '../card/card.component';

import './card-list.styles.css';

type CardListProps = {
  monsters: Monster[];
};

export const CardList: React.FunctionComponent<CardListProps> = (
  props: CardListProps
): JSX.Element => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
