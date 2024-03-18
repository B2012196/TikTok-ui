import ReactPlayer from 'react-player';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const AccountVideo = () => {
    return (
        <div className={cx('account-item')}>
            <div className={cx('account-info')}>
                <img
                    className={cx('avatar')}
                    alt=""
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1710914400&x-signature=wtSiwUHknMuvGpEGLiRgNquOK0Y%3D"
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>Quoc nguyen</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Quoc nguyen</p>
                </div>
            </div>
            <div className="player-wrapper">
                <ReactPlayer
                    className="react-player"
                    // url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    url="https://i.vimeocdn.com/video/1553950297-d018034b3b955f4dd3d44c719062d84e6e8b849d55bbd6931c2e2408ae4cdb63-d?mw=800&mh=450
                    "
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </div>
        </div>
    );
};

export default AccountVideo;
