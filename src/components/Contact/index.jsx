import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { LuPlus } from "react-icons/lu";
import { TbMailFilled } from "react-icons/tb";

function index() {
  return (
    <>
      <div className="container">
        <div className="bg-gray-500 flex items-center justify-center text-6xl text-secondary p-20 my-6 rounded-lg">
          <h1 className="font-semibold">Contact Us</h1>
        </div>
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 flex justify-center">
          <form className="w-full max-w-lg" onSubmit={(e)=> console.log(e.target)}>
            <h2 className="text-4xl text-center font-semibold mb-4">
              Get in Touch
            </h2>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block tracking-wide text-gray-700 text-sm mb-2"
                  htmlFor="email"
                >
                  Your email address
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-black rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  placeholder="your-email@example.com"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block tracking-wide text-gray-700 text-sm mb-2"
                  htmlFor="name"
                >
                  Your name
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-black rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block tracking-wide text-gray-700 text-sm mb-2"
                  htmlFor="subject"
                >
                  Subject (Optional)
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-black rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="subject"
                  type="text"
                  placeholder="Subject (Optional)"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block tracking-wide text-gray-700 text-sm mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full text-gray-700 border border-black rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="description"
                  placeholder="Write a message..."
                ></textarea>
                <label
                  className="block tracking-wide text-gray-700 text-[0.50rem] mb-2"
                  htmlFor="description"
                >
                  Have any query regarding our service or something less content
                  please contact us we touch you soon
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <div className="block tracking-wide text-gray-700 text-sm mb-3">
                  Attachment (Optional)
                </div>
                <div>
                  <label
                    className="cursor-pointer border p-[0.50rem] drop-shadow-lg px-4 rounded-lg bg-white font-[Georgia]"
                    htmlFor="attachment"
                  >
                    {" "}
                    <LuPlus className="inline-flex" /> Add files here
                  </label>
                </div>
                <input
                  className="cursor-pointer absolute opacity-0 -z-1"
                  id="attachment"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <button
                  className="shadow w-full bg-primary-700 hover:bg-primary-800 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded-lg font-[Georgia]"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="container mx-auto my-5 flex justify-between">
            <div className="flex flex-col items-center">
                <div className="border p-6 rounded-lg bg-gray-400"><span><FaPhoneAlt className="text-secondary text-2xl"/></span></div>
                <div className="font-bold">Phone</div>
                <div>(+005) 5896 72 78 79</div>
            </div>
            <div className="flex flex-col items-center">
            <div className="border p-6 rounded-lg bg-gray-400"><span><TbMailFilled className="text-secondary text-2xl"/></span></div>
            <div className="font-bold">Email</div>
                <div>support@farmart.com</div>
            </div>
            <div className="flex flex-col items-center">
            <div className="border p-6 rounded-lg bg-gray-400"><span><ImLocation2 className="text-secondary text-2xl"/></span></div>
                <div className="font-bold">Location</div>
                <div>172 Richmond Hill Ave St, </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default index;
