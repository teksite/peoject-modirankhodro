'use client'
import {InputText} from "@/components/inputs/input-text";
import {CarIcon, CreditCard, MailIcon, PhoneIcon, UserIcon} from "lucide-react";
import {InputSelect} from "@/components/inputs/input-select";
import {CarListItemType, ConsultTimeItemType, PaymentConditionItemType} from "@/contracts";
import {CarList, ConsultTimeList, PaymentConditionList} from "@/mocks";


export default function ConsultFormUi() {
    return (
        <div className={'space-y-6'}>
            <div className={'grid gap-6 sm:grid-cols-2'}>
                <InputText name={"name"} label={'نام و نام خانوادگی'} icon={UserIcon} required={true}/>
                <InputText name={"phone"} label={'تلفن'} icon={PhoneIcon} type={'tel'} inputMode={'tel'} required={true}/>
            </div>

            <InputText name={"email"} label={'ایمیل'} icon={MailIcon} type={'email'}/>

            <InputSelect name={"type"} label={'انتخاب خوردرو'} icon={CarIcon} required={true}>
                <option value="" disabled>انتخاب کنید ...</option>
                {
                    CarList.map((item: CarListItemType) =>
                        <option key={item.id} value={item.value}>{item.label}</option>)
                }
            </InputSelect>

            <InputSelect name={"condition"} label={'شراایط پرداخت'} icon={CreditCard} required={true}>
                <option value="" disabled>انتخاب کنید ...</option>
                {
                    PaymentConditionList.map((item: PaymentConditionItemType) =>
                        <option key={item.id} value={item.value}>{item.label}</option>)
                }
            </InputSelect>

            <InputSelect name={"time"} label={'بازه زمانی تماس مشاور با شما'} icon={CreditCard} required={true}>
                <option value="" disabled>انتخاب کنید ...</option>
                {
                    ConsultTimeList.map((item: ConsultTimeItemType) =>
                        <option key={item.id} value={item.value}>{item.label}</option>)
                }
            </InputSelect>
        </div>
    );

}