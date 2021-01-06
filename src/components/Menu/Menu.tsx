import React, { HTMLAttributes } from 'react';
import styles from './menu.module.css';

export interface MenuProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
}

export interface MenuItemProps extends MenuProp {
  type?: 'base' | 'danger'
}

const MenuItem = ({
  className,
  type = 'base',
  ...rest
}: MenuItemProps) => {
  const classNames = `${className || ''} ${styles.item} ${type === 'danger' ? styles['item--danger'] : ''}`;
  return (
    <div className={classNames} {...rest} />
  );
};

const MenuDelimiter = () => <div className={styles.delimiter} />;

const MenuComponent = ({
  className,
  ...rest
}: MenuProp) => (
  <div className={`${className || ''} ${styles.menu}`} {...rest} />
);

MenuComponent.Item = MenuItem;
MenuComponent.Delimiter = MenuDelimiter;

export const Menu = MenuComponent;
