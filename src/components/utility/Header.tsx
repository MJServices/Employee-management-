const Header = () => {
  return (
    <header className="text-white p-4 pt-6 md:pl-12 md:pt-10 bg-[#1c1c1c] flex items-center justify-between">
        <section>
            <h1 className="text-white text-xl font-thin">
                Hello,
                <div className="text-3xl font-semibold -mt-2">Minhaj👋</div>
            </h1>
        </section>
        <section>
            <button style={{ fontFamily: "Roboto" }} className="bg-red-500 font-semibold py-1 md:py-2 md:px-6 px-4 mr-5 mt-4 md:mr-12 rounded">Logout</button>
        </section>
    </header>
  )
}
export default Header