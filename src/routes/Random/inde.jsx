
function Inde() {
    return (
        <div className="grid grid-cols-2 h-screen">
        <div className="bg-cover bg-center bg-red-400" >
        </div>
        <div className="flex flex-col justify-center p-4">
          <h2 className="text-2xl font-bold">Create Account</h2>
          <form className="space-y-4">
            <div>
              <label for="firstname" className="block">First Name</label>
              <input type="text" id="firstname" className="block w-full p-2 pl-10 text-sm text-gray-700" />
            </div>
            <div>
              <label for="lastname" className="block">Last Name</label>
              <input type="text" id="lastname" className="block w-full p-2 pl-10 text-sm text-gray-700" />
            </div>
            <div>
              <label for="email" className="block">Email</label>
              <input type="email" id="email" className="block w-full p-2 pl-10 text-sm text-gray-700" />
            </div>
            <div>
              <label for="password" className="block">Password</label>
              <input type="password" id="password" className="block w-full p-2 pl-10 text-sm text-gray-700" />
            </div>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Signup</button>
            <p className="text-sm text-gray-600">Already have an account? <a href="#" className="text-blue-600 hover:text-blue-800">Login</a></p>
          </form>
          <div className="flex space-x-4">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Signup with Google</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Signup with Facebook</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Inde;
  