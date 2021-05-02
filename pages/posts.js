import Link from 'next/link';
import { getPosts } from '@api'; 
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

export default function Posts(props) {
	return (
		<div className="min-h-screen p-7"> 
			<Head>
				<title>Posts</title>
			</Head>
			<div className="font-sans text-base font-bold w-30">
				<Link href='/'>
					<a>&lt; Back</a>
				</Link> 
			</div>
			<div className="mt-5 w-30">
				{
					props.posts.map((post,idx) => {
						return(
							<a href={'/posts/' + post.slug} key={idx}>
								<h1 className="hover:underline font-sans text-base font-semibold mb-2">{post.date}: {post.title}</h1>
							</a>	
						);
					})
				}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const allPosts = await getPosts();

	return {
		props: {
			posts: allPosts
		}
	}
}
