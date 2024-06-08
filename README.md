### Development

1. Run `live-server` from the public directory to serve the file with live reload.
2. Run `watchexec -i "public/**" --exts html,md blades build` to build templates automatically for development
3. Run `watchexec -i "assets/**" --exts html,md blades colocate` to automatically colocate assets for developement.
3. Run `npx tailwindcss -i ./public/assets/input.css -o ./public/assets/style.css --watch` to build stylesheets using tailwinds.
4. ; 

Run these 3 commands in separate terminal windows.