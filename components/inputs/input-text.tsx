import {ComponentProps} from "react";
import {ErrorMessage, Field} from "formik";
import clsx from "clsx";

interface Props extends ComponentProps<"input"> {
    name: string;
    label?: string;
}

export function InputText({name, label, id, className, type = "text", ...rest}: Props) {
    const inputId = id ?? name.replace(/\s+/g, "_");

    return (
        <div data-editor-id={inputId}>
            {label && (
                <label htmlFor={inputId} className="mb-2 inline-block text-sm font-medium text-slate-900 dark:text-slate-50">{label}</label>
            )}

            <Field as="input" id={inputId} type={type} name={name} {...rest}
                   className={clsx(
                       "w-full rounded-md bg-white px-3 py-2.5 text-sm text-slate-900",
                       "outline-1 -outline-offset-1 outline-slate-300",
                       "focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600",
                       "dark:bg-neutral-700 dark:text-slate-50 dark:outline-neutral-600",
                       className
                   )}/>
            <ErrorMessage name={name} component="div" className="mt-1 rounded-sm bg-red-50 text-xs font-bold text-red-600 px-2 py-1"/>
        </div>
    );
}