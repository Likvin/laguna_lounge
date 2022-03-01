import React, { useState, useEffect} from 'react';
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

	const [transparent,setTransparent] = useState(true);
	const watchScroll = () => {
		const handlerScroll =  () => {
			if (window.scrollY > 0) {
				setTransparent(false);
			}else {
				setTransparent(true);
			}
		};
		window.addEventListener('scroll',handlerScroll);
		return () => {
			window.removeEventListener('scroll', handlerScroll)
		}
	};

	useEffect(watchScroll, []);
	
	const classNameNavPanel = cn (
		styles.navpanel,
		{
			[styles.navpanel_transparent]:transparent
		},
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