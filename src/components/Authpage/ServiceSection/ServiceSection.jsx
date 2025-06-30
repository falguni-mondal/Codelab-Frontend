import React from 'react'
import ServiceItem from './ServiceItem'

const ServiceSection = () => {

    const services = [
        {
            head: "Unlimited Projects",
            body: "Build and manage as many coding projects as you like — no limits"
        },
        {
            head: "Collaborative Coding Rooms",
            body: "Create private coding rooms and invite up to 5 friends to code together in real time."
        },
        {
            head: "Share Projects Publicly",
            body: "Post your projects or code snippets to the public feed with just a click. Showcase your work"
        },
        {
            head: "Contribute to Projects",
            body: "Collaborate on projects shared by others in feeds. Learn from real-world codebases, and build connections."
        },
        {
            head: "Community Support",
            body: "Get help, share knowledge, and connect with fellow developers through CodeLab’s built-in community support."
        }
    ]

    return (
        <div className="service-menu max-w-1/2 shrink-0 flex justify-center items-center relative z-10">
            <div className="services-container w-[60%]">
                <h1 className="service-heading text-[2.2rem] font-semibold tracking-tight leading-none">Create your free account</h1>
                <p className="service-sub-heading text-[0.95rem] mt-5">Explore our core features for individual or a group.</p>
                <ul className='services-item-container m-0 p-0 flex flex-col gap-2 mt-5'>
                    {
                        services.map(item => (
                            <ServiceItem key={item.head} head={item.head} body={item.body} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ServiceSection