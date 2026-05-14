# Adding Pages Later

In Next.js, pages are just folders and files inside the `app` folder.

Examples:

```text
app/page.tsx                 -> homepage
app/projects/page.tsx        -> /projects
app/notes/page.tsx           -> /notes
app/reminders/page.tsx       -> /reminders
app/assistant/page.tsx       -> /assistant
```

Adding a page does not delete or damage your data.

Your data lives in Supabase. Pages are only screens that look at the data.

Data only changes when your code does one of these:

- insert
- update
- delete

So it is safe to add more pages as your website grows.
