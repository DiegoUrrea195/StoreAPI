import { compare, hash, genSalt } from "bcrypt";

export async function createHash(password: string): Promise<string> {

    var salt: string = await genSalt(10);
    var hash_: string = await hash(password, salt);

    return hash_;

}

export async function comparePassword(hash: string, password: string): Promise<boolean> {
    
    var result = await compare(password, hash);

    return result;
    
}