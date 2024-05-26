import Image from 'next/image';
import RuckusApOffline from '@/public/images/ap-offline.svg';


interface Props {
    name: string,
}

function ApOffline({name}: Props){
    return(
    <div className='flex flex-col items-center mx-1 mt-2 bg-gray-800 p-3 rounded-md w-52 h-32 justify-between'>
        <Image src={RuckusApOffline} priority alt='Card Reader Offline' className='w-20'/>
        <p className='text-white font-medium text-xs mt-2'>{name}</p>
    </div>
    )
}

export default ApOffline;