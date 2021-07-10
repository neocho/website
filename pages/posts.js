import { getPosts } from '@api'; 
import Header from '@includes/Header';
import Footer from '@includes/Footer'; 

export default function Posts(props) {
	return (
		<div className="place-items-center min-h-screen">
			<div className="ml-2">
				<Header title={"Home"}/>

				<div className="pl-5 pr-5 mb-10">
					{
						props.posts.map((post,idx) => {
							return(
								<a href={'/posts/' + post.slug} key={idx}>
									<p className="font-body text-xs">{post.date}</p>
									<h1 className="hover:text-gray-500 font-body text-base font-bold mb-4">{post.title}</h1>
								</a>	
							);
						})
					}
				</div>

				<Footer />

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
