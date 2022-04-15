import type { NextPage } from "next";
import Input from "../components/input";
import Button from "../components/botton";
import { useState } from "react";
import { cls } from "../libs/client/utils";
import { GiTrophy } from "react-icons/gi";

const Enter: NextPage = () => {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => {
    setMethod("email");
  };
  const onPhoneClick = () => {
    setMethod("phone");
  };
  return (
    <div className='mt-16 px-4'>
      <h3 className='text-white text-3xl font-bold text-center tracking-wide'>
        SUPPORTERS
      </h3>
      <GiTrophy className='text-white' />
      <div className='mt-12'>
        <>
          <div className='flex flex-col items-center'>
            <div className='grid border-b  w-full mt-8 grid-cols-2'>
              <button
                className={cls(
                  "pb-4 font-medium text-sm border-b-2",
                  method === "email"
                    ? " border-pink-600 text-pink-600"
                    : "border-transparent hover:text-white text-white"
                )}
                onClick={onEmailClick}
              >
                이메일
              </button>
              <button
                className={cls(
                  "pb-4 font-medium text-sm border-b-2",
                  method === "phone"
                    ? " border-pink-600 text-pink-600"
                    : "border-transparent hover:text-white text-white"
                )}
                onClick={onPhoneClick}
              >
                전화번호
              </button>
            </div>
          </div>
          <form className='flex flex-col mt-8 space-y-4'>
            {method === "email" ? (
              <Input name='email' label='이메일' type='email' required />
            ) : null}
            {method === "phone" ? (
              <Input
                name='phone'
                label='전화번호'
                type='number'
                kind='phone'
                required
              />
            ) : null}

            <Button text={"START"} />
          </form>
        </>
      </div>
    </div>
  );
};
export default Enter;
