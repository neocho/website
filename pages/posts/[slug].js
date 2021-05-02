import Link from 'next/link';
import Head from 'next/head';
import { getPosts, getPostSlug } from '@api';
import 'tailwindcss/tailwind.css';

export default function Post(props) {
    return (
        <div className="min-h-screen p-7"> 
            <Head>
                <title>{props.title}</title>
            </Head>
			<div className="font-sans text-base font-bold w-30">
				<Link href='/posts'>
					<a>&lt; Back</a>
				</Link> 
			</div>
			<div className="mt-5 w-30">
                <h1 className="font-sans text-base font-bold text-xl">{props.title}</h1>
                <div dangerouslySetInnerHTML={{__html: props.content}} className="font-sans text-base mt-5"></div> 
			</div>
		</div>
    )
}

export async function getStaticProps(context) {
    var slug = await getPostSlug(context.params.slug);

    return {
        props: slug 
    }
}

export async function getStaticPaths() {
    var paths = await getPosts();

    paths = paths.map(post => ({
        params: {slug: post.slug}
    }));

    return {
        paths: paths, 
        fallback: false
    }
}