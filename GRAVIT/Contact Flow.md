# Contact Flow
Back: [[00 GRAVIT Map]]

`components/Contact.tsx` → `components/contact/ContactForm.tsx`

- Validation uses react-hook-form with a zod schema. Country codes come from `lib/countries.ts`.
- On submit, the form makes two independent sends, and neither blocks the other:
  1. A Supabase insert into the **`contact_submissions`** table (`lib/supabase.ts`). This needs `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Errors are only logged with `console.warn`, and console calls are removed in production builds, so **a failed insert is silent in prod.**
  2. A Web3Forms email (`https://api.web3forms.com/submit`), sent only if `VITE_WEB3FORMS_ACCESS_KEY` is set.
- Fields: name, institution, role, email, phone (`countryCode + phone`), institutionType, needs, budget, project, source.

**WhatsApp widget:** `components/ChatWidget.tsx` is a fixed bottom-right link to `wa.me/919390009700` with a prefilled message. There is no chat logic.
