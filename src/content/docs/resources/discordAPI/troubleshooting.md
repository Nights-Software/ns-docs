---
title: "Troubleshooting · Discord API"
description: "Common problems, their solutions and performance tips."
slug: resources/discordAPI/troubleshooting
group: scripts
lastUpdated: 2026-04-25
---

## Troubleshooting

### Common Issues

#### Bot Not Responding
- Verify bot token is correct
- Ensure bot is online and has proper permissions
- Check bot is invited to your Discord server

#### Role Permissions Not Working
- Confirm role IDs are correct
- Verify bot has been given the required permission
- Verify the guild names match between the scripts, if applicable.
- Verify the role names match between the scripts.

#### Resource Dependencies
- Ensure Discord API loads before dependent resources
- Check server.cfg load order

### Error Messages

| Error | Solution |
|-------|----------|
| `Discord API not found` | Check resource name in server.cfg |
| `Invalid bot token` | Verify token format and validity |
| `Guild not found` | Confirm guild ID and bot membership |

### Debug Mode
Enable debug logging by setting `Discord_API_Log_Level = 1` in your config to see detailed API request information.

:::tip
**Need Help?** Join our [Discord community](https://discord.com/channels/989438923925229598/1152361824554061824) for support.
:::

## Performance Optimization

### Best Practices
- Use your own custom bot token, which is not used for any other purposes.

### Monitoring
- Check F8 console for error messages
- Monitor the txAdmin console for the Discord API status & installation feedback.
