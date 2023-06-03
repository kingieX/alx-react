import React from "react";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";
import propTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.markAsRead = this.markAsRead.bind(this);
	}
  
	markAsRead(id) {
	  console.log(`Notification ${id} has been marked as read`);
	}
  
	render() {
		return (
			<React.Fragment>
				{displayDrawer ? (
					<div className='flex-area'>
						<div className='menuItem'>
							<p>Your notifications</p>
						</div>
						<div className='Notifications'>
							<ul>
								{listNotifications && listNotifications.length > 0 ? (
									listNotifications.map(({ id, html, type, value }) => (
										<NotificationItem
											key={id}
											type={type}
											value={value}
											html={html}
										/>
									))
								) : (
									<div className='notification-header'>
										<NotificationItem value='No new notification for now' />
										<button
											aria-label='Close'
											onClick={console.log('Close button has been clicked')}
										>
											<img
												style={{ display: 'inline' }}
												src={closeIcon}
												alt='Close'
											/>
										</button>
									</div>
								)}
							</ul>
						</div>
					</div>
				) : (
					<div className='menuItem'>
						<p>Your notifications</p>
					</div>
				)}
			</React.Fragment>
		);
	};
}
  
Notifications.propTypes = {
    displayDrawer: propTypes.bool.isRequired,
    listNotifications: propTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;