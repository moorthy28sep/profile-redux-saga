import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {jsonDataAction, deleteAction} from '../reducers/profileReducer';

import {Table, Button} from 'react-bootstrap';

class MyTable extends Component {
    componentDidMount() {
        this.props.jsonKey();
    }
    
    render() {
        return (
            <div>
            <h1>Profile Table</h1>

            <Table responsive >
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Avatar</td>
                        
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.jsonValue.myJson.length !== 0 && this.props.jsonValue.myJson.map(
                        d => {
                                    return (
                                        <tr key={d.id}>
                                            <td>{d.first_name}</td>
                                            <td>{d.last_name}</td>
                                            <td><img src={d.avatar} alt="" /></td>
                                            <td><Button className="btn btn-danger" onClick= {this.props.deleteKey} id={d.id} >Delete</Button></td>
                                        </tr>
                                    )
                                }   
                                )
                    }                    
                    
                </tbody>
            </Table>
            </div>
        );
    }
}

const mapStateToprops = (state) => {
    return{
        jsonValue : state.profile
    }
}

const mapDispatchToProps = (dispatch) =>{
   return bindActionCreators({
       jsonKey: jsonDataAction,
       deleteKey : deleteAction
    },dispatch);
}

export default connect(mapStateToprops,mapDispatchToProps)(MyTable);