export async function qrCodeGenerate(text: any){
    const QRCode = require('qrcode');
    
    try {
        const qrCode = await QRCode.toString(text, { type: 'terminal' })
  
        console.log(qrCode);
    } catch (err) {
        console.log(err)
    }  
}