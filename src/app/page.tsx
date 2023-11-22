export default function Home() {
  return (
    <>
      <main className="w-[50vw] h-[90vh] rounded-[10px] bg-white flex justify-center items-center flex-col">
          <div className="text-lg font-semibold text-gray-500 mt-4 bg-cover
          bg-[url(../assets/imgForm.svg)] w-[40%] h-[40%] bg-center"/>

          <form action="https://formsubmit.co/daniellobo121229@gmail.com" method="post" className="flex justify-between items-center gap-[20px] flex-col w-full h-full p-10">
            
            <div className="flex justify-around items-center gap-[20px] flex-col w-full">
              
              <input type="text" name="name" className="w-full h-[40px] rounded-lg bg-transparent border-2 
              border-zinc-600 px-3 relative" placeholder="User Name:" required/>
              <input type="email" name="email" className="w-full h-[40px] rounded-lg bg-transparent border-2 
              border-zinc-600 px-3 relative" placeholder="Email:" required/>
              <textarea name="message" id="" cols={30} rows={10} className="w-full h-[40px] rounded-lg bg-transparent border-2 
              border-zinc-600 p-3 min-h-[80px] max-h-[130px]" placeholder="Send the content here" required/>
              
            </div>

              <button type="submit" className="w-[80%] h-[35px] rounded-full font-medium -tracking-[-1.5] transition 
              ease-in-out delay-75 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 
              hover:drop-shadow-[0_10px_10px_#8d5df6] text-white">Send</button>
            

            {/*API configurations*/}

            <input type="hidden" name="_subject" value={"Novo Contato"} />
            <input type="text" name="_honey" className="hidden"/>
            <input type="hidden" name="_captcha" value={"false"}/>

          </form>
      </main>
    </>
  )
}
