import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Example({data,txnId}) {
    return (
        <>
            <Card className="mt-6 w-full bg-white rounded-lg p-10">
                <CardBody>
                    <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Transaction
                    </Typography>
                    <Typography>
                        data
                    </Typography>
                </CardBody>
                <CardFooter className="ransition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 pt-0 mt-5 bg-indigo-600 rounded-md w-48">
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center text-white gap-2">
                            Learn More
                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </>

    );
}