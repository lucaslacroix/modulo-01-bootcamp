import { Request, Response } from 'express';
import createUser from './services/CreateUse';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Lucas', 
        email: 'lucas@email.com', 
        password: '123456'
    });

    return response.json({
        message: 'Hello world'
    })
}