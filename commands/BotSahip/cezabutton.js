const Discord = require("discord.js");
const conf = require("../../../../../a-sunucuayar.json");
const { Jail } = require("../../../../../a-emoji.json")

module.exports = {
  conf: {
    aliases: [],
    name: "cezabutton",
    owner: true,
  },

  run: async (client, message, args) => {
    client.api.channels(message.channel.id).messages.post({ data: {"content":`${Jail} Aşağıda ki düğmelerden ceza listenizi, ceza puanını ve aktif cezanızın kalan süresini görüntüleyebilirsiniz.`,"components":[{"type":1,"components":[

        {"type":2,"style":2,"custom_id":"cezapuan","label":"Ceza Puanı","emoji": { "id": "903565442206036019"}},
        {"type":2,"style":3,"custom_id":"cezalarım","label":"Cezalarım","emoji": { "id": "903564842978402304"}},
        {"type":2,"style":4,"custom_id":"kalanzaman","label":"Kalan Zamanım?","emoji": { "id": "903564832387760128"}}

        ]}]} })
  },
};

  
