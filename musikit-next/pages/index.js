import Footer from "../components/Footer";

export default function Login() {
  const baseUrl = "https://accounts.spotify.com/authorize";
  const clientId = "18f1dc714fe34bf3bd4c5576009db8f8";
  const responseType = "token";
  const redirectUri = "http://localhost:3000/dashboard";
  const scopes =
    "playlist-read-private user-read-recently-played user-library-read user-top-read streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state";

  return (
    <div className="App">
      <a
        href={`${baseUrl}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scopes}`}
      >
        Log in to spotify
      </a>
      <Footer />
    </div>
  );
}
