#!/usr/bin/env bash
# Project Vault Daily Database Backup - Mac/Linux
# You need PostgreSQL tools installed so pg_dump is available.

BACKUP_FOLDER="$HOME/ProjectVaultBackups"
DATE=$(date +"%Y-%m-%d-%H%M")
OUTFILE="$BACKUP_FOLDER/project-vault-db-$DATE.sql"

export PGPASSWORD="YOUR_SUPABASE_DATABASE_PASSWORD"
HOSTNAME="YOUR_SUPABASE_DB_HOST"
PORT="5432"
DATABASE="postgres"
USERNAME="postgres"

mkdir -p "$BACKUP_FOLDER"
pg_dump --host="$HOSTNAME" --port="$PORT" --username="$USERNAME" --dbname="$DATABASE" --file="$OUTFILE" --clean --if-exists

echo "Backup saved to $OUTFILE"
