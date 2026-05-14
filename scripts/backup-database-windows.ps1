# Project Vault Daily Database Backup - Windows PowerShell
# You need PostgreSQL tools installed so pg_dump is available.
# Fill in the values below from your Supabase database connection string.

$BackupFolder = "$HOME\ProjectVaultBackups"
$Date = Get-Date -Format "yyyy-MM-dd-HHmm"
$OutFile = "$BackupFolder\project-vault-db-$Date.sql"

$env:PGPASSWORD = "YOUR_SUPABASE_DATABASE_PASSWORD"
$HostName = "YOUR_SUPABASE_DB_HOST"
$Port = "5432"
$Database = "postgres"
$Username = "postgres"

New-Item -ItemType Directory -Force -Path $BackupFolder | Out-Null

pg_dump --host=$HostName --port=$Port --username=$Username --dbname=$Database --file=$OutFile --clean --if-exists

Write-Host "Backup saved to $OutFile"
