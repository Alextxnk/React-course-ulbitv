import React from 'react';

class ClassCounter extends React.Component {
   // это устаревший подход, функциональные компоненты и хуки намного удобнее 
   // в классовом компоненте нельзя использовать хуки
   constructor(props) {
      super(props);
      this.state = {
         count: 0
      };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
   }

   increment() {
      this.setState({ count: this.state.count + 1 });
   }

   decrement() {
      this.setState({ count: this.state.count - 1 });
   }

   render() {
      return (
         <div>
            <h1>Class count: {this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
         </div>
      );
   }
}

export default ClassCounter;
