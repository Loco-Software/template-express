import {Request, Response, NextFunction } from 'express'

export const _router = (req: Request, res: Response, nxt: NextFunction): void => {
    res.send("Hello World!")
    res.status(200)
    res.end()
}