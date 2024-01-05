
# delete everything
rm -rf ./public

# create folder
hugo

cd public
git init
git remote add origin https://github.com/arefmalek/arefmalek.github.io
git add .
git commit -m "deployment"
git push -f origin master

cd -
rm -rf ./public

echo "deployed!"
