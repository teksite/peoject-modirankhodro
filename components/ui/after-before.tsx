'use client'

import React, { useRef, useState, useCallback, useEffect } from "react";
import { ChevronsLeftRight } from "lucide-react";
import Image from "next/image";

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
                                              beforeLabel = "قبل",
                                              afterLabel = "بعد",
                                              initial = 50,
                                              className = "",
                                          }:BeforeAfterSliderProps) {
    const containerRef = useRef(null);
    const draggingRef = useRef(false);
    const [pos, setPos] = useState(initial); // 0 -> 100 (%)
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const update = () => setContainerWidth(el.offsetWidth);
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const updateFromClientX = useCallback((clientX: number) => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const ratio = ((clientX - rect.left) / rect.width) * 100;
        setPos(Math.min(100, Math.max(0, ratio)));
    }, []);

    const onPointerDown = (e) => {
        draggingRef.current = true;
        e.currentTarget.setPointerCapture?.(e.pointerId);
        updateFromClientX(e.clientX);
    };

    const onPointerMove = (e: { clientX: number; }) => {
        if (!draggingRef.current) return;
        updateFromClientX(e.clientX);
    };

    const stopDragging = () => {
        draggingRef.current = false;
    };

    // Keyboard accessibility (left/right arrow keys move the handle)
    const onKeyDown = (e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 3));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 3));
    };

    // Fallback: also listen on window while dragging, in case pointer leaves the element fast
    useEffect(() => {
        const move = (e) => {
            if (!draggingRef.current) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            updateFromClientX(clientX);
        };
        const up = () => stopDragging();
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);
        window.addEventListener("touchmove", move);
        window.addEventListener("touchend", up);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", up);
            window.removeEventListener("touchmove", move);
            window.removeEventListener("touchend", up);
        };
    }, [updateFromClientX]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full select-none overflow-hidden ${className}`}
            style={{ aspectRatio: "9 / 4", touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stopDragging}
            onPointerLeave={stopDragging}
        >
            {/* Base layer: BEFORE image, fills the whole box */}
            <Image
                src={beforeImage}
                alt={beforeLabel}
                draggable={false}
                width={600}
                height={300}
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            />

            {/* Top layer: AFTER image, clipped to the handle position */}
            <div
                className="absolute inset-0 h-full overflow-hidden pointer-events-none"
                style={{ width: `${pos}%` }}
            >
                <Image
                    src={afterImage}
                    alt={afterLabel}
                    draggable={false}
                    width={600}
                    height={300}
                    className="h-full object-cover pointer-events-none"
                    style={{
                        width: containerWidth || "100%",
                        maxWidth: "none",
                    }}
                />
            </div>

            {/* Labels */}
            <span className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white">
        {beforeLabel}
      </span>
            <span
                className="absolute top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white pointer-events-none transition-opacity"
                style={{ right: 12, opacity: pos > 14 ? 1 : 0 }}
            >
        {afterLabel}
      </span>

            {/* Divider line */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white/90 pointer-events-none"
                style={{ right: `${pos}%`, transform: "translateX(-50%)" }}
            />

            {/* Drag handle */}
            <div
                role="slider"
                tabIndex={0}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pos)}
                aria-label="مقایسه قبل و بعد"
                onKeyDown={onKeyDown}
                onPointerDown={onPointerDown}
                className="absolute top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-xl ring-2 ring-white/70 focus:outline-none focus:ring-red-500"
                style={{ right: `${pos}%` }}
            >
                <ChevronsLeftRight size={18} className="text-neutral-800" />
            </div>
        </div>
    );
}