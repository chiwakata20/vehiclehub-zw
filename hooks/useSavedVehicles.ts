"use client";
import {useEffect,useState} from "react";
export function useSavedVehicles(){const[ids,setIds]=useState<string[]>([]);useEffect(()=>{setIds(JSON.parse(localStorage.getItem("vehiclehub-saved")||"[]"))},[]);const toggle=(id:string)=>setIds(current=>{const next=current.includes(id)?current.filter(x=>x!==id):[...current,id];localStorage.setItem("vehiclehub-saved",JSON.stringify(next));return next});return{ids,isSaved:(id:string)=>ids.includes(id),toggle}}
