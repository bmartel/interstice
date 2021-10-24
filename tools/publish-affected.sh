# APPS=
LIBS=jql

# Determine version of Nx installed
NX_VERSION=$(node -e "console.log(require('./package.json').devDependencies['@nrwl/workspace'])")
TS_VERSION=$(node -e "console.log(require('./package.json').devDependencies['typescript'])")

# Install @nrwl/workspace in order to run the affected command
yarn add -D @nrwl/workspace@$NX_VERSION --prefer-offline
yarn add -D typescript@$TS_VERSION --prefer-offline

for lib in ${LIBS//,/ } ; do
  if [ -d "./dist/packages/$lib" ]; then
    echo "✅ - Publishing $lib..."
    cd ./dist/packages/$lib && npm version path && npm publish && cd -
  else
    echo "🛑 - Publish ignored"
  fi
done
