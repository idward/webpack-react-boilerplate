import React from 'react';
import { RadioGroup } from 'uxcore';

const { Item } = RadioGroup;

class App extends React.Component {
  handleChange = (e: any) => {
    console.log('changed: ', e);
  };

  render() {
    return (
      <div>
        <h1>Welcome to My React Boilerplate!</h1>
        <RadioGroup value="apple" onChange={this.handleChange}>
          <Item value="apple" text="苹果" />
          <Item value="banana" text="香蕉" />
          <Item value="orange" text="橘子" />
        </RadioGroup>
      </div>
    );
  }
}

export default App;
