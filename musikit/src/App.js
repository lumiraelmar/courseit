import React from 'react';
import Footer from './components/Footer';
import './App.css';

function App() {
  const baseUrl = 'https://accounts.spotify.com/authorize';
  const clientId = '18f1dc714fe34bf3bd4c5576009db8f8';
  const responseType = 'token';
  const redirectUri = 'http://localhost:3000/dashboard';
  const scopes = 'playlist-read-private  user-read-recently-played user-library-read user-follow-read user-top-read';

  return (
    <div className="App">
      <a href={`${baseUrl}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scopes}`}>Log in to spotify</a>
      <Footer />
    </div>
  );
}

export default App;