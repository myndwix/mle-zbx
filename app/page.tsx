'use client'
import { FormEvent } from 'react'

export default function Home() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
   console.log(formData)
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 bg-slate-50">
      <div className="flex flex-col w-[24rem] bg-white py-40 px-10 shadow-md items-center">
        <form onSubmit={onSubmit}>
          <span className="py-1 px-2 bg-red-600 text-center text-white w-max mx-auto mb-5">ZABBIX</span>
          <input className="outline-none border border-slate-300 focus:border-slate-500 p-2 mt-2 text-sm w-full text-slate-800" type="text" name="username" id="username" placeholder="Enter Username"/>
          <input className="outline-none border border-slate-300 focus:border-slate-500 p-2 mt-2 text-sm w-full text-slate-800" type="password" name="username" id="username" placeholder="Enter Password"/>
          <button className="p-3 bg-blue-600 text-white text-sm mt-2 w-full" type="submit">Sign in</button>
        </form>
      </div>
    </main>
  );
}
