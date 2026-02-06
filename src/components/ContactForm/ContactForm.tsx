import React, { useState } from "react";

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

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  };

  if (status === "success") {
    return (
      <div className={styles.success}>
        <h3>Thank you for your message!</h3>
        <p>We'll get back to you as soon as possible.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={styles.button}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        {status === "error" && (
          <div className={styles.errorBanner}>
            {errorMessage || "Failed to send message. Please try again."}
          </div>
        )}

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
              disabled={status === "submitting"}
            />
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
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
              disabled={status === "submitting"}
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
                  {...register("app")}
                  disabled={status === "submitting"}
                />{" "}
                Desktop
              </div>
              <div>
                <input
                  type="radio"
                  value="lite"
                  {...register("app")}
                  disabled={status === "submitting"}
                />{" "}
                Lite
              </div>
            </div>
          </div>

          {watch("app") === "desktop" && (
            <>
              <div className={styles.input}>
                <label>Version</label>
                <input
                  {...register("version")}
                  disabled={status === "submitting"}
                />
                <small>e.g., 4.4.0</small>
              </div>
              <div className={styles.input}>
                <label>Operating System</label>
                <input
                  {...register("os")}
                  disabled={status === "submitting"}
                />
                <small>e.g., Windows 10, Ubuntu 22.04</small>
              </div>
            </>
          )}
        </div>

        <div className={styles.row}>
          <div className={styles.input}>
            <label>Message*</label>
            <textarea
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required.",
                },
              })}
              disabled={status === "submitting"}
            />
            {errors.message && (
              <span className={styles.error}>{errors.message.message}</span>
            )}
          </div>
        </div>

        <div className={styles.buttons}>
          <button
            type="submit"
            disabled={status === "submitting"}
            className={styles.button}
          >
            {status === "submitting" ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}
