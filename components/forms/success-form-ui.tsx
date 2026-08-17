export default function SuccessForm() {
    return (
        <>
            <style jsx>{`
                .success-circle {
                    stroke: #22c55e;
                    stroke-width: 4;
                    stroke-dasharray: 283;
                    stroke-dashoffset: 283;
                    animation: circle 0.7s ease-out forwards;
                }

                .success-check {
                    stroke: #22c55e;
                    stroke-width: 5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-dasharray: 60;
                    stroke-dashoffset: 60;
                    animation: check 0.5s 0.6s ease-out forwards;
                }

                .success-icon {
                    animation: scale 0.5s ease-out;
                }

                @keyframes circle {
                    to {
                        stroke-dashoffset: 0;
                    }
                }

                @keyframes check {
                    to {
                        stroke-dashoffset: 0;
                    }
                }

                @keyframes scale {
                    0% {
                        opacity: 0;
                        transform: scale(0.5);
                    }

                    70% {
                        transform: scale(1.08);
                    }

                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
            <div
                className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    py-16
                    px-6
                    text-center
                "
            >
                <div className="success-icon mb-6">
                    <svg
                        viewBox="0 0 100 100"
                        className="h-28 w-28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            className="success-circle"
                        />

                        <path
                            d="M30 51L43 64L71 36"
                            className="success-check"
                        />
                    </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                    درخواست شما با موفقیت ارسال شد
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
                    اطلاعات شما با موفقیت ثبت شد.
                </p>
            </div>
        </>
    );

}