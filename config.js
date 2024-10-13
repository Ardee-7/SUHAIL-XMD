const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_59_10_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzLFxuICAgICAgICA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICA1MixcbiAgICAgICAgMTMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc5LFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDQsXG4gICAgICAgIDksXG4gICAgICAgIDIxNixcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQwLFxuICAgICAgICA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICAzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMixcbiAgICAgICAgMjM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMixcbiAgICAgICAgMTUxLFxuICAgICAgICA2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICA2LFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2RzBxWDVoVnZ1blZTZFJEMUh2dlZMU3I2R2ZvK3NpNHU2eGpWb3pOZFQ4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzMkZPelNlbVNWeWRrSFlzTWFlQU1BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk3MTlkMjk4LThlMmMtNDk5MC1iZTI0LTJjZWM5MzUwMmQ2NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAxNyxcbiAgICAgIDE2NixcbiAgICAgIDcxLFxuICAgICAgMjQ2LFxuICAgICAgMjUwLFxuICAgICAgMTU3LFxuICAgICAgMTg0LFxuICAgICAgMTI5LFxuICAgICAgMzgsXG4gICAgICAxNDgsXG4gICAgICAyMDMsXG4gICAgICA0LFxuICAgICAgMCxcbiAgICAgIDE5LFxuICAgICAgODIsXG4gICAgICAyMSxcbiAgICAgIDE3LFxuICAgICAgMjM2LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMTY0LFxuICAgICAgNTUsXG4gICAgICAyMjksXG4gICAgICA4NixcbiAgICAgIDExNixcbiAgICAgIDI0NSxcbiAgICAgIDg0LFxuICAgICAgMjE0LFxuICAgICAgOTMsXG4gICAgICAxNTIsXG4gICAgICA4LFxuICAgICAgMjIzLFxuICAgICAgMTM0LFxuICAgICAgMTUzLFxuICAgICAgMTEsXG4gICAgICAxMzEsXG4gICAgICAxOTMsXG4gICAgICA0NSxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdSRExIRzhZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDgxMTM1ODcwOjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDkxMDUyNTU1NTkyNjc6NjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm5PbDZrSEVNL0FyN2dHR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaYjEvL0QxQmE2NWdOSWRnWERhMXdRWkZNMWtKZEE2UWFJMHZ0d2JOWXlrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVwYm5ub0FzZFA2VVJaZmoyY05OWVp2TVZXWG1ZQ090Vmhia284ZnU1amZYZUlMM3BPK0QwY0ZTdjdrc1hzSDgwd3QrODZDZHpoVkl4QVV4a3E5ZkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldXSzdxREM2SkhkOHFvL3Y0QUFJMG5SVk1nWmV4QTZERmx2ZTRqUDlNSjV2SnVYQ3pUWmxrUDBlcnFSTVJzTEhrMGRSWklKTWw1eXBSVHUwYytxK2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODExMzU4NzA6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4ODMxNTcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmUvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCZS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
