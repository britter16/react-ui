/* import Layout from '../components/MyLayout';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Test() {
  return (
    <Layout>
      <h1>Motor Test</h1>
      <ul>
        <Button onClick={() => Signal("LStop")} variant="primary">Left STOP</Button>
        <Button variant="primary">Left SLOW</Button>
        <Button variant="primary">Right STOP</Button>
        <Button variant="primary">Right SLOW</Button>
      </ul>
    </Layout>
  );
} */
import React from 'react';
import Layout from '../components/MyLayout'

var HttpClient = function() {
  this.get = function(aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() { 
          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
              aCallback(anHttpRequest.responseText);
      }

      anHttpRequest.open( "GET", aUrl, true );            
      anHttpRequest.send( null );
  }
}

function App() {

  var client = new HttpClient();

  function Signal(action) {
    if (action == "AStop") {
      client.get('http://192.168.4.2:3000/stop', function(response) {
        // do something with response
      });
    } else if (action == "ASlow"){
      client.get('http://192.168.4.2:3000/slow', function(response) {
        // do something with response
      });
    } else if (action == "BStop") {
      client.get('http://192.168.4.3:3000/stop', function(response) {
        // do something with response
      });
    } else if (action == "BSlow") {
      client.get('http://192.168.4.3:3000/slow', function(response) {
        // do something with response
      });
    };
  }
  
  return (
    <Layout>
      <h1>Motor Test</h1>
      <ul>
        <button onClick={() => Signal("AStop")} variant="primary">A STOP</button>
        <button onClick={() => Signal("ASlow")} variant="primary">A SLOW</button>
        <button onClick={() => Signal("BStop")} variant="primary">B STOP</button>
        <button onClick={() => Signal("BSlow")} variant="primary">B SLOW</button>
      </ul>
    </Layout>
  );
}

export default App;