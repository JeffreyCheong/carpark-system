import { Request, Response, NextFunction } from "express";

export const checkIPs = (req: Request, res: Response, next: NextFunction) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(typeof(ip))
    if(ip && typeof(ip) !== 'string') {
        
    } else {
        ip = ip ? ip.split(':').slice(-1): undefined;
    }
    
    next();
}