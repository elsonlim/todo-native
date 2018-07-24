import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as Actions from '../actions';
import DbService from '../service/dbService';

class TodoItem extends React.Component {
    deleteItem(id) {
        DbService.deleteTodo(id).then(() => {
            DbService.getTodos()
                .then(response => {
                    this.props.updateTodolist(response.data);
                }
            );
        });
    }

    render() {
        return (
            <CardSection>
                <View 
                    style={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Text>{this.props.todo.item}</Text>
                    <Icon
                        name="delete-circle"
                        size={30}
                        color="black"
                        onPress={this.deleteItem.bind(this, this.props.todo.id)}
                    />
                </View>
                {/*  */}
            </CardSection>
        );
    }
}

export default connect(null, Actions)(TodoItem);
