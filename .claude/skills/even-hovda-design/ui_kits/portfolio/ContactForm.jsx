// ContactForm.jsx — port of contact/page.tsx without the network call.

const { useState: useStateCF } = React;

const ContactForm = () => {
  const [form, setForm] = useStateCF({ name: "", email: "", message: "" });
  const [status, setStatus] = useStateCF("idle"); // idle | loading | success | error
  const [err, setErr] = useStateCF("");

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (err) setErr("");
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return setErr("Vennligst fyll inn navnet ditt");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setErr("Vennligst oppgi en gyldig e-postadresse");
    if (form.message.trim().length < 10) return setErr("Meldingen må være minst 10 tegn");
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4500);
    }, 700);
  };

  return (
    <section id="contact" className="contact">
      <window.Divider>La oss ta en prat</window.Divider>

      <div className="contact__grid">
        <div className="contact__info">
          <div className="card">
            <h3 className="card__title">Kontaktinformasjon</h3>
            <ul className="contact__list">
              <li><window.IconMail size={18} /><a href="mailto:evenlhovda+web@gmail.com">evenlhovda@gmail.com</a></li>
              <li><window.IconMapPin size={18} /><span>Oslo, Norge</span></li>
              <li><window.IconLinkedin size={18} /><a href="https://www.linkedin.com/in/evenhovda" target="_blank" rel="noopener noreferrer">linkedin.com/in/evenhovda</a></li>
            </ul>
          </div>
          <div className="card card--tint">
            <h3 className="card__title">Interessert i en prat?</h3>
            <p>Jeg tar gjerne en prat om hvordan jeg kan hjelpe deg med ditt prosjekt.</p>
            <a className="btn btn--primary" href="mailto:evenlhovda+web@gmail.com">
              <window.IconMail size={14} /> Send meg en mail
            </a>
          </div>
        </div>

        <form className="card contact__form" onSubmit={submit} noValidate>
          <h3 className="card__title">Send meg en melding</h3>

          <label className="field">
            <span className="field__label">Navn</span>
            <input
              className="field__input"
              type="text"
              value={form.name}
              onChange={update("name")}
              disabled={status === "loading"}
              placeholder="Hva heter du?"
            />
          </label>

          <label className="field">
            <span className="field__label">E-post</span>
            <input
              className="field__input"
              type="email"
              value={form.email}
              onChange={update("email")}
              disabled={status === "loading"}
              placeholder="din@adresse.no"
            />
          </label>

          <label className="field">
            <span className="field__label">Melding</span>
            <textarea
              className="field__input"
              rows={4}
              value={form.message}
              onChange={update("message")}
              disabled={status === "loading"}
              placeholder="Hva slags problem ønsker du å løse?"
            />
          </label>

          {err && <p className="field__err">{err}</p>}
          {status === "success" && (
            <p className="field__ok">
              <window.IconCheck size={14} /> Meldingen din er sendt — jeg tar kontakt snart.
            </p>
          )}

          <button
            type="submit"
            className="btn btn--primary btn--full"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sender…" : "Send melding"}
          </button>
        </form>
      </div>
    </section>
  );
};

window.ContactForm = ContactForm;
