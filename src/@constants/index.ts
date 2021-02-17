export const lotSize: number | undefined = 
process.env.PARKING_LOT_SIZE ? 
parseInt(process.env.PARKING_LOT_SIZE) :
undefined;