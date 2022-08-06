import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const addNotification = (msg, type) => {
	Store.addNotification({
		message: `${msg}`,
		type: `${type}`,
		container: 'top-right',
		animationIn: ['animated', 'fadeIn'],
		animationOut: ['animated', 'fadeOut'],
		dismiss: {
			duration: 4000
		}
	});
};

export default addNotification;
