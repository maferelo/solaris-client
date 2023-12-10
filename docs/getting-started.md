## Getting Started

### Install nvm

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### Install node

```
nvm install
```

### Install dependencies

```
npm install
```

### Run the app

```
npm run start
```

you may run into port conflicts, run this to clear any port

```
PORT_NUMBER=8081
lsof -i tcp:${PORT_NUMBER} | \
  awk 'NR!=1 {print $2}' | \
  xargs kill
```
