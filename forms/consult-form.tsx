'use client'

import FormWrapper from "@/components/forms/form-wrapper";
import ConsultFormUi from "@/components/forms/consult-form-ui";
import * as Yup from 'yup';
import {CarList, ConsultTimeList, PaymentConditionList} from "@/mocks";

export interface RegisterConsultFormDataType {
    name?: string,
    phone?: string | number,
    email?: string,
    condition?: string,
    time?: string,
    type?: string,

}

export const RegisterConsultFormSchema = Yup.object({
    name: Yup.string().trim().required('نام الزامی است').min(2, 'نام باید حداقل ۲ کاراکتر باشد').max(150),
    phone: Yup.string().trim().required('شماره موبایل الزامی است').matches(/^09\d{9}$/, 'شماره موبایل معتبر نیست'),
    email: Yup.string().trim().email('ایمیل معتبر نیست').nullable().notRequired(),

    condition: Yup.string().oneOf(PaymentConditionList.map(item => item.value), 'شرایط خرید را انتخاب کنید').required('شرایط خرید الزامی است'),
    time: Yup.string().oneOf(ConsultTimeList.map(item => item.value), 'زمان تماس را انتخاب کنید').required('زمان تماس الزامی است'),
    type: Yup.string().oneOf(CarList.map(item => item.value), 'مدل خودرو را انتخاب کنید').required('مدل خودرو الزامی است'),
})

const initialValues: RegisterConsultFormDataType = {
    name: '',
    phone: '',
    email: '',
    condition: '',
    time: '',
    type: '',
}

const onSubmit = (form: RegisterConsultFormDataType) => {

}

export default function ConsultForm() {
    return (
        <FormWrapper form={<ConsultFormUi />} initialValues={initialValues} onSubmit={onSubmit}/>
    );
}
