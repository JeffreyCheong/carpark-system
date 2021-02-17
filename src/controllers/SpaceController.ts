import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Space } from "../entity/Space";

class SpaceController{

    static parking = async (req: Request, res: Response) => {
        let lotSize = process.env.PARKING_LOT_SIZE ? parseInt(process.env.PARKING_LOT_SIZE): undefined;
        const {carplate} = req.body
        let space = new Space();
        const spaceRepository = getRepository(Space);

        if(!lotSize) {
            res.send({
                success: false,
                status_code: 400,
                message: 'Parking Lot Size is undefined'
            })
        } else {
            if(lotSize < 1) {
                res.send({
                    success: false,
                    status_code: 400,
                    message: 'Parking Lot Size is undefined'
                })
            } else {
                let occupied = await spaceRepository.findOne({'carPlate': carplate}, {
                    select: ["carPlate", "slotNo"]
                });

                let count = await spaceRepository.find({});
                
                if(occupied) {
                    res.send({
                        success: true,
                        status_code: 200,
                        message: `${carplate} has been parked in one of the slot`
                    })
                } else {
                    space.carPlate = carplate;
                    space.slotNo = lotSize - count.length;
                    spaceRepository.save(space);

                    res.send({
                        success: true,
                        status_code: 200,
                        message: `${carplate} successfully parked in a lot`
                    })
                }
            }
        }
    }

    static unparking = async (req: Request, res: Response) => {
        const {carplate} = req.body;

        const spaceRepository = getRepository(Space);

        let unpark = await spaceRepository.findOne({'carPlate': carplate});
        
        if(unpark) {
            spaceRepository.delete(unpark)
        } else {
            res.send({
                success: false,
                status_code: 400,
                message: `unable to find ${carplate}`
            })
        }
        
    }

    static getOne = async (req: Request, res: Response) => {
        const {carplate} = req.body;
        
        const spaceRepository = getRepository(Space);

        let data = await spaceRepository.findOne({'carPlate': carplate}, {
            select: ["carPlate", "slotNo"]
        });

        res.send({
            success: true,
            status_code: 200,
            data: data
        })
    }
}

export default SpaceController;