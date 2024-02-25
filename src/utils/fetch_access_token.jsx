export default async function fetchAccessToken() {

    const clientId = import.meta.env.VITE_API_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET;
    const params = new URLSearchParams();

    params.append("client_id",clientId);
    params.append("grant_type", "client_credentials");
    params.append("client_secret",clientSecret);
    params.append("redirect_uri", "http://localhost:5173/");

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
    });

    const {access_token} = await result.json();
    console.log(access_token)
    return access_token;
}