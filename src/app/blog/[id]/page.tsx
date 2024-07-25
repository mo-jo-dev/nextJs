import Link from "next/link"
export default function Blog({params}:{params:{id:string}}) {
    return (
        <>
            Blog {params.id}
            <Link href="/blog/5/comments">
                Go to blog Comment
            </Link>
        </>
    )
}