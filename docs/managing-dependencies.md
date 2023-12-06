npx expo install @react-navigation/native-stack -- --save-dev

npm run build

nvm install --latest-npm

npm outdated

npm update

npm upgrade

PORT_NUMBER=8081
lsof -i tcp:${PORT_NUMBER} | awk 'NR!=1 {print $2}' | xargs kill
