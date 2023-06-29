import React from "react";

import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  version: "desktop" | "lite";
  versionDetail: string;
  versionOS: string;
};

export default function ContactForm() {
  const { register, watch, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <label>Name</label>
          <input {...register("name", { required: true })} />
        </div>

        <div className={styles.row}>
          <label>Email</label>
          <input {...register("email", { required: true })} />
        </div>

        <div className={styles.row}>
          <label>iNZight version</label>
          <span>
            <input
              type="radio"
              value="desktop"
              {...register("version", { required: true })}
            />{" "}
            Desktop
            <input
              type="radio"
              value="lite"
              {...register("version", { required: true })}
            />{" "}
            Lite
          </span>
        </div>

        {watch("version") === "desktop" && (
          <div className={styles.grid}>
            <label>Version</label>
            <input {...register("versionDetail")} />

            <div>
              <label>Operating System</label>
              (include version information if possible)
            </div>
            <input {...register("versionOS")} />
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
