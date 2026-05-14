# Daily Local Backup on Windows

This saves a copy of your Supabase database to your computer every day.

## What this backs up

This backs up your database:
- projects
- tasks
- notes
- reminders
- assistant messages
- file records

It does not download the actual uploaded files from Supabase Storage yet. Add that later after the main app is working.

## Steps

1. Install PostgreSQL tools for Windows.
2. Open the file `scripts/backup-database-windows.ps1`.
3. Replace these placeholder values:
   - `YOUR_SUPABASE_DATABASE_PASSWORD`
   - `YOUR_SUPABASE_DB_HOST`
4. Test it manually in PowerShell:

```powershell
cd path\to\project-vault-starter
powershell -ExecutionPolicy Bypass -File .\scripts\backup-database-windows.ps1
```

5. Open Windows Task Scheduler.
6. Click `Create Basic Task`.
7. Name it `Project Vault Daily Backup`.
8. Choose `Daily`.
9. Pick a time, like 8:00 PM.
10. Choose `Start a program`.
11. Program:

```text
powershell.exe
```

12. Arguments:

```text
-ExecutionPolicy Bypass -File "C:\path\to\project-vault-starter\scripts\backup-database-windows.ps1"
```

13. Finish.

Your backups will go to:

```text
C:\Users\YourName\ProjectVaultBackups
```
