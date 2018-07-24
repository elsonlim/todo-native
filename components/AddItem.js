import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import { Card, CardSection, Button, MyTextInput } from './common';
import DbService from '../service/dbService';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: ''
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        DbService.addTodo({
            item: this.state.newItem
        }).then(() => {
            // update value
            DbService.getTodos()
                .then(response => {
                    this.props.updateTodolist(response.data);
                }
            );

            // clear text
            this.setState({
                newItem: ''
            });
        });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <MyTextInput 
                        label='New:'
                        placeholder='what do you want to do'
                        onChangeText={newItem => this.setState({ newItem })}
                        value={this.state.newItem}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.addItem}>
                        Add New Item
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null, Actions)(AddItem);
