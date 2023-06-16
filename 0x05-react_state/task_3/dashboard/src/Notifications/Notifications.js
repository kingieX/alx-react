import React, { Component } from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
			{!this.props.displayDrawer ? (
			  <div
				className={css(styles.menuItem)}
				onClick={() => {
				  this.props.handleDisplayDrawer();
				}}
			  >
				<p>Your notifications</p>
			  </div>
			) : (
				<div className={css(styles.Notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={(e) => {
                console.log("Close button has been clicked");
                this.props.handleHideDrawer();
              }}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {this.props.listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}
            <ul>
              {this.props.listNotifications.length == 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
              {this.props.listNotifications.map((val, idx) => {
                return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={this.markNotificationAsRead} id={val.id} />;
              })}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const opacityKeyframes = {
	from: {
		opacity: 0.5,
	},
	to: {
		opacity: 1,
	},
};

const bounceKeyframes = {
	'0%': {
		transform: 'translateY(0)',
	},
	'25%': {
		transform: 'translateY(-5px)',
	},
	'75%': {
		transform: 'translateY(5px)',
	},
	'100%': {
		transform: 'translateY(0)',
	},
};

const styles = StyleSheet.create({
	notificationsContainer: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '1rem',
		marginRight: '1rem',
		gridRow: '1',
	},
	menuItem: {
		textAlign: 'right',
		marginRight: '.5rem',
	},
	hover: {
		':hover': {
			cursor: 'pointer',
			animationName: [bounceKeyframes, opacityKeyframes],
			animationDuration: '0.5s, 1s',
			animationIterationCount: '3',
		},
	},
	Notifications: {
		border: 'dashed red',
		padding: '2rem',
		marginTop: '.3rem',
	},
	noBorder: {
		'@media (max-width: 900px)': {
			border: 'none',
		},
	},
	none: {
		display: 'none',
		'@media (max-width: 900px)': {
			display: 'none',
		},
	},
	button: {
		position: 'absolute',
		top: '3.5rem',
		right: '2.2rem',
		'@media (max-width: 900px)': {
			top: '10.5rem',
			right: '14.2rem',
		},
	},
	center: {
		'@media (max-width: 900px)': {
			marginLeft: '4vw',
			fontSize: '20px',
		},
	},
	drawerOpen: {
		'@media (max-width: 900px)': {
			gridRow: '2',
		},
	},
});

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
	displayDrawer: false,
};

export default Notifications;