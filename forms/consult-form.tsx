'use client'

import FormWrapper from "@/components/forms/form-wrapper";
import ConsultFormUi from "@/components/forms/consult-form-ui";
import * as Yup from 'yup';
import {
    CarList,
    ConsultTimeList,
    PaymentConditionList
} from "@/mocks";
import {submitConsult} from "@/services/sendApi";
import {FormikHelpers} from "formik";
import {useState} from "react";
import SuccessForm from "@/components/forms/success-form-ui";

export interface RegisterConsultFormDataType {
    name?: string
    phone?: string | number
    email?: string
    condition?: string
    time?: string
    type?: string
}

export const RegisterConsultFormSchema = Yup.object({
    name: Yup.string()
        .trim()
        .required('نام الزامی است')
        .min(2, 'نام باید حداقل ۲ کاراکتر باشد')
        .max(150),

    phone: Yup.string()
        .trim()
        .required('شماره موبایل الزامی است')
        .matches(
            /^09\d{9}$/,
            'شماره موبایل معتبر نیست'
        ),

    email: Yup.string()
        .trim()
        .email('ایمیل معتبر نیست')
        .nullable()
        .notRequired(),

    condition: Yup.string()
        .oneOf(
            PaymentConditionList.map(item => item.value),
            'شرایط خرید را انتخاب کنید'
        )
        .required('شرایط خرید الزامی است'),

    time: Yup.string()
        .oneOf(
            ConsultTimeList.map(item => item.value),
            'زمان تماس را انتخاب کنید'
        )
        .required('زمان تماس الزامی است'),

    type: Yup.string()
        .oneOf(
            CarList.map(item => item.value),
            'مدل خودرو را انتخاب کنید'
        )
        .required('مدل خودرو الزامی است'),
})

const initialValues: RegisterConsultFormDataType = {
    name: '',
    phone: '',
    email: '',
    condition: '',
    time: '',
    type: '',
}

type SubmitStatus = 'idle' | 'success' | 'error'

export default function ConsultForm() {
    const [status, setStatus] = useState<SubmitStatus>('idle')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (
        values: RegisterConsultFormDataType,
        {
            setSubmitting,
            resetForm,
        }: FormikHelpers<RegisterConsultFormDataType>
    ) => {
        setLoading(true)
        setStatus('idle')
        setErrorMessage('')

        try {
            await submitConsult(values)

            resetForm()
            setStatus('success')
        } catch (error) {
            console.error(error)

            setStatus('error')

            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'در ارسال فرم مشکلی پیش آمد. لطفاً دوباره تلاش کنید.'
            )
        } finally {
            setSubmitting(false)
            setLoading(false)
        }
    }

    return (
        <>
            <FormWrapper
                loading={loading}
                form={<ConsultFormUi/>}
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={RegisterConsultFormSchema}
            />

            {status === 'success' && (
                <div className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-600">
                    فرم با موفقیت ارسال شد، منتظر همکاران ما باشید.
                </div>
            )}

            {status === 'error' && (
                <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                    {errorMessage}
                </div>
            )}
        </>
    )
}