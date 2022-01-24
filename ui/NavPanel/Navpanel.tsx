import React from 'react';
import { NavpanelProps } from './types';
import styles from './styles.module.scss';
import cn from 'classnames';
import { GiBlackSea } from 'react-icons/gi';

export const Navpanel = (props: NavpanelProps) => {
	const {
		children,
		className,
		name
	} = props;

	const classNameNavPanel = cn (
		styles.navpanel,
		className
	)

	return (
		<header className={classNameNavPanel}>
			<div>
				<a className={styles.title}>
					<GiBlackSea  size ="45px" color="#1769aa"/>
					{name}
				</a>
			</div>
		</header>
	) 

}