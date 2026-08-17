'use client'
import {InputText} from "@/components/inputs/input-text";
import {Form, Formik, FormikHelpers, FormikValues} from "formik";
import {CarIcon, CreditCard, MailIcon, PhoneIcon, UserIcon} from "lucide-react";
import {InputSelect} from "@/components/inputs/input-select";
import {CarListItemType, PaymentConditionItemType} from "@/contracts";
import {CarList, PaymentConditionList} from "@/mocks";

export default function ConsultForm() {
    return (
        <Formik children={undefined} initialValues={undefined} onSubmit={function (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>): void | Promise<any> {
            throw new Error("Function not implemented.");
        }}>
            <Form>
                <div className={'space-y-6'}>
                    <div className={'grid gap-6 sm:grid-cols-2'}>
                        <InputText name={"name"} label={'نام و نام خانوادگی'} icon={UserIcon}/>
                        <InputText name={"phone"} label={'تلفن'} icon={PhoneIcon} type={'tel'} inputMode={'tel'}/>
                    </div>
                    <InputText name={"email"} label={'ایمیل'} icon={MailIcon} type={'email'} />
                    <InputSelect name={"type"} label={'انتخاب خوردرو'} icon={CarIcon}>
                        <option value="" selected disabled>انتخاب کنید ...</option>
                        {
                            CarList.map((item: CarListItemType) =>
                                <option key={item.id} value={item.value}>{item.label}</option>)
                        }
                    </InputSelect>

                    <InputSelect name={"condition"} label={'شراایط پرداخت'} icon={CreditCard}>
                        <option value="" selected disabled>انتخاب کنید ...</option>
                        {
                            PaymentConditionList.map((item: PaymentConditionItemType) =>
                                <option key={item.id} value={item.value}>{item.label}</option>)
                        }
                    </InputSelect>

                </div>
            </Form>
        </Formik>
    );

}