const axios = require('axios');

exports.handler = async (event) => {
    const { discordWebhookUrl, message, stationId } = event;

    if (!discordWebhookUrl || !message || !stationId) {
        throw new Error('Missing discordWebhookUrl, message or stationId in event');
    }

    const embed = {
        title: 'Weather Station Alert',
        color: 16711680,
        fields: [
            {
                name: 'Station ID',
                value: stationId,
                inline: true,
            },
            {
                name: 'Message',
                value: message,
                inline: true,
            },
        ],
        timestamp: new Date().toISOString(),
    };

    try {
        const discordResponse = await axios.post(discordWebhookUrl, { embeds: [embed] });
        console.log(`Discord response status: ${discordResponse.status}`);
    } catch (error) {
        console.error(`Failed to send message to Discord: ${error}`);
        throw error;
    }
};
