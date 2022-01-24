import { ButtonProps } from './types';
import { useState, MouseEvent } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Button = (props: ButtonProps) => {
	const {
		children,
		className,
		disabled = false,
		variant = 'contained',
		color = 'primary',
		onClick,
		type
	} = props;

	const [hover,setHover] = useState(false);
	const handlerMouseEnter = () => {setHover(true)};
	const handlerMouseLeave = () => {setHover(false);}
	const classNameButton = cn(
		styles.button,
		styles['button_' + variant],
		styles['button_' + color],
		{
			[styles.button_hover]: hover,
			[styles.button_disabled]: disabled
		},
		className
	);

	const handlerClick = (event:MouseEvent<HTMLButtonElement>) => {
		if(!disabled) {
			onClick?.(event);
		}
	}

	return(
		<button type={type} className = {classNameButton} onMouseEnter = {handlerMouseEnter}  onMouseLeave = {handlerMouseLeave} onClick = {handlerClick}>
			{children}
		</button>
	)
}