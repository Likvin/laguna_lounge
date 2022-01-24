import { ReactNode, EventHandler, MouseEvent } from 'react';

export type CardAction = {
	onClick:() => void,
	title: string
}

export type CardProps = {
	className?: string,
	children?: ReactNode | ReactNode[],
	image?: string,
	header?: string,
	onClick?: EventHandler<MouseEvent<HTMLButtonElement>>,
	actions?: CardAction[],
}