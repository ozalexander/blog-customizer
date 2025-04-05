import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { useState, useRef } from 'react';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import useCloseByOutsideClick from '../../hooks/useCloseByOutsideClick';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	defaultArticleState,
	type ArticleStateType,
	type OptionType,
} from 'src/constants/articleProps';

export const ArticleParamsForm = ({
	setArticleState,
}: {
	setArticleState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isOpen, setOpen] = useState(false);
	const [tempState, setTempState] = useState(defaultArticleState);
	useCloseByOutsideClick({
		setOpen,
		containerRef,
	});
	const handleOnChange = (field: keyof ArticleStateType) => {
		return (value: OptionType) => {
			setTempState((prevState) => ({ ...prevState, [field]: value }));
		};
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		setArticleState(tempState);
		e.preventDefault();
		setOpen(false);
	};
	const onReset = () => {
		setArticleState(defaultArticleState);
		setOpen(false);
	};
	return (
		<>
			<ArrowButton isOpen={isOpen} setOpen={setOpen} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}
				ref={containerRef}>
				<form className={styles.form} onSubmit={onSubmit} onReset={onReset}>
					<h1 className={styles.title}>Задайте параметры</h1>
					<Select
						options={fontFamilyOptions}
						selected={tempState.fontFamilyOption}
						onChange={handleOnChange('fontFamilyOption')}
						title='Шрифт'
					/>
					<RadioGroup
						name='FontSize'
						options={fontSizeOptions}
						selected={tempState.fontSizeOption}
						onChange={handleOnChange('fontSizeOption')}
						title='Размер шрифта'
					/>
					<Select
						options={fontColors}
						selected={tempState.fontColor}
						onChange={handleOnChange('fontColor')}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={tempState.backgroundColor}
						onChange={handleOnChange('backgroundColor')}
						title='Цвет фона'
					/>
					<Select
						options={contentWidthArr}
						selected={tempState.contentWidth}
						onChange={handleOnChange('contentWidth')}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
