import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseACtionTypes';
import uiReducer from './uiReducer';

describe('A tests for uiReducer', () => {
	const defaultState = {
		isNotificationDrawerVisible: false,
		isUserLoggedIn: false,
		user: {},
	};

	it('return initial state when no action is passed', () => {
		expect(uiReducer(defaultState, 'null')).toEqual(defaultState);
	});

	it('return initial state when wrong action is passed', () => {
		expect(uiReducer(defaultState, { type: SELECT_COURSE })).toEqual(
			defaultState
		);
	});

	it('when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
		expect(
			uiReducer(defaultState, { type: DISPLAY_NOTIFICATION_DRAWER })
		).toEqual({ ...defaultState, isNotificationDrawerVisible: true });
	});
});
