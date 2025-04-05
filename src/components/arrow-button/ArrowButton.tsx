import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = ({
	isOpen,
	setOpen,
}: {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div
			onMouseDown={(e) => e.stopPropagation()}
			onClick={() => setOpen(!isOpen)}
			onKeyUp={(e) => {
				if (e.key === 'Enter') {
					setOpen(!isOpen);
				}
			}}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, { [styles.container_open]: isOpen })}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
			/>
		</div>
	);
};
