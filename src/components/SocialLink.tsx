type SocialLink = {
    urlImage: string,
    urlSocial: string,
    subheading: string
}

export default function SocialLink({ urlImage, subheading, urlSocial }: SocialLink) {
    return (
        <a href={urlSocial} target='_blank' className="hover:scale-110 transition-transform">
            <div className="p-2 flex justify-start items-center gap-8 bg-slate-50/10 rounded-md w-screen max-w-3xl ">
                <div>
                    <img className="rounded-full w-12" src={urlImage} alt="" />
                </div>
                <h2 className="flex flex-wrap max-w-sm">
                    {subheading}
                </h2>

            </div>
        </a>
    )
}
