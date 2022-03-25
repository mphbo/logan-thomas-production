import { IParallax, Parallax } from "@react-spring/parallax";
import { Box, Button, Form, FormField, TextArea, TextInput } from "grommet";
import React, { useRef, useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import styles from "./styles/Contact.module.scss";
import Typewriter from "typewriter-effect";

interface IEmail {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [email, setEmail] = useState<IEmail>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [thankYou, setThankYou] = useState(false);
  const { color } = useThemeContext();
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/4e784200-abe4-11ec-9c35-5156bf57ed5d";

  const handleSendEmail = (email: IEmail) => {
    if (email.email.includes("@" && ".")) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(email),
      };
      fetch(FORM_ENDPOINT, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setThankYou(true);
        })
        .catch((e) => {
          setThankYou(true);
          console.log(e);
        });
    } else {
      setError("Please add an Email in the correct formet.");
    }
  };

  const typewriter = (typewriter: any) => {
    typewriter.typeString("Thank you.").start();
  };

  return (
    <div className={styles.contact}>
      {!thankYou && <h1>Contact:</h1>}
      {thankYou && (
        <div className={styles.typewriter}>
          <Typewriter options={{ autoStart: true }} onInit={typewriter} />
        </div>
      )}
      <Form
        className={styles.form}
        value={email}
        onChange={(value) => {
          setEmail(value);
          setError("");
          console.log(email);
          setThankYou(false);
        }}
        onReset={() => setEmail({ name: "", email: "", message: "" })}
        onSubmit={({ value }) => handleSendEmail(value)}
        action={FORM_ENDPOINT}
        method="POST"
        target="_blank"
      >
        <FormField name="name" htmlFor="text-input-id" label="Name">
          <TextInput id="text-input-id" name="name" />
        </FormField>
        <FormField
          error={error}
          name="email"
          htmlFor="text-input-id"
          label="Email"
        >
          <TextInput id="text-input-id" name="email" />
        </FormField>
        <FormField
          className={styles.message}
          name="message"
          htmlFor="text-input-id"
          label="Message"
        >
          <TextArea id="text-input-id" name="message" />
        </FormField>
        <Box direction="row" gap="medium">
          <Button
            color={color.background}
            size="large"
            type="submit"
            primary
            label="Submit"
          />
          <Button
            color={color.background}
            className={styles.button}
            size="large"
            type="reset"
            label="Reset"
          />
        </Box>
      </Form>
    </div>
  );
}

export default Contact;
