import Link from 'next/link';
import { getPosts } from '@api'; 
import Head from 'next/head';
import Header from '_includes/Header';
import Footer from '_includes/Footer'; 

export default function Posts(props) {
	return (
		<div className="min-h-screen p-7"> 
			<Header title={"Posts"}/>
			<div className="mt-5 w-30">
				{
					props.posts.map((post,idx) => {
						return(
							<a href={'/posts/' + post.slug} key={idx}>
								<h1 className="hover:text-gray-700 font-body text-base font-semibold mb-2">{post.date}: {post.title}</h1>
							</a>	
						);
					})
				}
			</div>
			<Footer />
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
