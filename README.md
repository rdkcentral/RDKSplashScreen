# Lightning apps

Metrological in-house developed apps catalogue using the [Lightning SDK](https://github.com/WebPlatformForEmbedded/Lightning-SDK).

## Instructions
Create your app using at least the following files:
* src/App.js contains your app class
* metadata.json contains app info
* all static files used in your app must be placed in the static folder

## Building app distribution

Use the following steps to create a distribution:

Create a self-contained web-based distribution (HTML5) in dist/web:
`npm run release-web`

Create a Metrological platform package in dist/{appname}.mpkg.tgz:
`npm run release-mpkg`
