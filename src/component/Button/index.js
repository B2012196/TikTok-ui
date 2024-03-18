import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    children,
    primary,
    text,
    small,
    large,
    onClick,
    outline,
    className,
    icon,
    ...passProps
}) => {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: classNames,
        primary,
        outline,
        small,
        large,
        text,
    });

    return (
        <Comp className={classes} {...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span>{children}</span>
        </Comp>
    );
};

export default Button;
