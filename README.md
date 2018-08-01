# pearls-of-wisdom
Pearls of wisdom from around the coding world

This project consists of a [Loopback](https://github.com/strongloop/loopback) server/data access layer with a hard-coded dataset of "pearls of wisdom" from various authors/personalities

## Public Access
The server is hosted as an [Azure Web App](https://azure.microsoft.com/en-us/services/app-service/web/) and is available at https://pearlsofwisdom.azurewebsites.net (or go straight to the [explorer](https://pearlsofwisdom.azurewebsites.net/explorer).)

## Roadmap
The end-goal of this project is to produce a publicly available Slack App that will proactively offer these tips up at scheduled times, and that supports rating pearls and adding additional ones.  To that end, the following pieces still need to be implemented:

* Finishing the initial dataset
* A proper data store
* The ability to rate pearls
* Scheduled service to fetch from REST API and push to Slack
* A Slack app
* A convenient way to add pearls, beyond just using the API
