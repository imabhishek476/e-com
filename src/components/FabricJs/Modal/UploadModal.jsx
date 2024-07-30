
function UploadModal() {
  return (
    <div id="myModal" className="fixed bottom-0 bg-white shadow-lg p-4 z-50">
      <div className="flex w-[384px] justify-between items-center text-sm">
        <p className="">Upload an Image to place it on product</p>
        <span className="close cursor-pointer text-xl">×</span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="w-full">
          <input
            type="file"
            maxLength="60"
            className="w-full mt-2 p-2 rounded focus:border-none"
          />
        </div>

        {/* <button className="confirm mt-2 bg-blue-500 text-white py-2 px-4 rounded">
          ✔
        </button> */}
      </div>
    </div>
  );
}

export default UploadModal;
