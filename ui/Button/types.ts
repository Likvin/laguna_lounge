import { ReactNode, MouseEvent } from 'react';

export type ButtonProps = {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
	className?: string,
	disabled?: boolean,
	children?: ReactNode | ReactNode[],
	type?: 'button' | 'submit' | 'reset',
	variant?: 'outlined' | 'contained' | 'text'
}