import {Form, Formik, FormikHelpers, FormikValues,} from "formik";
import {ReactNode} from "react";



interface BasicFormProps<T extends FormikValues> {
    children: ReactNode;
    btnText?: string;
    loading?: boolean;
    initialValues: T;
    onSubmit: (values: T, helpers: FormikHelpers<T>) => void | Promise<void>;
    validationSchema?: AnyObjectSchema;
}

export type FormProps<T extends FormikValues> = {
    initialValues?: T;
    onSubmit: (values: T, helpers: FormikHelpers<T>) => void | Promise<void>;
    validationSchema?: AnyObjectSchema;
    loading?: boolean;
    mode ?: "update" | "create"

};


export function handleFormErrors<T extends FormikValues>(error: unknown, actions: FormikHelpers<T>) {

    if (error instanceof ValidationException) {
        const formErrors: Record<string, string> = {};

        Object.entries(error.errors).forEach(([field, messages]) => {
            if (Array.isArray(messages)) {
                formErrors[field] = messages[0];
            } else if (typeof messages === "string") {
                formErrors[field] = messages;
            }
        });
        actions.setErrors(formErrors as never);
        return;
    }

    // fallback error (optional)
    actions.setStatus({error: "Something went wrong"});
}

export default function BasicForm<T extends FormikValues>({
                                                              initialValues,
                                                              onSubmit,
                                                              validationSchema,
                                                              btnText,
                                                              children,
                                                              loading = false,
                                                          }: BasicFormProps<T>) {
    return (
        <Formik<T> initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                {children}
                <hr className="my-6 border-gray-300"/>
                <CButton disabled={loading} type="submit">
                    {btnText ?? "Submit"}
                </CButton>
            </Form>
        </Formik>
    );
}