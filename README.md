# Project Vault Starter

This is your starter website for tracking personal projects.

It includes:

- project dashboard
- login with Supabase Auth
- projects
- tasks
- notes
- reminders
- documents/files/finals/timelines upload area
- AI assistant route using OpenAI
- Supabase database schema
- local daily backup scripts
- Vercel-ready setup

## The simple picture

- Vercel hosts the website.
- Supabase stores your data online.
- OpenAI powers the assistant.
- Your computer can run a daily backup script.

## Step 1: Install the basics

Install these:

1. Node.js
2. VS Code
3. Git

## Step 2: Open this folder

Open this folder in VS Code.

Then open the terminal in VS Code.

Run:

```bash
npm install
```

## Step 3: Create Supabase project

1. Go to Supabase.
2. Create a new project.
3. Go to Project Settings > API.
4. Copy your Project URL.
5. Copy your anon public key.

## Step 4: Create `.env.local`

Copy `.env.example` and rename the copy to `.env.local`.

Fill it in:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_public_key
OPENAI_API_KEY=your_openai_api_key
```

Do not share `.env.local` publicly.

## Step 5: Create database tables

In Supabase:

1. Open SQL Editor.
2. Create a new query.
3. Paste everything from `supabase/schema.sql`.
4. Click Run.

This creates:

- projects
- tasks
- notes
- files
- reminders
- assistant messages
- security rules

## Step 6: Create file storage bucket

In Supabase:

1. Go to Storage.
2. Create a bucket named `project-files`.
3. Make it private.

This stores uploaded documents, finals, timelines, and attachments.

## Step 7: Turn on email login

In Supabase:

1. Go to Authentication.
2. Check that email login is enabled.
3. Magic link login is fine for the first version.

## Step 8: Start the website locally

Run:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

You should be sent to the login page.

Sign in, then create your first project.

## Step 9: Test the basics

Test this before going further:

- create a project
- add a task
- mark a task done
- add a note
- add a reminder
- upload a file
- ask the AI assistant a question

## Step 10: Deploy on Vercel

1. Push this project to GitHub.
2. Go to Vercel.
3. Click New Project.
4. Import the GitHub repo.
5. Add these environment variables in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
OPENAI_API_KEY
```

6. Click Deploy.

## Step 11: Daily local backup

Use the scripts in the `scripts` folder.

For Windows, read:

```text
docs/DAILY-BACKUP-WINDOWS.md
```

Your data lives online in Supabase, but the backup script can save a daily database copy to your computer.

## Notes

This is a starter app. It is intentionally simple so you can get it running before adding polish.

Good next improvements:

- better project pages
- recurring reminders
- file download buttons
- storage file backup
- calendar integration
- weekly email summary
- more detailed timeline tools
