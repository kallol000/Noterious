'use server'

import { db } from "@vercel/postgres"
import { NextResponse } from "next/server"
import { Notebook, Note } from "./definitions"
export  async function create(){
    const client = await db.connect()
    try{
        await client.sql `CREATE TABLE IF NOT EXISTS Pets(Name varchar(255), Owner varchar(255))`
        const result = await client.sql `INSERT INTO Pets (Name, Owner) VALUES ('new', 'old')`
        // return NextResponse.json({result}, {status:200})
        console.log(result)
    }catch(err){
        // return NextResponse.json({err}, {status:500})
        console.log(err)
    }
    
    const pets = await client.sql `SELECT * FROM Pets;`
    return pets.rows
}

export async function createNotebook(data:Notebook){
    const client = await db.connect()
    const {id, name, description, color, favorite} = data
 
    try{
        await client.sql `CREATE TABLE IF NOT EXISTS Notebooks(ID varchar(255) PRIMARY KEY, Name varchar(255), Description varchar(255), Color varchar(255), Favorite BOOLEAN)`
        const res = await client.sql `INSERT INTO Notebooks (ID, Name, Description, Color, Favorite) VALUES (${id},${name},${description},${color},${favorite})`
        return res.rows 
    }catch(err){
        console.log(err)
    }
}