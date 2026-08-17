import type {PropsWithChildren} from "react";

type CounterProps = PropsWithChildren<{
    className?: string;
}>;

export default function Counter({className, children,}: CounterProps) {
    return (
        <section className={`container mx-auto my-24" ${className}`}>
            {children}
        </section>
    );
}