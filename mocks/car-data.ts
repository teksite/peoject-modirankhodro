import {CarListItemType, ConsultTimeItemType, PaymentConditionItemType} from "@/contracts";

export const CarList: CarListItemType[] = [
    {id: 'cat_1', value: 'X22 Pro MT', label: 'X22 Pro MT'},
    {id: 'cat_2', value: 'X33 Cross MT', label: 'X33 Cross MT'},
    {id: 'cat_3', value: 'X33 Cross CVT', label: 'X33 Cross CVT'},
    {id: 'cat_4', value: 'Arrizo 5 IE FL', label: '(M5 IE FL) Arrizo 5 IE FL'},
    {id: 'cat_5', value: 'M5 Pro', label: 'M5 Pro'},
    {id: 'cat_6', value: 'X5', label: 'X5'},
    {id: 'cat_7', value: 'X55 Pro IE', label: 'X55 Pro IE'},
    {id: 'cat_8', value: 'X77 Elite', label: 'X77 Elite'},
    {id: 'cat_9', value: 'Arrizo 6 PRO', label: 'Arrizo 6 PRO'},
    {id: 'cat_10', value: 'Z6 GT', label: 'Z6 GT (Arrizo 6 GT)'},
    {id: 'cat_11', value: 'Z8 GI', label: 'Z8 (Arrizo 8)'},
    {id: 'cat_12', value: 'F7 PRO MAX AWD', label: 'F7 PRO MAX AWD (TIGGO 7 PRO MAX AWD)'},
    {id: 'cat_13', value: 'TIGGO 7 Pro Premium', label: 'F7 Pro Premium (TIGGO 7 Pro Premium)'},
    {id: 'cat_14', value: 'F8 PRO e+', label: 'F8 PRO e+ (TIGGO 8 PRO e+)'},
    {id: 'cat_15', value: 'F8 PRO MAX AWD', label: 'F8 PRO MAX AWD (TIGGO 8 PRO MAX AWD)'},
    {id: 'cat_16', value: 'FX Premium', label: 'FX Premium'},
    {id: 'cat_17', value: 'F7 PRO e+', label: 'F7 PRO e+ (TIGGO 7 PRO e+)'},
    {id: 'cat_18', value: 'FX EV', label: 'FX EV'},
    {id: 'cat_19', value: 'FX Premium AWD', label: 'FX Premium AWD'},
    {id: 'cat_20', value: 'QX', label: 'Xtrim QX (VX)'},
    {id: 'cat_21', value: 'TX', label: 'Xtrim TX (TXL)'},
    {id: 'cat_22', value: 'SX', label: 'Xtrim SX (LX)'},
    {id: 'cat_23', value: 'F9 AWD', label: 'F9 AWD (Tiggo 9 AWD)'},
]


export const PaymentConditionList: PaymentConditionItemType[] = [
    {id: 'condition_1', value: 'خرید خودرو صفر (نقد)', label: 'تحویل نقدی به قیمت روز'},
    {id: 'condition_2', value: 'خرید اقساط', label: 'تحویل اقساطی به قیمت روز'},
    {
        id: 'condition_3',
        value: 'خرید به قیمت کارخانه',
        label: 'خرید به قیمت کارخانه (هم اکنون بخش نامه فروش فعال نمی باشد)'
    },
]

export const ConsultTimeList: ConsultTimeItemType[] = [
    {id: 'time_0', value: '*', label: 'هر زمان'},
    {id: 'time_1', value: '8 - 11', label: '8 - 11'},
    {id: 'time_2', value: '11 - 14', label: '11 - 14'},
    {id: 'time_3', value: '14 - 17', label: '14 - 17'},
    {id: 'time_4', value: '17 - 19', label: '17 - 19'},
]


