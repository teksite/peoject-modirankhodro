"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    { start: 0, value: 1000, label: "تحویل خودرو در ماه", prefix: "+" },
    { start: 0, value: 1, label: "رتبه فروش کشوری", prefix: "" },
    { start: 0, value: 7, label: "شعب و کارشو فعال", prefix: "" },
];

function Counter({
                     start,
                     value,
                     duration = 2000,
                 }: {
    start: number;
    value: number;
    duration?: number;
}) {
    const [count, setCount] = useState(start);
    const ref = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;

        let animationFrame: number;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            // easeOut
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            const currentValue = Math.floor(
                start + (value - start) * easedProgress
            );

            setCount(currentValue);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [started, start, value, duration]);

    return <div ref={ref}>{count.toLocaleString("fa-IR")}</div>;
}

export default function CounterSection() {
    return (
        <section className="border border-slate-300 px-6 py-3 rounded-2xl">
            <div className="glass grid grid-cols-3 gap-6 rounded-xl p-6 sm:p-8">
                {stats.map((s) => (
                    <div key={s.label} className="text-center">
                        <div className="flex items-center justify-center text-2xl font-black sm:text-3xl">
                            <Counter
                                start={s.start}
                                value={s.value}
                            />
                            {s.prefix}
                        </div>

                        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                            {s.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}