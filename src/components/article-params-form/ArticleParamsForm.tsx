import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
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
	setState,
}: {
	setState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
}) => {
	const [isOpen, setOpen] = useState(false);
	const [selectedFont, setFont] = useState<OptionType>(fontFamilyOptions[0]);
	const [selectedFontSize, setFontSize] = useState<OptionType>(
		fontSizeOptions[0]
	);
	const [selectedFontColor, setFontColor] = useState<OptionType>(fontColors[0]);
	const [selectedBackgroundColor, setBackgroundColor] = useState<OptionType>(
		backgroundColors[0]
	);
	const [selectedWidth, setWidth] = useState<OptionType>(contentWidthArr[0]);
	const onChange = (
		selectedOption: OptionType,
		setter: React.Dispatch<React.SetStateAction<OptionType>>,
		props?: OptionType[]
	) => {
		setter(selectedOption);
		props?.map((option) => {
			if (selectedOption.value === option.value) {
				option.isDisabled = true;
			}
		});
	};
	useEffect(() => {
		fontColors.map((option: OptionType) => {
			option.isDisabled = false;
		});
	}, [selectedFontColor]);
	useEffect(() => {
		backgroundColors.map((option: OptionType) => {
			option.isDisabled = false;
		});
	}, [selectedBackgroundColor]);
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setState({
			fontFamilyOption: selectedFont,
			fontSizeOption: selectedFontSize,
			fontColor: selectedFontColor,
			backgroundColor: selectedBackgroundColor,
			contentWidth: selectedWidth,
		});
		setOpen(false);
	};
	const onReset = () => {
		setFont(defaultArticleState.fontFamilyOption);
		setFontSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setWidth(defaultArticleState.contentWidth);
		setState(defaultArticleState);
		setOpen(false);
	};
	return (
		<>
			<ArrowButton isOpen={isOpen} setOpen={setOpen} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={onSubmit} onReset={onReset}>
					<h1 className={styles.title}>Задайте параметры</h1>
					<Select
						options={fontFamilyOptions}
						selected={selectedFont}
						onChange={(e) => onChange(e, setFont)}
						title='Шрифт'
					/>
					<RadioGroup
						name='FontSize'
						options={fontSizeOptions}
						selected={selectedFontSize}
						onChange={(e) => setFontSize(e)}
						title='Размер шрифта'
					/>
					<Select
						options={fontColors}
						selected={selectedFontColor}
						onChange={(e) => onChange(e, setFontColor, backgroundColors)}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={selectedBackgroundColor}
						onChange={(e) => onChange(e, setBackgroundColor, fontColors)}
						title='Цвет фона'
					/>
					<Select
						options={contentWidthArr}
						selected={selectedWidth}
						onChange={(e) => onChange(e, setWidth)}
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
