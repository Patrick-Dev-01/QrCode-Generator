import { Request, Response, Router } from 'express';
import { qrCodeGenerate } from './config/qrcode';

const routes = Router();

routes.post('/generate/text', (request: Request, response: Response) => {
    const { text } = request.query;

    qrCodeGenerate(text, 'terminal')

    response.status(200).send()
})

routes.post('/generate/url', (request: Request, response: Response) => {
    const { url } = request.query;

    qrCodeGenerate(url, 'url')

    response.status(200).send()
})

routes.post('/generate/file', (request: Request, response: Response) => {
    const { text } = request.query;

    qrCodeGenerate(text, 'file')

    response.status(200).send()
})

export { routes };