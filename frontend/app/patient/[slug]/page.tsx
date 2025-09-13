import Link from "next/link";
import Metbotics from "@/components/metbotics";
interface Page {
    params: { slug: string };
}

const Page = ({ params }: Page) => {

    return (
        <div className="text-amber-50">
            <div>
                {params.slug}
            </div>
            <Metbotics />
        </div>
    );
};

export default Page;
