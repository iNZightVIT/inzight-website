import React from "react";

import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  app: "desktop" | "lite";
  version: string;
  os: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        <div className={styles.row}>
          <div className={styles.input}>
            <label>Name*</label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required.",
                },
              })}
            />
          </div>

          <div className={styles.input}>
            <label>Email*</label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required.",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address.",
                },
              })}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.input}>
            <label>Application</label>
            <div className={styles.radios}>
              <div>
                <input
                  type="radio"
                  value="desktop"
                  {...register("app", { required: true })}
                />{" "}
                Desktop
              </div>
              <div>
                <input
                  type="radio"
                  value="lite"
                  {...register("app", { required: true })}
                />{" "}
                Lite
              </div>
            </div>
          </div>

          {watch("app") === "desktop" && (
            <>
              <div className={styles.input}>
                <label>Version</label>
                <input {...register("version")} />
                <small>e.g., 4.3.0</small>
              </div>
              <div className={styles.input}>
                <label>Operating System</label>
                <input {...register("os")} />
                <small>e.g., Windows 10, Ubuntu 22.04</small>
              </div>
            </>
          )}
        </div>

        <div className={styles.row}>
          <div className={styles.input}>
            <label>Message</label>
            <textarea {...register("message")} />
          </div>
        </div>

        <div className={styles.buttons}>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
