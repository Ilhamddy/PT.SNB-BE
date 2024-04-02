
export interface INews {
    title: string,
    description: string,
    image: string
    createdAt:  Date,
    updatedAt:  Date,
}


export interface IUser {
    id: number;
    name: string ;
    email: string ;
    contact: number ;
    address: string ;
    password: string ;
    createdAt: Date;
    updatedAt: Date;
}
  
export interface ILogin {
    usernameOrEmail: string,
    password: string
}