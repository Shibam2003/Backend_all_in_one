const nodemailer = require("nodemailer");

const sendMail = async(req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    //connect with smtp
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'murl.swaniawski30@ethereal.email',
            pass: '1SZqcdfHaa4VJAJmSx'
        }
    });

    let info = await transporter.sendMail({
        from: '"Shibam Chakraborty 👻" <shibamc55@gmail.com>', // sender address
        to: "satyamchakraborty14@gmail.com", // list of receivers
        subject: "Hello Shibam✔", // Subject line
        text: "Hello YT shibam gaming", // plain text body
        html: "<b>Hello YT shibam gaming</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);

    res.json(info);
}

module.exports = sendMail;