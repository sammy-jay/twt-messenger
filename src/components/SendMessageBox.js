import {useState} from "react"
import {AiOutlineMessage} from "react-icons/ai"

const SendMessageBox = ()=>{
      const [data, setData] = useState({content: "", from: "", to: ""})
  const handleChange = (e)=> setData({...data, [e.target.name]: e.target.value})
    return (
        <article className="bg-white my-[3rem] w-[90vw] xs:w-[80vw] mx-auto sm:w-[500px] rounded-md shadow-md py-5 px-5">
      
      <div className="flex space-x-4 items-center">
      <AiOutlineMessage className="text-5xl font-bold text-blue-500"/>
        <h2 className="font-semi-bold text-3xl">twt messenger<span className="block text-sm text-blue-200 italic">...getting your messages across</span></h2>
      </div>
      
      
     <div className="mt-[3rem] space-y-[2rem]">
      <div className="space-y-3 flex flex-col w-full">
        <label className="text-md text-blue-500">Send as</label>
        <input type="text" className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white focus:shadow placeholder:italic placeholder:text-gray-400" placeholder="tabby technologies" name="from" onChange={handleChange}/>
      </div>
      <div className="space-y-3  flex flex-col  w-full">
      <label className="text-ms text-blue-500">Send to</label>
      <input type="text" className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full md:w-80% py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white focus:shadow placeholder:italic placeholder:text-gray-400" placeholder="2341234567890"  name="to" onChange={handleChange}/>
    </div>
    <div className="space-y-3 flex flex-col w-full">
      <label className="text-md text-blue-500">Your message</label>
      <textarea className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white focus:shadow placeholder:italic placeholder:text-gray-400 resize-none" placeholder="hi, you sent a job request"  name="content" onChange={handleChange}></textarea>
    </div>
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Send Message
    </button>
      </div>
     </article>
     )
}

export default SendMessageBox