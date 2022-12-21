type user = {
    url: string,
    user: string,
    subheading: string
}

function User({ url, user, subheading }: user) {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex justify-center">
                <img className="rounded-full w-4/12" src={url} alt="" />
            </div>
            <h1 className="font-thin text-3xl">{user}</h1>
            <h3 className="text-gray-400 font-semibold">{subheading}</h3>

        </div>
    )
}

export default User