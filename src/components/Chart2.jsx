import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme} from 'victory';
import { Container } from 'reactstrap'

class Chart2 extends React.Component {
    render() {
      return (
        <div>
        <Container >
          <VictoryChart
            theme={VictoryTheme.material}
            domain={{ y: [0.5, 5.5] }}
          >
              <VictoryGroup horizontal
                offset={10}
                style={{ data: { width: 6 } }}
                colorScale={["brown", "tomato", "gold"]}
              >
                <VictoryBar
                  data={[
                    { x: 1, y: 1 },
                    { x: 2, y: 2 },
                    { x: 3, y: 3 },
                    { x: 4, y: 2 },
                    { x: 5, y: 1 }
                  ]}
                />
                <VictoryBar
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 4 },
                    { x: 4, y: 5 },
                    { x: 5, y: 5 }
                  ]}
                />
                <VictoryBar
                  data={[
                    { x: 1, y: 1 },
                    { x: 2, y: 2 },
                    { x: 3, y: 3 },
                    { x: 4, y: 4 },
                    { x: 5, y: 4 }
                  ]}
                />
            </VictoryGroup>
          </VictoryChart>
          </Container>  
        </div>
      );
    }
  }
export default Chart2