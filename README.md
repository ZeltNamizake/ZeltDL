<div align="center">
  <img src="https://telegra.ph/file/cdc773903a4bc8ede3baa.jpg" width="250">
  
# ZeltDL
Downloader Tools via Termux using JavaScript and NodeJS
<p>
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=Yellow&labelColor=black">
<img src="https://img.shields.io/badge/NodeJS-339933?style=for-the-badge&logo=node.js&logoColor=Yellow&labelColor=black">
</p>



## Feature :

Instagram Reels

Soundcloud Mp3

Tiktok Video

Twitter Video

XNXX Video

Youtube MP3

Youtube Mp4 [Direct Link]


</div>

## How to install it
`apt upgrade && apt update`

`pkg install bash -y`

`pkg install git -y`

`git clone https://github.com/ZeltNamizake/ZeltDL`

`cd ZeltDL`

## Configuration setup

`nano config.js`

### API Key
You can get API Keys at https://api.fgmods.xyz

Enter API Keys in file  `config.js`
```javascript
const apikey = `` /*Example apikey `6w4P2k7V`*/ 
```

You can change the directory to direct the download results
```javascript
/*If you want to change the directory to direct the file
location, you have to create a folder first in 
Internal Storage*/
const directory = `Download`
```

click `CTRL + S` for save config.js


click `CTRL + X` for quit in nano


## Install Nodejs and Module

`bash install.sh`

#### Running ZeltDL script
`node zelt`
