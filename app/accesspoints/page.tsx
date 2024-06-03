'use client'
import { Suspense, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import ApOnline from '@/components/ApOnline';
import ApOffline from '@/components/ApOffline';
import { Skeleton } from "@/components/ui/skeleton"
import { CircleX } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import delay from 'delay';

interface User{
    hostid: number,
    hostname: string,
    ip: string,
    itemid: number,
    itemname: string,
    key_: string,
    triggerid: number,
    status: number,
    value: number
}

const AccessPoints = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const [pageCount, setPageCount] = useState(0);

    const [apDescription, setApDescription] = useState<any>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [isError, setError] = useState<any>('');
    const getData = async () => {
        try{
            const chunkSize = 100;
            // const chunkedData= [];
            const {data} = await axios.get<User[]>('/api/accesspoints')
            // for (let i = 0; i < data.length; i += chunkSize) {
            //     chunkedData.push(data.slice(i, i + chunkSize));
            // }
            setApDescription(data)
            await delay(2000);
            setLoading(false);
            setPageCount(Math.ceil(data.length/10));
        }
        catch(err: any){
            console.log('error')
            setLoading(false);
            setError(err)
        }
    }

    useEffect(() => {
        getData();
        let interval = setInterval(getData,60000);
      
        return () => clearInterval(interval);
    }, [])
       

if(isLoading)
return(
<div className='flex flex-col px-2 bg-black h-screen'>
  <h1 className='text-white font-semibold text-lg ml-2 mt-3'>Zone Director</h1>
    <div className="flex w-full flex-wrap h-max gap-x-1">
        {Array.from({length: 38}, (v, i) => 
          <div key={i} className='flex flex-col items-center mx-1 mt-3 bg-gray-800 p-3 rounded-md'>
            <div className='relative'>
              <Skeleton className="w-20 h-16 rounded bg-gray-500" />
            </div>
            <Skeleton className="w-32 h-[12px] rounded-lg bg-gray-500 mt-2" />
          </div>
        )}
    </div>
  <h1 className='text-white font-semibold text-lg ml-2 mt-3'>Smart Zone</h1>
  <div className="flex w-full flex-wrap h-max gap-x-1">
        {Array.from({length: 18}, (v, i) => 
          <div key={i} className='flex flex-col items-center mx-1 mt-3 bg-gray-800 p-3 rounded-md'>
            <div className='relative'>
              <Skeleton className="w-20 h-16 rounded bg-gray-500" />
            </div>
            <Skeleton className="w-32 h-[12px] rounded-lg bg-gray-500 mt-2" />
          </div>
        )}
    </div>
</div>
)
if(isError)
return (
    <div className='w-full h-screen flex justify-center items-center bg-black'>
        <div className='w-1/4 h-20 bg-gray-300 rounded p-4 flex'>
            <CircleX className='text-red-700'/>
            <div className='ml-2'>
                <h3 className='font-semibold text-lg'>An Error occured</h3>
                <p className='text-md text-slate-900'>{isError.message}</p>
            </div>
        </div>
    </div>
)
else
  return (
    <>
        <div className="bg-black pl-2 pt-3 h-full">
      <div className="flex flex-col overflow-y-auto">
        <h1 className='text-white text-lg ml-2 font-semibold'>Zone Director</h1>
        <div className='flex flex-wrap bg-black'>
          {apDescription.filter((item:{hostid:number}) => item.hostid===10588).map((ap:any, pageIndex:number) => (
                ap.value===0 ? <ApOnline key={ap.triggerid} name={ap.itemname}/> : <ApOffline key={ap.triggerid} name={ap.itemname}/>
              
          ))}
        </div>
        <h1 className='text-white text-lg ml-2 font-semibold mt-5'>Smart Zone</h1>
        <div className='flex flex-wrap bg-black'>
          {apDescription.filter((item:{hostid:number}) => item.hostid===10886).map((ap:any, pageIndex:number) => (
                ap.value===0 ? <ApOnline key={ap.triggerid} name={ap.itemname}/> : <ApOffline key={ap.triggerid} name={ap.itemname}/>
              
          ))}
        </div>
      </div>
    </div>
    </>
  );
            {/* {apDescription.map(ap => ap.value===0 ? <ApOnline key={ap.triggerid} name={ap.itemname}/> : <ApOffline key={ap.triggerid} name={ap.itemname}/>)} */}
}


// export const dynamic = 'force-dynamic';
export default AccessPoints;