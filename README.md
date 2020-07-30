# CAKE chatbot theme

## Who we are

CAKE is a design system and frontend framework for the whole "[Schwarz Gruppe](https://jobs.schwarz/)". We offer some tools, guidelines and systems to develop faster products that match the CI.

Check out our project website <https://cake.schwarz>.

## What I am

A **Chatbot Theme** that can be used for many applications that uses our default Chatbot integration for "Schwarz Gruppe". It depends on our [CSS Framework](https://github.com/cake-hub/web-css_framework).

## Contact

You have questions or need help? Feel free to mail us <cake@lidl.com>

## Getting started

1. Clone the repo
2. Cd into the project
3. Configure(create) `.env` file with your credentials and proxy _(If you do not have any credentials ask for some via cake@lidl.com)_

## Setup

Please install Docker to start the project.

## Start the project

`docker-compose up`

This will build the docker containers (CAKE and themes) and runs `npm install && npm run dev`. (might take some time)

When everything is installed and the server has started, open the browser and navigate to `http://localhost:2022`.

Alternatively there are further startup possibilities.

`./startup.sh dev` - startup docker containers with command line
`./startup.sh prod` - startup docker containers and run build-commands
`./startup.sh` - run docker and start watch tasks, like before

## Troubleshooting

### Docker container shut down

`docker-compose up` again.

### Connect to the docker container

`docker-compose exec cake_chat sh`

### Nodemon does not restart on WINDOWS when changing files

In some networked environments (such as a container running nodemon reading across a mounted drive), you will need to use the `--legacy-watch` flag which enables polling. This should only be used, when the normal mode does not work, because it will poll every file it can find.
Simply add the flag above to the `package.json` like in the following example:

```json
…
"scripts": {
    …
    "server": "nodemon --legacy-watch index.js",
    …
},
…
```

Just be careful that this changes does not get commited!
