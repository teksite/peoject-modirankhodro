import {Form, Formik, FormikHelpers} from "formik";
import {InputText} from "@/components/inputs/input-text";

export default function consultForm() {
    return (

        <Form>
            <InputText name={"name"} label={'نام و نام خانوادگی'}/>
        </Form>
);

}