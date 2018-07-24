import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import TodoPage from './TodoPage';
import LoginForm from './LoginForm';
import { Button, Spinner, Card, CardSection } from './common';

import * as Actions from '../actions';
import DbService from '../service/dbService';

class TodoApp extends React.Component {
    componentWillMount() {
        DbService.init();

        DbService.onAuthStateChanged((user) => {
            if (user) {
                // this.setState({ loggedIn: true });
                this.props.updateIsLogin({ loggedIn: true });
            } else {
                //this.setState({ loggedIn: false });
                this.props.updateIsLogin({ loggedIn: false });
            }
        });
        }
    
    renderContent() {
        const loggedIn = this.props.loggedIn;

        switch (loggedIn) {
            case true:
            return (
                <ScrollView>
                    <TodoPage />

                    <Card>
                        <CardSection>
                            <Button 
                                onPress={() => DbService.signOut()}
                                color='red'
                            >
                                Sign Out
                            </Button>
                        </CardSection>
                    </Card>
                </ScrollView>
            );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderContent()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
        loggedIn: state.pageReducer.loggedIn
});

export default connect(mapStateToProps, Actions)(TodoApp);
