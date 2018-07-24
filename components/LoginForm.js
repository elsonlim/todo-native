import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DbService from '../service/dbService';

import { Header, Card, CardSection, Button, MyTextInput, Spinner } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
        };
    }

    onButtonPress() {
        this.setState({ error: '', loading: true });
        const { email, password } = this.state;
        DbService.signInWithEmailAndPassword(email, password)
            .then(this.onLogin.bind(this))
            .catch((err) => {
                console.log(err);
                DbService.createUserWithEmailAndPassword(email, password)
                    .then(this.onLogin.bind(this))
                    .catch(this.onFail.bind(this));
            });
    }

    onLogin() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
        });
    }

    onFail() {
        this.setState({
            error: 'Auth Failed',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return ( 
            <View>
                <Header headerText="Login form" />
                <Card>
                    <CardSection>
                        <MyTextInput
                            label='email:' 
                            placeholder='user@email.com'
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />
                    </CardSection>
                    <CardSection>
                        <MyTextInput
                            secureTextEntry
                            label="password:"
                            placeholder='password'
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />
                    </CardSection>
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
                <Text 
                    style={{ 
                        color: 'red',
                        alignItems: 'center',
                    }}
                >
                    {this.state.error}
                </Text>
            </View>
        );
    }
}

export default LoginForm;
