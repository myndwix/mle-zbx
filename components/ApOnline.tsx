import Image from 'next/image';
import RuckusApOnline from '@/public/images/ap-online.svg';

interface Props {
    name: string,
}

function ApOnline({name}: Props){
    return(
    <div className='flex flex-col items-center mx-1 mt-5 bg-gray-800 p-3 rounded-md w-72'>
        <Image src={RuckusApOnline} priority alt='Card Reader Offline' className='w-16'/>
        <p className='text-white font-medium text-md mt-2'>{name}</p>
    </div>
    )
}

export default ApOnline;