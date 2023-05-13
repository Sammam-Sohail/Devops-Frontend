import React from 'react'
import { useLocation, Link, useHistory } from 'react-router-dom'

export default function HomePage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('id');
    const history = useHistory();


    window.addEventListener("popstate", () => {
        history.go(1);
      });

    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app {name}</h1>
            <footer style={{textAlign: 'center', marginTop: 15}}>
                <p><Link to="/">Logout</Link>.</p>
            </footer>
        </div>
    )
}
