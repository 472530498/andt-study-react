import React from 'react';

// export default function Layout(props) {
//   return <div>{props.children}</div>;
// }

export default class Layout extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
