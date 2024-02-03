//Module
const fs = require("fs-extra");
const readline = require("readline");
const https = require("https");
const figlet = require("figlet");
const axios = require("axios");
const clear = require("clear-console");
const ytdl = require("ytdl-core");

//Readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Color
const G = `\x1b[32m`;
const C = `\x1b[36m`;
const R = `\x1b[31m`;
const Y = `\x1b[33m`;
const B = `\x1b[30m`;
const M = `\x1b[35m`;
const Default = `\x1b[0m`;

//Background
const BGreen = `\x1b[42m`;
const BWhite = `\x1b[47m`;
const BRed = `\x1b[41m`;

//Library Downloader
const igDL = require("./lib/downloader/instagram.js");
const scdl = require("./lib/downloader/soundcloud.js");
const ttdl = require("./lib/downloader/tiktok.js");
const twitdl = require("./lib/downloader/twitter.js");
const xndl = require("./lib/downloader/xnxx.js");
const yta = require("./lib/downloader/ytmp3.js");
const ytv = require("./lib/downloader/ytmp4.js");

const { directory } = require("./config.js");

clear();
figlet.text(
  "ZeltDL",
  {
    font: "Elite",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: false,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(
      G +
        data +
        Default +
        `\n   Downloader by ZeltNamizake` +
        Default +
        `\n•————————————•°•✿•°•————————————•` +
        Default +
        `\nGH : ` +
        C +
        `https://github.com/ZeltNamizake` +
        R +
        `\nYT : ` +
        Y +
        `https://m.youtube.com/@zelt71` +
        M +
        `\nIG : ` +
        G +
        `https://instagram.com/zeltnamizake` +
        Default +
        `\n•————————————•°•✿•°•————————————•` +
        G +
        `\n[01]` +
        Default +
        `Instagram Reels` +
        G +
        `\n[02]` +
        Default +
        `Soundcloud Sound` +
        G +
        `\n[03]` +
        Default +
        `Tiktok Video` +
        G +
        `\n[04]` +
        Default +
        `Twitter Video` +
        G +
        `\n[05]` +
        Default +
        `XNXX Video` +
        G +
        `\n[06]` +
        Default +
        `Youtube Mp3` +
        G +
        `\n[07]` +
        Default +
        `Youtube Mp4 ` +
        R +
        `[Direct Link] ` +
        Default +
        `\n•————————————•°•✿•°•————————————•`
    );
  }
);
setTimeout(
  () =>
    rl.question(C + `Select Menu : `, (menu) => {
      switch (menu) {
        case "01":
        case "1":
          rl.question("Paste Your Link : ", (link) => {
            if (link.includes("www.instagram.com/reel")) {
              console.log(Y + `Processing...`);
              igDL(link).then((Link) => {
                const urlDownload = Link;
                const ID = link
                  .split("www.instagram.com/reel/")[1]
                  .split("/")[0];
                const nameVideo = fs.createWriteStream(
                  `/sdcard/${directory}/${ID}.mp4`
                );
                https.get(urlDownload, function (downloadReel) {
                  downloadReel.pipe(nameVideo);
                  downloadReel.on("end", () => {
                    console.log(G + `Success Download, please check in folder ${directory}`);
                  });
                });
              });
            } else {
              console.log(R + `Link Unsupported`);
            }
            rl.close();
          });
          break;
        case `02`:
        case `2`:
          rl.question("Paste Your Link : ", (link) => {
            if (link.includes("soundcloud")) {
              console.log(Y + `Processing...`);
              scdl(link).then((Result) => {
                const urlDownload = Result.dl_url;
                const titleSound = Result.title;
                const NameSound = fs.createWriteStream(
                  `/sdcard/${directory}/${titleSound}.mp3`
                );
                https.get(urlDownload, function (downloadSound) {
                  downloadSound.pipe(NameSound);
                  downloadSound.on("end", () => {
                    console.log(G + `Success Download, please check in folder ${directory}`);
                  });
                });
              });
            } else {
              console.log(R + `Link Unsupported`);
            }
            rl.close();
          });
          break;
        case "03":
        case "3":
          rl.question("Paste Your Link : ", (link) => {
            if (link.includes("vt.tiktok.com")) {
              console.log(Y + `Processing...`);
              ttdl(link).then((LinkDL) => {
                const urlDownload = LinkDL;
                const ID = link.split("vt.tiktok.com/")[1].split("/")[0];
                const nameVideo = fs.createWriteStream(
                  `/sdcard/${directory}/${ID}.mp4`
                );
                https.get(urlDownload, function (downloadVT) {
                  downloadVT.pipe(nameVideo);
                  downloadVT.on("end", () => {
                    console.log(G + `Success Download, please check in folder ${directory}`);
                  });
                });
              });
            } else {
              console.log(R + "Link Unsupported");
            }
            rl.close();
          });
          break;
        case "04":
        case "4":
          rl.question("Paste Your Link : ", (link) => {
            if (link.includes("twitter.com")) {
              console.log(Y + "Processing...");
              twitdl(link).then((Link) => {
                const urlDownload = Link;
                const ID = link
                  .split("twitter.com/")[1]
                  .split("?")[0]
                  .split("/")[2];
                const nameVideo = fs.createWriteStream(
                  `/sdcard/${directory}/${ID}.mp4`
                );
                https.get(urlDownload, function (downloadTV) {
                  downloadTV.pipe(nameVideo);
                  downloadTV.on("end", () => {
                    console.log(G + `Success Download, please check in folder ${directory}`);
                  });
                });
              });
            } else {
              console.log(R + "Link Unsupported");
            }
            rl.close();
          });
          break;
        case "05":
        case "5":
          rl.question("Paste Your Link : ", (link) => {
            if (link.includes("xnxx.com")) {
              console.log(Y + "Processing...");
              xndl(link).then((res) => {
                const titleVid = res.title;
                const urlDownload = res.url_dl;
                const nameVideo = fs.createWriteStream(
                  `/sdcard/${directory}/${titleVid}.mp4`
                );
                https.get(urlDownload, function (downloadXV) {
                  downloadXV.pipe(nameVideo);
                  downloadXV.on("end", () => {
                    console.log(G + `Success Download, please check in folder ${directory}`);
                  });
                });
              });
            } else {
              console.log(R + "Link Unsupported");
            }
            rl.close();
          });
          break;
        case "06":
        case "6":
          rl.question("Paste Your Link : ", (link) => {
            if (link.includes("youtu.be")) {
              console.log(Y+"Processing...")
              yta(link).then((title) => {
                const TitleAudio = title;
                const videoId = ytdl.getURLVideoID(link);
                const downloadLink = `https://youtu.be/${videoId}`;
                const mp4DownloadPath = `/sdcard/${directory}/${TitleAudio}.mp3`;
                const mp4DownloadStream = ytdl(downloadLink, {
                  filter: "audioonly",
                });
                const mp4FileStream = fs.createWriteStream(mp4DownloadPath);
                mp4DownloadStream.pipe(mp4FileStream);
                mp4DownloadStream.on("end", () => {
                  console.log(G + `Success Download, please check in folder ${directory}`);
                });
              });
            } else {
              console.log(R + "Link Only Support youtu.be");
            }
            rl.close();
          });
          break;
        case "07":
        case "7":
          rl.question("Paste Your Link : ", (link) => {
            if (link.includes("youtu.be")) {
              console.log(Y+"Processing...")
              ytv(link).then((res) => {
                console.log(
                  G +
                    "\nSuccess get Direct Link Download" +
                    Y +
                    "\nCopy link and paste in your Browser:\n\n" +
                    G +
                    res +
                    `\n`
                );
              });
            } else {
              console.log(R + "Link Only Support youtu.be");
            }
            rl.close()
          });
          break;
        default:
          console.log(R + "Nothing Menu " + menu);
          rl.close();
      }
    }),
  1350
);
