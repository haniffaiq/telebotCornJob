import cron from 'node-cron';
import TelegramBot from 'node-telegram-bot-api';
const token = '5561594823:AAHcrUzwmEdV-ysuouej1r1mtjLB3E3YkTU';
const bot = new TelegramBot(token, { polling: true });
const chatIDGroup = -1001761890308
import { localAPI, newAPI } from './baseAPI.js';

const getDataDevice = async () => {
    await localAPI
        .get(`/v3/data/compare`)
        .then((res) => {
            // console.log(res);
            messageFormat(res.data)
            // setTimeout(function(){
            //     bot.sendMessage(chatIDGroup, text) 
            // }, 1000)
            // bot.sendMessage(chatIDGroup, text)

        })
        .catch((err) => {
            console.log(err);
        })

}

const messageFormat = async (data) => {
    let text;
    let format = "";
    for (let i = 0; i < data.length; i++) {
        format = format + "\n" +
            "Kode Kebun : " + data[i].code_farm + "\n" +
            "Delay : " + data[i].delay + "Menit" + "\n"
    }

    text = "Daftar Device yang mati adalah : " + "\n" + format
    setTimeout(function () {
        bot.sendMessage(chatIDGroup, text)
    }, 1000)

}

cron.schedule('1 1 6,12,6 * * *', () => {

    getDataDevice();


}, {
    scheduled: true,
    timezone: "Asia/Jakarta"
});

