import {NextRequest, NextResponse} from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const response = await fetch(
            'https://my.barsasoft.com/api2/CRMRegistration/0.1/RegisterLead',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(body),
                cache: 'no-store',
            }
        )

        const data = await response.json().catch(() => null)

        if (!response.ok) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'External API request failed',
                    data,
                },
                {
                    status: response.status,
                }
            )
        }

        return NextResponse.json({
            success: true,
            data,
        })
    } catch (error) {
        console.error('Consult API Error:', error)

        return NextResponse.json(
            {
                success: false,
                message: 'Something went wrong',
            },
            {
                status: 500,
            }
        )
    }
}