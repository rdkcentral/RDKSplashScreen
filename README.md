# Installation

1. `git clone git@github.com:mlapps/blueprint.git com.metrological.app.Vimeo`
2. `cd com.metrological.app.Vimeo`
3. `git remote set-url origin git@github.com:mlapps/com.metrological.app.Vimeo.git`
4. Create a new empty git repo on the specified origin url (https://github.com/organizations/mlapps/repositories/new):
5. Set name and identifier in `metadata.json`.
6. `git commit -anm "init app"`
7. `git push origin master`
8. `npm install`

Now please check if you can run index.html (using a web server or your IDE). 
If it works you're set up and ready to start building your app!

If you don't have a web server installed you could run instant-server from the directory:
```
sudo npm install -g instant-server
instant -p 8081 ./
```

# Building app distribution

Use the following steps to create a distribution:

Create a self-contained web-based distribution (HTML5) in dist/web:
`npm run release-web`

Create a Metrological platform package in dist/{appname}.mpkg.tgz:
`npm run release-mpkg`
