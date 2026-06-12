# Setup Guide

## Requirements

- Node.js installed
- VS Code installed
- Git installed
- GitHub account

## Install and Run

```bash
cd ilokano-learning-app-nextjs
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Test on Phone Browser

Run:

```bash
npm run dev -- --hostname 0.0.0.0
```

Find your Mac IP address:

```bash
ipconfig getifaddr en0
```

Then open this on your phone:

```txt
http://YOUR_IP_ADDRESS:3000
```

Example:

```txt
http://192.168.1.3:3000
```

Your laptop and phone must be on the same Wi-Fi.
