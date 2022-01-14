import { ReactNode, EventHandler, MouseEvent } from 'react';

export type Actions = {
	text: string,
	onClick: EventHandler<MouseEvent<HTMLButtonElement>>
}

export type CardProps = {
	className?: string,
	children?: ReactNode | ReactNode[],
	actions?: Actions[],
	image?: string
}