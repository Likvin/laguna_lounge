import { ReactNode, MouseEvent } from 'react';
import { Colors } from '../types';

export type ButtonProps = {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
	className?: string,
	disabled?: boolean,
	children?: ReactNode | ReactNode[],
	type?: 'button' | 'submit' | 'reset',
	variant?: 'outlined' | 'contained' | 'text',
	color?: Colors
}