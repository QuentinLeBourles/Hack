import React, { Component } from 'react';
import {Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar, Legend} from 'recharts';
const data = [
    {name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8'},
    {name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed'},
    {name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
    {name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d'},
    {name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c'},
    {name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57'},
    {name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658'}
  ];
const style = {
    top: 0,
    left: 350,
    lineHeight: '24px'
};
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:data
         }
    }
    render() { 
        return ( 
            <div>
                <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>

        <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey='uv'/>
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>
    );
  }
})
            </div>
         );
    }
}
 
export default Test;