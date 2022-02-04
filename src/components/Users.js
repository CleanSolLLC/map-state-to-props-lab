import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {
            return <li>{user.username}</li>
          })}

          <h4>User Count:{this.props.users.length}</h4>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {users: state.users}
};

export default connect(mapStateToProps)(Users)
