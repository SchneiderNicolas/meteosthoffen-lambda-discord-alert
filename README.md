# AWS Lambda Discord Alerts

This AWS Lambda function is designed to send alerts to a Discord channel via a webhook when issues arise during the data retrieval from a specific weather station.

## Usage

The Lambda function accepts an event payload with three properties:

- `discordWebhookUrl`: The URL of the Discord webhook to send the alert.
- `message`: The message to be sent as an alert.
- `stationId`: The ID of the weather station associated with the alert.

Each of these properties must be included in the event payload; if any are missing, the function throws an error.

Example of an event payload:

```json
{
    "discordWebhookUrl": "https://discord.com/api/webhooks/...",
    "message": "Error retrieving weather station data",
    "stationId": "12345"
}
