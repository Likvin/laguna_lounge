import React, { useEffect, useState,useCallback } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { CarouselProps } from './types';

export const Carousel = (props: CarouselProps) => {
	const {
		className,
		images
	} = props;

	const [indexImage,setIndexImage] = useState(0)
	const handlerInterval = useCallback(()=>{
			setIndexImage(indexImage => {
				if(indexImage+1 < images.length) {
					return indexImage+1;
				} else {
					return 0;
				}
			})
		},[images]);
	
	useEffect(() => {
		const intervalId = setInterval(handlerInterval,5000)
		return () => clearInterval(intervalId)
	},[handlerInterval])

	const classNameCarousel = cn (
		styles.carousel,
		className
	)

	return (
		<div className={classNameCarousel}>
			<img className={styles.carousel__img} src={`/images/${images[indexImage]}`} alt="Not found"/>
		</div>
	)
}