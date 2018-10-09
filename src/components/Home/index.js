import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

import { userActions } from '../../actions';

class Home extends React.Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(userActions.getAll());
    }
    render () {
        const { users } = this.props;
        console.log("users: ", users.items ? users.items.data.data : '');
        const allUsers = users.items ? users.items.data.data : [];
        return (
            <div className="usersList">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    allUsers.map( (item, key) => (
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                }
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { users } = state;
    return {
        users
    };
}

export default connect(mapStateToProps)(Home);

