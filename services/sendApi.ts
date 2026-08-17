import {RegisterConsultFormDataType} from "@/forms/consult-form";

export async function submitConsult(
    values: RegisterConsultFormDataType
) {
    const response = await fetch('/api/consult', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data?.message || 'خطا در ارسال درخواست'
        )
    }

    return data
}