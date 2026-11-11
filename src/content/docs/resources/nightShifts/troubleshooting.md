---
title: "Troubleshooting & Best Practices · Night Shifts MDT"
description: "Common problems, their solutions and best practices."
slug: resources/nightShifts/troubleshooting
group: scripts
lastUpdated: 2026-08-13
---

## Troubleshooting

### Common Issues

:::caution[Parsing Errors in F8 Console]

- Ensure files are transferred in binary mode via FTP
- Follow the installation order: ZIP → Unpack → Binary FTP → Resources → server.cfg
:::

:::caution[Database Connection Issues]

- Verify MySQL connection string is correct
- Check database credentials and accessibility
- Ensure oxmysql is properly installed and started before the scripts that use it.
:::

:::caution[FiveM ID Not Found]

- Log into FiveM app when inside the app
- Close and reopen FiveM app
- Join server as a logged in user
:::

> **Resource Naming**
>
> - Use the **shipped** resource folder name (v1 default: `night_shifts_mdt`). Renaming breaks `exports['…']` calls and **ERS** checks that expect the MDT resource name.
> - Keep `config/`, `client/`, `server/`, and `fxmanifest.lua` layout intact.

## Best Practices

### Configuration Tips

- **Role Planning** - Plan departments, ranks, and in-tablet permission matrices before go-live
- **Department Structure** - Plan department, sub-department, and rank hierarchy
- **Language Localization** - Configure for your country's emergency services
- **Backup Configurations** - Keep backups of working configurations

### Database Management

- **Regular Backups** - Backup your database regularly
- **Performance Monitoring** - Monitor database performance
- **Table Maintenance** - Periodically optimize database tables

### User Experience

- **Clear Documentation** - Provide users with MDT usage guidelines
- **Role Training** - Train users on department-specific features
- **Emergency Procedures** - Establish clear emergency call procedures
