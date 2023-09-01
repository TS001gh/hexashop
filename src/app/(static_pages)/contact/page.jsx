import Image from 'next/image';
import React from 'react';
import styles from './contact.module.css';

function Contact() {
  return (
    <div className="flex gap-14 justify-between items-center">
      <Image
        src={'contact.svg'}
        alt={'contact image'}
        width={400}
        height={400}
        className=" translate-y-[15%]"
      />
      <div className="conatct-side flex flex-col gap-12 w-[50%]">
        <h1 className=" text-5xl text-center uppercase header font-bold">
          Contact us
        </h1>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <form action="none" className="flex gap-4 flex-col">
          <div className="flex flex-col-reverse gap-5">
            <input
              type="text"
              id="user-name"
              className="p-3 outline-none text-slate-800 peer"
            />
            <label
              htmlFor="user-name"
              className="peer-focus:text-teal-400 transition-all"
            >
              Name
            </label>
          </div>
          <div className="flex flex-col-reverse gap-5">
            <input
              type="text"
              id="user-email"
              className="p-3 outline-none text-slate-800 peer"
            />
            <label
              htmlFor="user-email"
              className="peer-focus:text-teal-400 transition-all"
            >
              Email
            </label>
          </div>
          <div className="flex flex-col-reverse gap-5">
            <textarea
              id="user-message"
              placeholder={'Type your message here...'}
              cols="30"
              rows="10"
              className="placeholder-slate-900 text-slate-800 p-3 outline-none peer"
            />
            <label
              htmlFor="user-message"
              className="peer-focus:text-teal-400 transition-all"
            >
              Message
            </label>
          </div>
          <div className="flex gap-5 mt-4 items-center">
            <input
              type="checkbox"
              id="checkBox"
              className="appearance-none border-teal-500 border-2 w-4 h-4 checked:bg-teal-500 checked:border-teal-50 cursor-pointer transition-all"
            />
            <label htmlFor="checkBox" className="cursor-pointer">
              I accept the terms
            </label>
          </div>
          <div className={`text-center mt-5`}>
            <button
              type="submit"
              className={`p-5 px-16 ${styles.bg_grad} opacity-70 hover:opacity-100 rounded-sm transition-all`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
