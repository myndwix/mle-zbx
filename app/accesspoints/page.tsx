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
            const chunkedData= [];
            const {data} = await axios.get<User[]>('/api/accesspoints')
            for (let i = 0; i < data.length; i += chunkSize) {
                chunkedData.push(data.slice(i, i + chunkSize));
            }
            setApDescription(chunkedData)
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
<div className='flex px-5 bg-black h-screen'>
    <div className="flex w-full flex-wrap h-max gap-x-2">
        {Array.from({length: 28}, (v, i) => 
          <div key={i} className='flex flex-col items-center mx-1 mt-5 bg-gray-800 p-3 rounded-md'>
          <div className='relative'>
            <Skeleton className="w-44 h-24 rounded bg-gray-500" />
          </div>
          <Skeleton className="w-32 h-[16px] rounded-lg bg-gray-500 mt-2" />
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
        <div className="embla bg-black h-screen pl-2 pt-3" ref={emblaRef}>
      <div className="embla__container">
        {apDescription.map((page:any, pageIndex:number) => (
          <div className="embla__slide flex flex-wrap items-center h-full" key={pageIndex}>
            {page.map((number:any, numberIndex:number) => (
              number.value===0 ? <ApOnline key={number.triggerid} name={number.itemname}/> : <ApOffline key={number.triggerid} name={number.itemname}/>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  );
            {/* {apDescription.map(ap => ap.value===0 ? <ApOnline key={ap.triggerid} name={ap.itemname}/> : <ApOffline key={ap.triggerid} name={ap.itemname}/>)} */}
}


// export const dynamic = 'force-dynamic';
export default AccessPoints;