import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRightToBracket,
    faEllipsisVertical,
    faEarthAsia,
    faComment,
    faCloudArrowUp,
    faMessage,
    faUser,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import { Fragment } from 'react';
import Button from '~/component/Button';
import Menu from '~/component/Popper/menu';
import React from 'react';
import 'tippy.js/dist/tippy.css';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Vietnam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faComment} />,
        title: 'Feedback',
        to: '',
    },
];
const cx = classNames.bind(styles);
const currentUser = false;
const Header = () => {
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get coins',
            to: '',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '',
        },
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <Fragment>
                            <Tippy content="upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button to="/upload" text>
                                Upload
                            </Button>
                            <Button to="/login" primary icon={<FontAwesomeIcon icon={faRightToBracket} />}>
                                Log in
                            </Button>
                        </Fragment>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <img
                                alt="Nguyen Van A"
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9371228b72a2a3585d7105534a7bf293~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1710687600&x-signature=DL5k4WTJNNutwVZgVEDf99KlruA%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
