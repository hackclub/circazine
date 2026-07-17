import styles from "./guide.module.css";

export const metadata = {
  title: "guide - circazine",
  description: "how to make your circazine submission",
};

export default function GuidePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>steps</h1>

        <h2 className={styles.heading}>1. pick out a circuit</h2>
        <ul className={styles.list}>
          <li>
            what&rsquo;s something you would want a circuit to do? maybe a
            blinking led? produce a square wave?
          </li>
          <li>
            if you&rsquo;re unfamiliar with circuits and coming from the
            programming side, do something with logic circuits!
          </li>
          <li>
            if you want your circuit to be in the zine, you{" "}
            <strong>cannot pick a design someone else is doing!!</strong>{" "}
            double check in the slack to make sure your idea is original!
            <ul className={styles.nestedList}>
              <li>
                to join the slack, <a
              href="https://slack.hackclub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              click here
            </a>, and join the channel {" "}
               <a
              href="https://hackclub.enterprise.slack.com/archives/C0BJ4EF228G"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              #circazine
            </a>!
              </li>
            </ul>
          </li>
          <li>
            if you want stickers, you&rsquo;ll have to spend at least an hour
            making the circuit and making the zine page. make something
            cool!
          </li>
        </ul>

        <h2 className={styles.heading}>2. plot it out on KiCad</h2>
        <ul className={styles.list}>
          <li>
            due to the nature of Hack Club programs, you have to spend some
            time putting your circuit together on KiCad - but it will help
            you be confident in your drawing!
          </li>
          <li>
            set up{" "}
            <a
              href="https://lapse.hackclub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              lapse
            </a>{" "}
            on your computer - you&rsquo;ll use this to show proof that you
            yourself made the circuit.
          </li>
          <li>
            install{" "}
            <a
              href="https://www.kicad.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              KiCad
            </a>{" "}
            to sketch out your circuit. trust me, it&rsquo;s the easiest way
            to brainstorm your circuit! you can screenshot what you&rsquo;ve
            done on KiCad later and use it in your zine.
          </li>
          <li>
            go to Lapse, and follow instructions to start recording KiCad
            locally.
          </li>
          <li>
            make a new KiCad project and sketch out your circuit on a
            schematic. you do not have to plot the pcb - just the schematic!
            you might have to do a little bit of research, but I believe in
            you :)
          </li>
          <li>
            make sure to be recording you creating the circuit. this is your
            proof of work/how you&rsquo;ll get prizes later on!
          </li>
        </ul>

        <h2 className={styles.heading}>3. make your submission!</h2>
        <ul className={styles.list}>
          <li>
            you can do this wherever - on paper, then scanned, or digitally -
            it just needs to have your schematic, either one hand drawn by
            you or taken from kicad, and have an explanation of what it
            does.
          </li>
          <li>it can be smaller, but not bigger than 5&rsquo; by 7&rsquo;.</li>
          <li>
            make sure to record your creation with lapse/lookout as well!
          </li>
        </ul>
        <p>&gt; examples</p>

        <div className={styles.images}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ledDriverCircuit.png"
            alt="hand drawn basic LED driver circuit example"
            className={`${styles.image} ${styles.imageBordered}`}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/negativeFeedback.png"
            alt="negative feedback loop op-amp circuit example"
            className={styles.image}
          />
        </div>

        <h2 className={styles.heading}>4. upload it all to github</h2>
        <ul className={styles.list}>
          <li>create an account at github.com</li>
          <li>create a new repository</li>
          <li>upload your kicad files and magazine submission</li>
        </ul>

        <p className={styles.submit}>
          <span className={styles.submitText}> <a
              href="https://forms.hackclub.com/t/vpN1aJ9BZEus"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              submit here!
            </a>{" "}</span>
        </p>
      </div>
    </div>
  );
}
