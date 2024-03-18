import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccounts from '~/component/SuggestedAccounts';
const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<FontAwesomeIcon icon={faHome} />} />
                <MenuItem title="Following" to={config.routes.following} icon={<FontAwesomeIcon icon={faUser} />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<FontAwesomeIcon icon={faVideo} />} />
            </Menu>
            <SuggestedAccounts label="Suggested Account" />
            <SuggestedAccounts label="Following Account" />
        </aside>
    );
};

export default Sidebar;
