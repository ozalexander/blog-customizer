import { useEffect } from 'react';

export default function useCloseByOutsideClick({
	setOpen,
	containerRef,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	containerRef: React.RefObject<HTMLDivElement>;
}) {
	const handleInsideMouseDown = (e: MouseEvent) => {
		e.stopPropagation();
	};
	const handleOutsideMouseDown = () => {
		setOpen(false);
	};
	useEffect(() => {
		if (containerRef.current) {
			document.body.addEventListener('mousedown', handleOutsideMouseDown);
			containerRef.current?.addEventListener(
				'mousedown',
				handleInsideMouseDown
			);
		}
		return () => {
			document.body.removeEventListener('mousedown', handleOutsideMouseDown);
			containerRef.current?.removeEventListener(
				'mousedown',
				handleInsideMouseDown
			);
		};
	});
}
