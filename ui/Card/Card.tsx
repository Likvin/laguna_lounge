import React from 'react';
import { CardProps } from './types';
import { Button } from '../Button';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Card = (props: CardProps) => {
	const {
		actions,
		children,
		className,
		image,
		header
	} = props;

	const classNameCard = cn(
		styles.card,
		className
	)

	return (
		<div className={classNameCard}>
			{header && 
				<div className={styles.card__header}>
					{header}
				</div>
			}
			{image && <img src={`/images/${image}`} alt="Not found" className={styles.card__image} />  }
			<div className={styles.card__content}>
				{children}
			</div>
			{actions && 
				<div className={styles.card__actions}>
					{actions.map((action,index) => (
						<Button key={index} onClick={action.onClick} variant="text" color="secondary">{action.title}</Button>						
					))}
				</div> 
			}
		</div>
	)

}