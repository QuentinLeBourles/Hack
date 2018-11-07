import React from 'react';
import { VictoryChart, VictoryGroup, VictoryStack, VictoryBar } from 'victory';
import {Container } from 'reactstrap'

class Chart3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const getBarData = () => {
      return [1, 2, 3, 4, 5].map(() => {
        return [
          { x: 1, y: Math.random() },
          { x: 2, y: Math.random() },
          { x: 3, y: Math.random() }
        ];
      });
    };

    return (
      <div>
        <Container >
        <VictoryChart domainPadding={{ x: 50 }} width={400} height={400}>
            <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
              <VictoryStack colorScale={"red"}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
              </VictoryStack>
              <VictoryStack colorScale={"green"}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
              </VictoryStack>
              <VictoryStack colorScale={"blue"}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
              </VictoryStack>
            </VictoryGroup>
          </VictoryChart>
          </Container>
      </div>
    );
  }
}
 
export default Chart3;