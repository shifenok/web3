import Image from "next/image"
const profile = () => {
    return <div className="bg-slate-300 h-screen p-12">
        <div className=" bg-white flex border border-white rounded-lg p-[8px]">
            <Image className="flex shrink-0 rounded-full w-[80px] h-[80px]" width={100} height={100} src="https://cdn.novenn.com/random/images/2020-05-24.jpg" alt={"image card"} />
            <div className="flex-1 ml-2 space-y-2">
                <div className="flex flex-col">
                    <p className=" mb-1 text-black font-semibold">艾琳-加福德</p>
                    <p className=" text-sm text-gray-500 font-medium">产品工程师</p>
                </div>
                <button className=" hover:bg-cyan-800 rounded-full text-sm border border-cyan-400 px-4 text-cyan-400">信息</button>
            </div>
        </div>
    </div>
}

const card = () => {
    return <div>
        {profile()}
    </div>
}

export default card