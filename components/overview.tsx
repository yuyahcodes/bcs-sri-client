'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Week 1',
    gender: Math.floor(Math.random() * 100) + 10,
    race: Math.floor(Math.random() * 100) + 10,
    LGBTQ: Math.floor(Math.random() * 100) + 10,
    yearly: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: 'Week 2',
    gender: Math.floor(Math.random() * 100) + 10,
    race: Math.floor(Math.random() * 100) + 10,
    LGBTQ: Math.floor(Math.random() * 100) + 10,
    yearly: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: 'Week 3',
    gender: Math.floor(Math.random() * 100) + 10,
    race: Math.floor(Math.random() * 100) + 10,
    LGBTQ: Math.floor(Math.random() * 100) + 10,
    yearly: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: 'Week 4',
    gender: Math.floor(Math.random() * 100) + 10,
    race: Math.floor(Math.random() * 100) + 10,
    LGBTQ: Math.floor(Math.random() * 100) + 10,
    yearly: Math.floor(Math.random() * 1000) + 100
  }
];

export function Overview() {
  return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
          />
          <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="gender" fill="#784dff" radius={[4, 4, 0, 0]} />
          <Bar dataKey="race" fill="#ff4d4d" radius={[4, 4, 0, 0]} />
          <Bar dataKey="LGBTQ" fill="#4dff4d" radius={[4, 4, 0, 0]} />
          <Bar dataKey="yearly" fill="#4d4dff" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
  );
}
