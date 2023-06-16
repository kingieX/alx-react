import React from "react";
import { StyleSheet, css } from "aphrodite";
import holbertonLogo from '../assets/holberton_logo.jpg';
import { AppContext } from "../App/AppContext";

function Header() {
    const { user, logOut } = React.useContext(AppContext);

    return (
        <>
            <div className={css(styles["App-header"])}>
                <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
                <h1>School dashboard</h1>
            </div>

            {user.isLoggedIn && (
                <section className={css(styles.greeting)} id="logoutSection">
                    <p>Welcome <strong>{user.email}</strong> (<a href="#" onClick={logOut}>logout</a>)</p>
                </section>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    "App-header": {
        display: "flex",
        alignItems: "center",
        fontSize: "1.4rem",
        color: "#e0354b",
        borderBottom: "3px solid #e0354b",
    },

    img: {
        width: "200px",
        height: "200px",
    },

    greeting: {
        marginTop: "1em",
    },
});

export default Header;