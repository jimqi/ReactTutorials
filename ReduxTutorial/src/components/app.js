import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

class App extends Component {
  render() {
    return (
        <div>
            <BookList />
            <BookDetail />
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(App)