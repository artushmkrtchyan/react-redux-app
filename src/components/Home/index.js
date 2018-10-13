import React from 'react';
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
        const allUsers = users.items ? users.items.data.data : [];
        return (
            <div className="usersList">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    allUsers.map( (item, key) => (
                        <tr key={key}>
                            <td>{key+1}</td>
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

