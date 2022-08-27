import React from "react";
import { Controller, useForm } from "react-hook-form";

import { stripHtml } from "string-strip-html";
import Draftjs from "./Draftjs";

const HookDraft = () => {
  const {
    formState: { errors },
    control,
  } = useForm();

  return (
    
        <Controller
          render={({ field }) => <Draftjs {...field} />}
          name="description"
          control={control}
          defaultValue=""
          rules={{
            validate: {
              required: (v) =>
                (v && stripHtml(v).result.length > 0) ||
                "Description is required",
              maxLength: (v) =>
                (v && stripHtml(v).result.length <= 2000) ||
                "Maximum character limit is 2000",
            },
          }}
        />
        
  );
};

export default HookDraft;