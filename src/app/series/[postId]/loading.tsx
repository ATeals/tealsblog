import { PostBody, SKPostBody } from "@/components/Posts";
import { Skeleton as SKPostHeader } from "./_components/PostHeader";

export default () => {
    return (
        <>
            <section className="flex flex-col w-full">
                <SKPostHeader />
                <SKPostBody />
            </section>
        </>
    );
};
