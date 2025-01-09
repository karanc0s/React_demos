import {Control, Controller} from "react-hook-form";
import {FormValues} from "../App.tsx";

import {Editor} from "@tinymce/tinymce-react";

interface Props{
    control:Control<FormValues>,
}

export default function RTEditor(props: Props){
    const {control} = props;

    return (
        <>
            <Controller
                name={"description"}
                control={control}
                render={({field : {onChange}})=>(
                    <Editor
                        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                        initialValue={"This is initial value"}
                        onEditorChange={onChange}

                        init={{
                            branding: false
                        }}
                    />

                )}
            />

        </>
    )
}