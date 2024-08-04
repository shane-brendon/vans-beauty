"use client";
import React from "react";
import styles from "./bookingForm.module.scss";
import { useForm } from "react-hook-form";
function BookingForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return <form className={styles.bookingForm}></form>;
}

export default BookingForm;
