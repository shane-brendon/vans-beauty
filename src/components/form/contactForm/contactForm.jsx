"use client";
import React from "react";
import styles from "./contactForm.module.scss";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ButtonCustom from "../../lib/button/ButtonCustom";

function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form className={styles.bookingForm}>
      <div>
        <Label htmlFor="name" />
        <Input type="text" placeholder="Your Name" id="name" />
      </div>
      <div>
        <Label htmlFor="email" />
        <Input type="email" placeholder="Your Email" id="email" />
      </div>

      <div>
        <Label htmlFor="subjet" />
        <Input type="subjet" placeholder="Your Subject" id="subjet" />
      </div>
      <div>
        <Label htmlFor="message" />
        <Textarea id="message" placeholder="Your Message" />
      </div>
      <div>
        <ButtonCustom text={"Send Message"} isFill type="submit" />
      </div>
    </form>
  );
}

export default ContactForm;
