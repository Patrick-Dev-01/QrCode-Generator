import { Request, Response, Router } from 'express';
import { qrCodeGenerate } from './config/qrcode';

const routes = Router();

routes.post('/generate/text', (request: Request, response: Response) => {
    const { text } = request.query;

    qrCodeGenerate(text)

    response.status(200).send()
})

export { routes };