# Petra EazyHQ migration

Generate the production content import package from the latest PostgreSQL dump:

```powershell
node scripts/create-eazyhq-content-import.mjs "C:\Users\Tom Miller\Downloads\petra-backups_db_backup_20250513011135.sql"
```

The generated `petra-content.eazydb.json` package contains only public website
content: FAQs, resources, and team members. It intentionally excludes legacy
users, authentication codes, admin settings, and form submissions.

Import the package from the Eazy DB table manager with **Actions → Import
Workspace DB** in the `petra` workspace.
