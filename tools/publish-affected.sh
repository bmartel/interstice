# APPS=
LIBS=jql

# Determine version of Nx installed
NX_VERSION=$(node -e "console.log(require('./package.json').devDependencies['@nrwl/workspace'])")
TS_VERSION=$(node -e "console.log(require('./package.json').devDependencies['typescript'])")

# Install @nrwl/workspace in order to run the affected command
yarn add -D @nrwl/workspace@$NX_VERSION --prefer-offline
yarn add -D typescript@$TS_VERSION --prefer-offline

# Run the affected command, comparing latest commit to the one before that
# AFFECTED_APPS_OUTPUT=$(npx nx affected:apps --plain --base HEAD~1 --head HEAD)
AFFECTED_LIBS_OUTPUT=$(npx nx affected:libs --plain --base HEAD~1 --head HEAD)

# Store result of the previous command (grep)

for lib in ${LIBS//,/ } ; do
  AFFECTED_LIBS_OUTPUT | grep $lib -q
  IS_AFFECTED=$?

  if [ $IS_AFFECTED -eq 1 ]; then
    echo "🛑 - Publish ignored"
  elif [ $IS_AFFECTED -eq 0 ]; then
    echo "✅ - Publishing $lib..."
    cd ./dist/libs/$lib
    npm publish
    cd -
  fi
done
