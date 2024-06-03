import Image from 'next/image';
import RuckusApOffline from '@/public/images/ap-offline.svg';
import NoConnectionBlack from '@/public/images/offline.gif';



interface Props {
    name: string,
}

function ApOffline({name}: Props){
    return(
    <div className='flex flex-col items-center mx-1 mt-2 bg-gray-800 p-3 rounded-md w-36 h-24 justify-between'>
        <div className='relative'>
            <Image src={RuckusApOffline} priority alt='Card Reader Offline' className='w-14 mt-4'/>
            <Image alt='Icon Card Reader Offline' className='w-10 absolute -top-2 left-2' src={NoConnectionBlack} unoptimized/>
        </div>

        <p className='text-yellow-500 font-medium text-[9px] mt-2'>{name}</p>
    </div>
    )
}

export default ApOffline;