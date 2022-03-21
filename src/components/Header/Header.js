import React, { Component } from 'react'
import './Header.css';
import Button from '../Button/Button';
import { useState } from 'react';

// const Header = () => {
//   const [isSorted,toggleIsSorted] = useState('sorted');



//   return (
//     <header className="App-header">
//       <h1>My contacts book</h1>
//       <Button buttonLabel={'Sort A-Z'} onClick={ ()=> toggleIsSorted() } />
//     </header>
//   )
// }
class Header extends Component {
  static defaultProps = {
    buttonLabel: 'Sort A-Z'

  }

  constructor(props) {
    super(props);
    this.state = { buttonLabel: 'Sorted A-Z' };
    this.toggleSort = this.toggleSort.bind(this);

  }

  toggleSort() {
    alert('togglesort')
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>My contacts book</h1>
          <Button buttonLabel={this.props.buttonLabel} onClick={this.toggleSort} />
        </header>

      </div >
    )
  }
}



export default Header
