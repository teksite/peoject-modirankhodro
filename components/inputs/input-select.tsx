'use client'
import {ComponentProps, ReactNode} from 'react'
import {ErrorMessage, Field} from 'formik'
import clsx from 'clsx'
import {LucideIcon} from 'lucide-react'
import RequiredMark from "@/components/inputs/required-mark";

type IconPosition = 'left' | 'right'
type LabelPosition = 'top' | 'left'
type SelectSize = 'sm' | 'md' | 'lg' | 'xl'

interface Props extends ComponentProps<'select'> {
    name: string
    label?: ReactNode
    icon?: LucideIcon
    iconPosition?: IconPosition
    iconSize?: string
    labelPosition?: LabelPosition
    selectSize?: SelectSize
    showRequiredIndicator?: boolean
    containerClassName?: string
    labelClassName?: string
    iconClassName?: string
    selectClassName?: string
    errorClassName?: string
}

const selectSizes: Record<SelectSize, string> = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-3 py-2.5 text-sm',
    lg: 'px-4 py-3 text-base',
    xl: 'px-5 py-3.5 text-lg',
}

export function InputSelect({
                                name,
                                label,
                                id,
                                className,
                                icon,
                                iconPosition = 'right',
                                iconSize = 'w-5 h-5',
                                labelPosition = 'top',
                                selectSize = 'md',
                                showRequiredIndicator = false,
                                containerClassName,
                                labelClassName,
                                iconClassName,
                                selectClassName,
                                errorClassName,
                                required,
                                ...rest
                            }: Props) {

    const selectId = id ?? name.replace(/\s+/g, '_')
    const hasIcon = Boolean(icon)
    const Icon = icon
    const isRequired = required || showRequiredIndicator
    return (
        <div data-editor-id={selectId}
             className={clsx(
                 'w-full',
                 labelPosition === 'left' && ['flex', 'items-start', 'gap-4',],
                 containerClassName)}>
            {label && (
                <label htmlFor={selectId}
                       className={clsx('label_input',
                           labelPosition === 'top' && ['mb-2', 'inline-block',],
                           labelPosition === 'left' && ['pt-2.5', 'shrink-0',], labelClassName)}>
                    {label} {isRequired && ( <RequiredMark />)}
                </label>)}
            <div className={clsx('w-full', labelPosition === 'left' && 'flex-1')}>
                <div className="relative">
                    {Icon && (
                        <Icon aria-hidden="true" strokeWidth={2}
                              className={clsx(
                                  'pointer-events-none', 'absolute', 'top-1/2', '-translate-y-1/2', 'z-10', 'text-slate-400',
                                  iconPosition === 'right' ? 'right-3' : 'left-3',
                                  iconSize, iconClassName)}/>
                    )}

                    <Field as="select" id={selectId} name={name} required={required} {...rest}
                           className={clsx(
                               'input',
                               selectSizes[selectSize],
                               hasIcon && iconPosition === 'right' && 'pr-11',
                               hasIcon && iconPosition === 'left' && 'pl-11',
                               'appearance-none', 'pr-10',
                               className, selectClassName)}/>
                </div>
                <ErrorMessage name={name} component="div" className={clsx('mt-1', 'error_message', errorClassName)}/>
            </div>
        </div>
    )
}