import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';

import clsx from 'clsx';

import { useState } from 'react';

import { Select } from 'components/select';

import type { OptionType } from 'src/constants/articleProps';

import { RadioGroup } from 'components/radio-group';

import { Separator } from 'components/separator';

export const ArticleParamsForm = () => {
	const FONT_OPTIONS = [
		{ title: 'Open Sans', value: 'Open Sans', className: 'open-sans' },
		{ title: 'Ubuntu', value: 'Ubuntu', className: 'ubuntu' },
		{
			title: 'Cormorant Garamond',
			value: 'Cormorant Garamond',
			className: 'cormorant-garamond',
		},
		{ title: 'Days One', value: 'Days One', className: 'days-one' },
		{ title: 'Merriweather', value: 'Merriweather', className: 'merriweather' },
	];
	const COLOR_OPTIONS = [
		{ title: 'Чёрный', value: 'black', className: 'black' },
		{ title: 'Белый', value: 'white', className: 'white' },
		{ title: 'Серый', value: 'gray', className: 'gray' },
		{ title: 'Розовый', value: 'pink', className: 'pink' },
		{ title: 'Ярко-розовый', value: 'hotpink', className: 'hotpink' },
		{ title: 'Жёлтый', value: 'yellow', className: 'yellow' },
		{ title: 'Зелёный', value: 'green', className: 'green' },
		{ title: 'Голубой', value: 'blue', className: 'blue' },
		{ title: 'Фиолетовый', value: 'purple', className: 'purple' },
	];
	const SIZE_OPTIONS = [
		{ title: '18', value: 'Open Sans', className: 'open-sans' },
		{ title: '25', value: 'Open Sans', className: 'open-sans' },
		{ title: '38', value: 'Open Sans', className: 'open-sans' },
	];
	const WIDTH_OPTIONS = [
		{ title: 'Широкий', value: 'wide', className: 'wide' },
		{ title: 'Узкий', value: 'narrow', className: 'narrow' },
	];
	const [isOpen, setOpen] = useState(false);
	const [selectedFont, setFont] = useState<OptionType>(FONT_OPTIONS[0]);
	const [selectedFontSize, setFontSize] = useState<OptionType>({
		value: 'Open Sans',
		title: '18',
		className: 'open-sans',
	});
	const [selectedFontColor, setFontColor] = useState<OptionType>(
		COLOR_OPTIONS[0]
	);
	const [selectedBackgroundColor, setBackgroundColor] = useState<OptionType>(
		COLOR_OPTIONS[0]
	);
	const [selectedWidth, setWidth] = useState<OptionType>(SIZE_OPTIONS[0]);
	const onChange = (
		selectedOption: OptionType,
		setter: React.Dispatch<React.SetStateAction<OptionType>>
	) => {
		setter(selectedOption);
	};
	return (
		<>
			<ArrowButton isOpen={isOpen} setOpen={setOpen} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<Select
						options={FONT_OPTIONS}
						placeholder='Выберите шрифт'
						selected={selectedFont}
						onChange={(e) => onChange(e, setFont)}
						title='Шрифты'
					/>
					<RadioGroup
						name='Размер шрифта'
						options={SIZE_OPTIONS}
						selected={selectedFontSize}
						onChange={(e) => onChange(e, setFontSize)}
						title='Размер шрифта'
					/>
					<Select
						options={COLOR_OPTIONS}
						placeholder='Выберите шрифт'
						selected={selectedFontColor}
						onChange={(e) => onChange(e, setFontColor)}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						options={COLOR_OPTIONS}
						placeholder='Выберите шрифт'
						selected={selectedBackgroundColor}
						onChange={(e) => onChange(e, setBackgroundColor)}
						title='Цвет фона'
					/>
					<Select
						options={WIDTH_OPTIONS}
						placeholder='Выберите шрифт'
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
