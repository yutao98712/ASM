import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
class ContentView extends Component {
  render() {
    return (
      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        ...
        <br />
        Really
        <br />...<br />...<br />...<br />
        long
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />
        <Link to="/login" >到登陆页面</Link>
        content
      </div>
      
    )
  }
}

export default ContentView;