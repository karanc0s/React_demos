import {Control, Controller} from "react-hook-form";
import {Editor} from "@tinymce/tinymce-react";
import {TPostForm} from "../types";


interface Props{
    control: Control<TPostForm>,
    label : string,
    defaultValue : string,
}

export default function RTE(props : Props){
    const { control , label , defaultValue = ""} = props;


    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}
            <Controller
                name={"content"}
                control={control}
                render={({field: {onChange}}) => (
                    <Editor
                        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                        initialValue={defaultValue}
                        onEditorChange={onChange}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [],
                            toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                    />
                )}
            />
        </div>
    )
}