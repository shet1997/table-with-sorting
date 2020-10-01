import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    state = { 
        data: []
     }

    async componentDidMount() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(data);
        this.setState({ data });
    }

    render() { 
        return ( 
           <React.Fragment>
               <table className="table table-bordered">
                   <thead>
                       <tr>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.state.data.map(user => {
                    return (<tr key={user.id}> 
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>)
                       })}           
                   </tbody>
               </table>
           </React.Fragment>
         );
    }
}
 
export default Users;