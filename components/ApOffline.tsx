import Image from 'next/image';
import RuckusApOffline from '@/public/images/ap-offline.svg';


interface Props {
    name: string,
}

function ApOffline({name}: Props){
    return(
    <div className='flex flex-col items-center mx-1 mt-5 bg-gray-800 p-3 rounded-md w-72'>
        <Image src={RuckusApOffline} priority alt='Card Reader Offline' className='w-16'/>
        <p className='text-white font-medium text-md mt-2'>{name}</p>
    </div>
    )
}

export default ApOffline;