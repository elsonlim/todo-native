import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import DbService from '../service/dbService';
import { Card } from './common';
import TodoItem from './TodoItem';
import * as Actions from '../actions';

class TodoList extends Component {
    componentWillMount() {
        DbService.getTodos()
            .then(response => {
                this.props.updateTodolist(response.data);
            }
        );
    }

    renderTodos() {
        const { todoItems } = this.props;
        return (
            <Card>{
                todoItems.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }</Card>
        );
    }  

    render() {
        return (
            <View>
                {this.renderTodos()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    todoItems: state.todoReducer.todoItems
});

export default connect(mapStateToProps, Actions)(TodoList);

