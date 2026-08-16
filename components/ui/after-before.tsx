'use client';

import React, {
    useRef,
    useState,
    useCallback,
    useEffect,
    type PointerEvent,
    type KeyboardEvent,
} from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    initial?: number;
    className?: string;
}

export default function BeforeAfterSlider({
                                              beforeImage,
                                              afterImage,
                                              beforeLabel = 'قبل',
                                              afterLabel = 'بعد',
                                              initial = 50,
                                              className = '',
                                          }: BeforeAfterSliderProps) {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const draggingRef = useRef(false);

    const [pos, setPos] = useState(() =>
        Math.min(100, Math.max(0, initial))
    );

    const [containerWidth, setContainerWidth] = useState(0);

    /*
     * Get container width
     */
    useEffect(() => {
        const element = containerRef.current;

        if (!element) {
            return;
        }

        const updateWidth = () => {
            setContainerWidth(element.offsetWidth);
        };

        updateWidth();

        const resizeObserver = new ResizeObserver(updateWidth);

        resizeObserver.observe(element);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);


    const updateFromClientX = useCallback((clientX: number) => {
        const element = containerRef.current;

        if (!element) {
            return;
        }

        const rect = element.getBoundingClientRect();

        const distanceFromRight = rect.right - clientX;

        const ratio = (distanceFromRight / rect.width) * 100;

        setPos(Math.min(100, Math.max(0, ratio)));
    }, []);


    const onPointerDown = (
        event: PointerEvent<HTMLDivElement>
    ) => {
        draggingRef.current = true;

        event.currentTarget.setPointerCapture?.(event.pointerId);

        updateFromClientX(event.clientX);
    };


    const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (!draggingRef.current) return;

        updateFromClientX(event.clientX);
    };


    const stopDragging = () => {draggingRef.current = false;};


    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {

        if (event.key === 'ArrowLeft') {
            setPos((current) =>
                Math.min(100, current + 3)
            );
        }

        if (event.key === 'ArrowRight') {
            setPos((current) =>
                Math.max(0, current - 3)
            );
        }
    };


    useEffect(() => {

        const move = (event: MouseEvent | TouchEvent) => {

            if (!draggingRef.current) {
                return;
            }

            const clientX ='touches' in event
                    ? event.touches[0]?.clientX
                    : event.clientX;

            if (clientX === undefined) return;

            updateFromClientX(clientX);
        };

        const up = () => {
            draggingRef.current = false;
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);

        window.addEventListener('touchmove', move);
        window.addEventListener('touchend', up);

        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseup', up);

            window.removeEventListener('touchmove', move);
            window.removeEventListener('touchend', up);
        };

    }, [updateFromClientX]);

    return (
        <div
            ref={containerRef}
            className={` relative w-full select-none overflow-hidden ${className} `}
            style={{aspectRatio: '9 / 4', touchAction: 'pan-y',}}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stopDragging}
            onPointerLeave={stopDragging}
        >

            {/* Before Image */}
            <Image
                src={beforeImage}
                alt={beforeLabel}
                draggable={false}
                width={600}
                height={300}
                className={"absolute inset-0 h-full w-full object-cover pointer-events-none"}
            />

            {/* After Image */}
            <div
                className={"absolute inset-y-0 right-0 overflow-hidden pointer-events-none"}
                style={{
                    width: `${pos}%`,
                }}
            >
                <Image
                    src={afterImage}
                    alt={afterLabel}
                    draggable={false}
                    width={600}
                    height={300}
                    className={" h-full object-cover pointer-events-none "}
                    style={{width: containerWidth || '100%', maxWidth: 'none',}}
                />
            </div>

            {/* Before Label */}
            <span className={" absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white "}>
                {beforeLabel}
            </span>

            {/* After Label */}
            <span
                className={" absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white pointer-events-none transition-opacity "}
                style={{opacity: pos > 14 ? 1 : 0,}}>
                {afterLabel}
            </span>

            <div className={" absolute top-0 bottom-0 w-0.5 bg-white/90 pointer-events-none "}
                style={{right: `${pos}%`, transform: 'translateX(50%)',}}/>

            <div
                role="slider"
                tabIndex={0}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pos)}
                aria-label="مقایسه قبل و بعد"
                onKeyDown={onKeyDown}
                onPointerDown={onPointerDown}
                className={" absolute top-1/2 flex h-10 w-10  -translate-y-1/2 translate-x-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-xl ring-2 ring-white/70 focus:outline-none focus:ring-red-500"}
                style={{right: `${pos}%`,}}>
                <ChevronsLeftRight size={18} className="text-neutral-800"/>
            </div>

        </div>
    );
}