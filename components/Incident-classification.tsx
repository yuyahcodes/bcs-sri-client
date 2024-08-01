"use client"

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for demonstration
const data = [
  { name: 'Gender', value: 400 },
  { name: 'Race', value: 300 },
  { name: 'LGBTQ', value: 200 },
  { name: 'Other', value: 100 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function IncidentClassification() {
  return (
      <div className="space-y-8">
        {/*<h2 className="text-lg font-semibold">Discrimination Incidents by Classification</h2>*/}
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={150}
                fill="#8884d8"
                label
            >
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
  );
}
