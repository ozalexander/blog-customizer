import { useEffect } from 'react';

export default function useWidenessCheck({
	containerRef,
	setWidth,
}: {
	containerRef: React.RefObject<HTMLElement>;
	setWidth: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	useEffect(() => {
		if (containerRef.current) {
			setWidth(containerRef.current?.offsetWidth > 1200);
		}
	});
}
