import React from 'react';
import { 
  SafeAreaView, StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoApp from './components/TodoApp';
import reducers from './reducer';

const store = createStore(reducers);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
          <TodoApp />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  // mytextbox: {
  //   height: 50,
  //   borderWidth: 1,
  //   margin: 5
  // },
  // header: {
  //   marginTop: '15px'
  // },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
