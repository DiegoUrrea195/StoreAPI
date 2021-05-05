import { Request, Response, } from "express";
import { join, extname } from "path";
import { createUuid } from "../../../../src/server/Shared/util/uuid";
import httpStatus from "http-status"

export async function createNewBill(req: Request, res: Response) {
  
    const id = createUuid();
    const tempPath = req.file.path;
  	const targetPath = join(__dirname, `/etc/images/${id}.png`);

    console.log(__dirname,"/tmp");
    
    console.log(extname(req.file.originalname).toLowerCase());

    res.send(httpStatus.OK);
    

/*    if( extname(req.file.originalname).toLowerCase() === ".png" ) {

            if (err) return handleError(err, res);
              res .status(200) .contentType("text/plain") .end("File uploaded!"); 
            
    }
*/
}

