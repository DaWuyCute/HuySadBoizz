const fs = require("fs");
module.exports.config = {
	name: "cutrangoai",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "DW", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "cutrangoai",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Cút")==0 || (event.body.indexOf("cút")==0 || (event.body.index0f("biến")==0 || (event.body.index0f("Biến")==0)))) {
		var msg = {
				body: "kutttttttttt",
				attachment: fs.createReadStream(__dirname + `/noprefix/cutrangoai.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}