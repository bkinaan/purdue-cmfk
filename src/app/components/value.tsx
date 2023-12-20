export default function Value(props: {name: string, description: string}) {
    return(
        <div className='pb-10'> 
            <div className=' font-rock-salt text-3xl text-center underline decoration-wavy underline-offset-8 pb-4 text-white drop-shadow-xl'>
                {props.name}
            </div>
            <div className=' bg-green-50 font-gloria-hallelujah text-black text-center border-4 border-green-300 rounded-lg shadow-lg shadow-green-300 p-4 hover:translate-y-2 hover:shadow-md hover:shadow-green-300 hover:border-green-200 transition duration-300 ease-in-out'>
                {props.description}
            </div>
        </div>
    );
}