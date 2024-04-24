'use client'
import Image from "next/image";
import { QueryResultRow, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { create } from "./lib/actions"; 
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
const { v4: uuidv4 } = require('uuid');
import { createNotebook } from "./lib/actions";
import { Notebook } from "./lib/definitions";
import CustomModal from "./ui/components/modal";
import { Input, ColorPicker, Checkbox } from 'antd';
import { Color } from "antd/es/color-picker";
import { MuiColorInput } from "mui-color-input";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import BasicModal from "./ui/components/modal";
import { TextField } from "@mui/material";

export default function Home() {

  // states
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '',
    favorite: false
  })

  const handleFormdataChange = (e: ChangeEvent<HTMLInputElement> | CheckboxChangeEvent) => {
    
    // if(instanceof e == ChangeEvent<HTMLInputElement>){
    //   console.log(e.target)
    // }
    // console.log(e.target)
    const {name, value, checked} = e.target

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value ? value : checked
    }))

    console.log(formData)
  }

  const data = {
    id: uuidv4(),
    name: "My 1st Notebook",
    description: "xxxxxxxxxxxxxxxxx",
    color: "xxxxxx",
    favorite: false
  }

  // const handleCreateNotebook = async(data: Notebook) => {
  //   try{
  //     let res = await createNotebook(data)
  //     console.log(res)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <button onClick={create}>create</button> */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>Notebooks go here</p>
        <button onClick={(e) => console.log('clicked')}>Create a notebook</button>
        {/* <CustomModal
          title = "Create a Notebook"
          isModalOpen = {isModalOpen}
          setIsModalOpen = {setIsModalOpen}
        >
          <div>
            <Input placeholder="Name" name = 'name' value = {formData.name} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormdataChange(e)}/>
            <Input placeholder="Description" name = 'description' value = {formData.description} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormdataChange(e)}/>
            <Checkbox name = 'favorite' checked = {formData.favorite} onChange={(e: CheckboxChangeEvent) => handleFormdataChange(e)}>Favorite</Checkbox>
            <input type="color" name = "color" defaultValue="rgb(97, 48, 153, 1)" onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormdataChange(e)}/>            
          </div>
        </CustomModal> */}
        <BasicModal>
          <TextField placeholder="Name" name = 'name' value = {formData.name} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormdataChange(e)}/>
          <TextField placeholder="Description" name = 'description' value = {formData.description} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormdataChange(e)}/>
          <Checkbox name = 'favorite' checked = {formData.favorite} onChange={(e: CheckboxChangeEvent) => handleFormdataChange(e)}>Favorite</Checkbox>
          <input type="color" name = "color" defaultValue="rgb(97, 48, 153, 1)" onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormdataChange(e)}/>   
        </BasicModal>
      </div>
    </main>
  );
}
