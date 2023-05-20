import React from "react";
import Container from "./container";


const Service = () => {
    return (
        <Container>
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                <div className="lg:col-span-2 xl:col-auto">
                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                        <h1 className="text-left font-semibold pb-2 text-indigo-800 text-2xl">afdaads</h1>
                        <p className="text-2xl leading-normal ">
                            Share a real <span className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">testimonial</span>
                            that hits some of your benefits from one of your popular customer.
                        </p>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                    <h1 className="text-left font-semibold pb-2 text-indigo-800 text-2xl">afdaads</h1>
                        <p className="text-2xl leading-normal ">
                            Make sure you only pick the <span className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">right sentence</span>
                            to keep it short and simple.
                        </p>

                    
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                    <h1 className="text-left font-semibold pb-2 text-indigo-800 text-2xl">afdaads</h1>
                        <p className="text-2xl leading-normal ">
                            This is an <span className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">awesome</span> landing page template I&apos;ve seen. I
                            would use this for anything.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}


export default Service;