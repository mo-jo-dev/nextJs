import ClientButton from "./ClientButton";
import Link from "next/link";

export default function FirstServerComponent() {
    return (
        <>
            <h1>Welcome to NextJS... I am a server component</h1>
            <Link href="/blog">
                Click to go to blog
            </Link>
            <ClientButton/>
        </>
    )
}