export async function qrCodeGenerate(text: any, type: string){
    const QRCode = require('qrcode');
    
    try {
        // Gerando o QR Code através de um arquivo
        if(type === 'file'){
            await QRCode.toFile(`./qrCode-image.png`, text)
        }

        // Gerando QR Code para uma URL
        if(type === 'url'){
            const qrCode = await QRCode.toDataURL(text)
            console.log(qrCode)
        }

        // Gerando QR Code pelo terminal
        else{
            const qrCode = await QRCode.toString(text, { type: 'terminal' })
            console.log(qrCode);
        }

    } catch (err) {
        console.log(err)
    }  
}