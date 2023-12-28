const Loading = () => {
  return (
    <div className="flex flex-col items-center py-10 flex-grow">
        <div className="w-10 h-10 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
        <h2 className="text-xl mt-5 text-blue-500">Loading...</h2>
    </div>
  )
}
export default Loading 