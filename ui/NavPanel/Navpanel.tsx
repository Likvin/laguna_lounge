import React from 'react';
import { NavpanelProps } from './types';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Navpanel = (props: NavpanelProps) => {
	const {
		children,
		className,
		name,
		icon
	} = props;

	const classNameNavPanel = cn (
		styles.navpanel,
		className
	)

	return (
		<header className={classNameNavPanel}>
			<div>
				<a className={styles.title}>
					{icon}
					{name}
				</a>
			</div>
		</header>
	) 

}