# Installation

1. `git clone git@github.com:mlapps/blueprint.git com.metrological.app.Vimeo`
2. `cd com.metrological.app.Vimeo`
3. `git remote set-url origin git@github.com:mlapps/com.metrological.app.Vimeo.git`
4. Create a new empty git repo on the specified origin url.
5. `git push origin master`

Now you're set up and ready to start building your app!

# Building app distribution

Use the following steps to create a distribution:

Create a self-contained web-based distribution (HTML5) in dist/web:
`npm run release-web`

Create a Metrological platform package in dist/{appname}.mpkg.tgz:
`npm run release-mpkg`
