import React from 'react';
import { MarkerType, Position } from 'reactflow';

export const nodes = [
  {
    id: '1',
    type: 'custom',
    data: { name: 'Jane Doe', job: 'CEO', emoji: '😎' },
    position: { x: 0, y: 50 },
    style: { width: 180, height: 100 },
  },
  {
    id: '2',
    type: 'custom',
    data: { name: 'Tyler Weary', job: 'Designer', emoji: '💰' },

    position: { x: -200, y: 200 },
  },
  {
    id: '3',
    type: 'custom',
    data: { name: 'Kristi Price', job: 'Developer', emoji: '🔒' },
    position: { x: 200, y: 200 },
  },
  {
    id: '4',
    type: 'default',
    data: {
      label: 'Default Node',
    },
    position: { x: 200, y: 200 },
  },
];

export const edges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated:true
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
  {
    id: 'e1-3',
    source: '1',
    target: '4',
  },
];