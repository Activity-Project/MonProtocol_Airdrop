const readlineSync = require("readline-sync");
const fs = require("fs");
const delay = require("delay");
var fetch = require("node-fetch");
var chalk = require("chalk");
const {
    table
} = require('table');
var machineIdSync = require('node-unique-machine-id');

function claimToken(cookie) {
    const index = fetch('https://app.monprotocol.ai/api/trpc/quests.wheelSpin', {
            method: 'POST',
            headers: {
                'Host': 'app.monprotocol.ai',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0',
                'Accept': '*/*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://app.monprotocol.ai/questing/missions',
                'Content-Type': 'application/json',
                'X-Trpc-Source': 'react',
                'Content-Length': '45',
                'Origin': 'https://app.monprotocol.ai',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Te': 'trailers',
                'Cookie': cookie
            },
            body: JSON.stringify({
                'json': null,
                'meta': {
                    'values': [
                        'undefined'
                    ]
                }
            })
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

function dataAddress(cookie) {
    const index = fetch('https://app.monprotocol.ai/api/trpc/quests.user?input=%7B%22json%22%3Anull%2C%22meta%22%3A%7B%22values%22%3A%5B%22undefined%22%5D%7D%7D', {
            headers: {
                'Host': 'app.monprotocol.ai',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0',
                'Accept': '*/*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://app.monprotocol.ai/questing/missions',
                'Content-Type': 'application/json',
                'X-Trpc-Source': 'react',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Te': 'trailers',
                'Cookie': cookie,
            }
        })

        .then(async (res) => {
            const data = await res.json()
            return data;
        });

    return index;
}

function dataAddressPoint(cookie) {
    const index = fetch('https://app.monprotocol.ai/api/trpc/quests.points?input=%7B%22json%22%3Anull%2C%22meta%22%3A%7B%22values%22%3A%5B%22undefined%22%5D%7D%7D', {
            headers: {
                'Host': 'app.monprotocol.ai',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0',
                'Accept': '*/*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://app.monprotocol.ai/questing/missions',
                'Content-Type': 'application/json',
                'X-Trpc-Source': 'react',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Te': 'trailers',
                'Cookie': cookie,
            }
        })

        .then(async (res) => {
            const data = await res.json()
            return data;
        });

    return index;
}

function getTask(cookie) {
    const index = fetch('https://app.monprotocol.ai/api/trpc/quests.quests?input=%7B%22json%22%3Anull%2C%22meta%22%3A%7B%22values%22%3A%5B%22undefined%22%5D%7D%7D', {
            headers: {
                'Host': 'app.monprotocol.ai',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0',
                'Accept': '*/*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://app.monprotocol.ai/questing/missions',
                'Content-Type': 'application/json',
                'X-Trpc-Source': 'react',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Te': 'trailers',
                'Cookie': cookie,
            }
        })

        .then(async (res) => {
            const data = await res.json()
            return data;
        });

    return index;
}

function claimTask(cookie, taskid) {
    const index = fetch('https://app.monprotocol.ai/api/trpc/quests.setQuestCompletion', {
            method: 'POST',
            headers: {
                'Host': 'app.monprotocol.ai',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0',
                'Accept': '*/*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://app.monprotocol.ai/questing/missions',
                'Content-Type': 'application/json',
                'X-Trpc-Source': 'react',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Te': 'trailers',
                'Cookie': cookie,
            },
            body: JSON.stringify({
                'json': taskid
            })
        })

        .then(async (res) => {
            const data = await res.json();
            return data;
        });

    return index;
}

(async () => {
    if (fs.existsSync('loginMon.json')) {} else {
        fs.appendFileSync("loginMon.json", '[]');
    }

    console.log()

    console.log(chalk.yellow(`    Membership x ETL Discussion\n`))

    console.log(`    List Account Login`)
    console.log()
    var configData = fs.readFileSync(`loginMon.json`);
    var config = JSON.parse(configData)
    const detect = config;
    var totalAccount = config.length;

    let tableData = [
        ['id', 'Twitter', 'Twitter ID', 'Created', 'Points']
    ];
    const configTable = {
        columns: [{
            alignment: 'center'
        }, {
            alignment: 'center'
        }, {
            alignment: 'center'
        }, {
            alignment: 'center'
        }]
    };

    for (let index = 0; index < totalAccount; index++) {
        const cookie = detect[index].cookie;
        const checkDataToken = await dataAddress(cookie)
        const checkBalance = await dataAddressPoint(cookie)
        try {
            var twitterUsername = checkDataToken.result.data.json.twitterHandle
            var twitterID = checkDataToken.result.data.json.twitterId
            var created = checkDataToken.result.data.json.createdAt
            var balance = checkBalance.result.data.json.points
        } catch (err) {
            console.log(err)
            var twitterUsername = "Account Not Login";
            var twitterID = "Account Not Login";
            var created = "Account Not Login";
            var balance = "Account Not Login";
        }
        tableData.push([index, chalk.green(twitterUsername), twitterID, created, chalk.yellow(balance)])
    }
    console.log(table(tableData, configTable))

    console.log(chalk.white('[') + chalk.green('!') + chalk.white(']') + ` Mon Protocol\n`)
    console.log(chalk.white('[') + chalk.green('1') + chalk.white(']') + ` Input Cookie / Delete Cookie`)
    console.log(chalk.white('[') + chalk.green('2') + chalk.white(']') + ` Claim Wallet`)
    console.log(chalk.white('[') + chalk.green('3') + chalk.white(']') + ` Auto Clear All Task\n`)

    var pilihan = readlineSync.question('Vote?? ')
    console.log()
    if (pilihan == 1) {
        var dataVote = readlineSync.question('[!] Delete / Add ? : ')

        if (dataVote.toLowerCase() == "add") {
            var telegramToken = readlineSync.question('[!] Cookie: ')
            console.log()
            const arrayPush = detect.push({
                cookie: telegramToken
            });
            const testlistJson = JSON.stringify(detect);
            fs.unlinkSync(`loginMon.json`)

            fs.appendFileSync(`loginMon.json`, testlistJson);
            console.log(chalk.green('    Successfully input cookie'))
        } else if (dataVote.toLowerCase() == "delete") {
            var nomor = readlineSync.question("[+] Akun Nomor                   : ");
            const deletez = delete detect[nomor]
            var hasil = detect.filter(function (a) {
                return typeof a !== 'undefined';
            });
            const testlistJson = JSON.stringify(hasil);
            fs.unlinkSync('loginMon.json')

            fs.appendFileSync("loginMon.json", testlistJson);
            console.log(chalk.white('[') + chalk.green(`!`) + chalk.white(']') + ` Information  => ` + chalk.yellow(`Successfully Delete Account`))
        }
    } else if (pilihan == 2) {
        while (true) {
            for (let index = 0; index < totalAccount; index++) {
                const cookie = detect[index].cookie;

                const checkDataToken = await dataAddress(cookie)
                const checkBalance = await dataAddressPoint(cookie)
                var twitterUsername = checkDataToken.result.data.json.twitterHandle
                var twitterID = checkDataToken.result.data.json.twitterId
                var created = checkDataToken.result.data.json.createdAt
                var balance = checkBalance.result.data.json.points

                console.log(chalk.white('[') + chalk.green(`${index}/${totalAccount}`) + chalk.white(']'), `Successfully Login ${twitterUsername} [ ${balance} Points]`)

                var claimCold = await claimToken(cookie);
                try {
                    var balanceNow = claimCold.result.data.json.pointsWon;
                    console.log(chalk.green(`    Successfully Claim`))
                    console.log(chalk.white(`    Balance Claim : ${balanceNow}`))
                    console.log(chalk.white(`    Waiting For 60 Seconds to next account`))
                    await delay(60000)
                } catch (err) {
                    var error = claimCold.error.json.message;
                    console.log(chalk.red(`    Failure Claim`))
                    console.log(chalk.white(`    Information : `) + chalk.red(`${error}`))
                }
                console.log()
            }
            console.log()
            console.log(chalk.white(`    Waiting For 60 Minutes To Claim`))
            console.log()
            await delay(3600000)
        }
    } else if (pilihan == 3) {
        console.log()
        const select = readlineSync.question('[!] Account Number : ')
        console.log()
        for (let index = 0; index < totalAccount; index++) {
            const cookie = detect[select].cookie;

            const checkDataToken = await dataAddress(cookie)
            const checkBalance = await dataAddressPoint(cookie)
            var twitterUsername = checkDataToken.result.data.json.twitterHandle
            var twitterID = checkDataToken.result.data.json.twitterId
            var created = checkDataToken.result.data.json.createdAt
            var balance = checkBalance.result.data.json.points

            console.log(chalk.white('[') + chalk.green(`${index}/${totalAccount}`) + chalk.white(']'), `Successfully Login ${twitterUsername} [ ${balance} Points]`)

            const getTaskData = await getTask(cookie);
            const lengthData = getTaskData.result.data.json

            for (let index = 0; index < lengthData.length; index++) {
                const taskData = lengthData[index].quests.title;
                const taskId = lengthData[index].quests.id;

                console.log(chalk.white('[') + chalk.green(`${index}/${lengthData.length}`) + chalk.white(']'), `${taskData}`)
                console.log(`    Task ID : ` + chalk.yellow(taskId))

                const claim = await claimTask(cookie, taskId);
                try {
                    var success = claim.result.data.json
                } catch (err) {

                }

                try {
                    var failure = claim.error.json.message
                } catch (err) {

                }
                if (success) {
                    console.log(chalk.green(`    Successfully ClaimTask`))
                    await delay(3000)
                } else if (failure) {
                    console.log(chalk.red(`    ${failure}`))
                    await delay(3000)
                } else {
                    console.log(claim)
                }
            }
        }
    }
})();


function licenseCheck(license) {
    var license = fetch(`https://whitelist-bot.com/api.php?license=${license}`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "cookie": "_ga=GA1.2.1441011143.1656930356"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET"
        })

        .then(async res => {
            const data = await res.json()
            return data
        })
    return license
}
