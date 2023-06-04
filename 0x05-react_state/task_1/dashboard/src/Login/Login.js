import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
	const [isLogged, setIsLogged] = React.useState(false);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [enableSubmit, setEnableSubmit] = React.useState(false);

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLogged(true);
	};

	React.useEffect(() => {
		if (email.length > 0 && password.length > 0) {
			setEnableSubmit(true);
		} else {
			if (enableSubmit === true) {
				setEnableSubmit(false);
			}
		}
	}, [email, password, enableSubmit]);

    return (
        <React.Fragment>
            <div className={css(styles["App-body"])}>
                <p>Login to access the full dashboard</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" className={css(styles.input)} value={email} onChange={handleEmail} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" className={css(styles.input)} value={password} onChange={handlePassword} />
                    <input type="submit" value="OK" disabled={!enableSubmit} />
                </form>
            </div>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    'App-body': {
		fontSize: '1.4rem',
		padding: '1.2em',
		height: '45%',
	},

	'form-inputs': {
		display: 'flex',
		gap: '2em',
		alignItems: 'center',
	},

	mobile: {
		'@media (max-width: 375px)': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: '0.5em',
		},
	},

	input: {
		height: '1.4rem',
		marginLeft: '10px',
	},
});

export default Login;