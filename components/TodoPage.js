import React from 'react';
import { View } from 'react-native';
import { Header } from './common';
import AddItem from './AddItem';
import TodoList from './TodoList';

class TodoPage extends React.Component {
    render() {
        return (
            <View>
                <Header headerText="TODO list" />
                <AddItem />
                <TodoList />
            </View>
        );
    }
}

export default TodoPage;
