'use client'

import {Form, Formik, FormikConfig, FormikValues} from 'formik'
import {ReactNode} from 'react'

interface FormWrapperProps<T extends FormikValues>
    extends Omit<FormikConfig<T>, 'children'> {
    form: ReactNode
}

export default function FormWrapper<T extends FormikValues>(
    {
        form,
        initialValues,
        onSubmit,
        validationSchema,
    }: FormWrapperProps<T>) {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
               <div className={'space-y-6'}>
                   {form}
                   <button type="submit" className={'bg-red-900 text-white text-sm font-bold px-3 py-2 w-full rounded-xl block text-center'}>
                       ثبت نام
                   </button>
               </div>
            </Form>
        </Formik>
    )
}