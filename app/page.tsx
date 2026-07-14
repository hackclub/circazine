"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./main.module.css";
export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setEmail("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <p className={styles.subtitle}>lola from hack club presents</p>
          <h1 className={styles.title}>circazine</h1>
          <p className={styles.subtitle}>spend an afternoon drawing a circuit, <span style={{ textDecoration: "underline" }}>get prizes.</span> </p>
        </div>
        <div className = {styles.rightHeader}>
          <p>launches july 17th</p>
          <Image
          src="/book.png"
          alt="Book"
          width={800}
          height={800}
          className={styles.book}
        />
        </div>
      </div>
      <div className={styles.signUp}>
        <form className={styles.signUpText} onSubmit={handleSubmit}>
          <div className={styles.signUpImage}>
        
        <p> get on the email list! </p>
        </div>
      
        <input
          type="email"
          placeholder={status ==="sent"? "you're on the list!" : "you@email.com"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button type="submit" className={styles.submitImage} disabled={status === "sending"}>
          <p>{status === "sending" ? "sending..." : "submit"}</p>
        </button>
      </form>
      </div>
      <div className={styles.info}>
        <div className = {styles.leftPaper}>
          <p>prizes:</p>
         <Image
         src="/prizes.png"
         alt="Prizes"
         width={500}
         height={400}
        />
          <p>stickers! mini computers! books! and a circazine with your own circuit!</p>
        </div>
        <div className = {styles.rightPaper}>
          <p>what can i do until launch?</p>
          <p>1. join the slack<a href="https://app.slack.com/client/E09V59WQY1E/C0BJ4EF228G" target="_blank" rel="noopener noreferrer"> #circazine</a></p>
          <p>2. look at <a href="https://github.com/alaricmoore/MiniEngineeringNotebooks/blob/main/Engineer's%20Mini-Notebook%20-%20Basic%20Semiconductor%20Circuits.pdf" target="_blank" rel="noopener noreferrer">forrest mim's mini engineering notebooks</a></p>
          <p>3. send lola@hackclub.com your ideas (or a funny joke?) </p>
          <p>4. wait until july 17th to start drawing!</p>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.leftPaper}>
          <p>after july 17th:</p>
          <p>1. draw the circuit on your computer</p>
          <p>2. make sure it works</p>
          <p>3. put it all on a piece of paper</p>
          <p>4. submit!</p>
        </div>
        <div className={styles.rightPaper}>
          <p>need inspiration?</p>
          <p>1. sketch a tiny game</p>
          <p>2. make something that lights up</p>
          <p>3. build a doodle with buttons</p>
          <p>4. keep it weird</p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
    <h1>made with {'<3'} from teens </h1>
    <h1>at hack club</h1>
    </div>
        </div>
    </main>
  );
}
